<template>
  <div class="m-istyle">
    <!-- 事件冒泡 -->
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active:kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.adress}}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info" v-else>
               <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.units}}均</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
      <!-- <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>-->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "http://p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c",
          title: "丰泽园饭店（王府井店）",
          sub_title: "4人自选套餐，提供免费WiFi",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price:18,
            units: '人',
          },
          rentNum: 10,
          adress: " 王府井/东单"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/36cbbb3fe477d86bc7bf45714724b5f6405667.jpg@368w_208h_1e_1c",
          title: "晓本烘焙·茶本铺（东方广场店）",
          sub_title: "星座生日蛋糕1个，约6英寸，圆形",
          price_info: {
            current_price: 269,
            old_price: 298,
             avg_price:null,
            units: null,
          },
          rentNum:10,
          adress: " 王府井/东单"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/0a56a205c9a62ac5df50900dc412b2b01651570.jpg@368w_208h_1e_1c",
          title: "幸福西饼生日蛋糕店（马家楼店）",
          sub_title: "全心全意/提拉米苏（2选1）1个，约2磅，心形",
          price_info: {
            current_price: 198,
            old_price: 296
          },
          adress: " 草桥/公益西桥"
        },
        {
          image:
            "//p0.meituan.net/merchantpic/8d40aacd77004b484151c1ee547918d287691.jpg@368w_208h_1e_1c",
          title: "天安瑞嘉烤鸭",
          sub_title: "老北京炸酱面商务套餐，建议2人使用",
          price_info: {
            current_price: 88,
            old_price: 150
          },
          adress: " 王府井/东单"
        }
      ]
    };
  },
  // 子组件接收父组件 props
  props: ["nav"],
  methods: {
    over(e) {
      console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      // console.log(tagName)
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // 动态获取数据 ajax请求
    }
  }
};
</script>
