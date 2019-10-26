<template>
    <div :class="['choose-wrap', disabled?'disabled':'']" @click="showWrapper" v-document-click="documentClick">
        <div class="choose">
            <span>{{value}}</span>
        <i class="el-icon-caret-bottom"></i>
        <div :class="{'mt-content': true, 'active':showWrapperActive}">
            <h2>{{title}}</h2>
            <div :class="['wrapper', className]">
                <!-- 逗号后需要空格 -->
                <div class="col" v-for="(listData, index) in renderList" :key="index">
                    <span :class="{'mt-item': true, 'active': item.name == value}" v-for="(item, index) in listData" :key="index" @click="changeValue(item)">{{item.name}}</span>
                </div>
                <!-- <div class="col" v-for="(listData,index) in renderList" :key="index">
                    <span :class="{'mt-item':true, 'active':item.name == value}" v-for="(item, index) in listData" :key="index" @click="changeValue(item)">{{item.name}}</span>
                </div> -->
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:[
        "list",
        "value",
        "title",
        "showWrapperActive",
        "disabled",
        "className"
    ],
    computed:{
        renderList: function (){
            let col = Math.ceil(this.list.length / 12);
            let resultList = [];
            for(var i = 0; i < col; i++){
                let data = this.list.slice(i * 12, i * 12 + 12);
                resultList.push(data)
            }
            return resultList;
        }
    },
    methods:{
        showWrapper(e) {
            // 阻止事件冒泡
            e.stopPropagation();
            // this.showWrapperActive = true;
            // 调用父组件自定义事件
            if(!this.disabled){
            this.$emit('change_active', true);
            }

        },
        documentClick(){
            // this.showWrapperActive = false;
            this.$emit('change_active', false);
            console.log('document-click');
        },
        changeValue(item){
            this.$emit('change', item);
        }
    }

}
</script>