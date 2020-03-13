import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// 引入全局样式
import '@/assets/sass/tabs.scss'




// 全局引入按需引入UI库 vant
import '@/plugins/vant'

/* 图片懒加载 */
import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true
});
// 根据路由设置标题
router.beforeEach((to, from, next) => {
    /*路由发生改变修改页面的title */
    // if(to.meta.title) {
    //   document.title = to.meta.title
    // }
	/* 在这里也可以做用户登录状态的判断 https://www.cnblogs.com/beileixinqing/p/7729780.html */
    next();
});

//  IE 兼容
import '@babel/polyfill'
// 移动端适配
import 'lib-flexible/flexible.js'

// filters
import './filters'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
