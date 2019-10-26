<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
            <router-link :to="{name: 'index'}"><img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团"></router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家和地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
              <dt>热门搜索</dt>
              <dd v-for="(item,index) in hotPlaceList" :key="index">
                  <router-link :to="{name: 'goods' ,params: {name: item}}">{{item}}</router-link>
              </dd>
              <!-- <dd>
                  <router-link to="/">天安门广场</router-link>
              </dd>   -->
          </dl>
          <dl class="searchList" v-if="isSearchList">
              <dd v-for="(item,index) in searchList" :key="index">
                  <router-link :to="{name: 'goods' ,params: {name: item}}">{{item}}</router-link>
              </dd>
              
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            searchWord:'',
            isFocus:false,
            hotPlaceList: [],
            searchList: [],
            suggestList: []
          }
    },
    created() {
      api.searchHotWords().then(res =>{
        console.log(res);
        this.hotPlaceList = res.data.data;
        this.suggestList = res.data.data;
      })
    },
    computed: {
        isHotPlace: function(){
            return this.isFocus && !this.searchWord;
        },
        isSearchList: function(){
            return this.isFocus && this.searchWord;
        }

    },
    methods:{
        focus(){
            this.isFocus = true;
        },
        blur(){
            var self = this;
            setTimeout(function () {
                self.isFocus = false;
            }, 200)
        },
        input(){
          let val = this.searchWord
            api.getSearchList().then(res => {
            this.searchList = res.data.data.list.filter((item, index) => {
              return item.indexOf(val) > -1;
            });
          });
        }
    }
};
</script>
<style>
.layout-default .el-header .m-header {
  width: 100%;
}

.m-header > .el-row:nth-child(1) {
  width: 1190px;
  margin: 0 auto;
  z-index: 9999;
  height: 40px;
  line-height: 40px;
}
.m-header > .el-row:nth-child(2) {
  background: #fff;
}
.m-header > .el-row:nth-child(2) .search-panel {
  width: 1190px;
  margin: 0 auto;
}
.m-header > .el-main {
  overflow: unset;
}
.m-header a {
  text-decoration: none;
}

</style>