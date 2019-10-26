// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import '@/assets/css/public/layout.css'
import '@/assets/css/public/header/topbar.css'
import '@/assets/css/public/header/search.css'
import '@/assets/css/public/footer.css'
import '@/assets/css/index/index.css'
import '@/assets/css/index/life.css'
import '@/assets/css/index/artistic.css'
import '@/assets/css/changecity/select.css'
import '@/assets/css/changecity/iselect.css'
import '@/assets/css/changecity/hot.css'
import '@/assets/css/changecity/category.css'
import '@/assets/css/products/index.css'
import '@/assets/css/products/list.css'
import '@/assets/css/login/index.css'
import '@/assets/css/register/index.css'

import store from './store'
Vue.use(ElementUI)

Vue.config.productionTip = false
// 自定义指令
Vue.directive('document-click', {
  bind(el, binding, vnode){
    // console.log('----bind' , el, binding, vnode);
    document.addEventListener('click', binding.value, false)
  },
  inserted(){
    console.log('insert')
  },
  update(){
    console.log('update')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
