<!-- home -->
<template>
  <!--  :style="{ paddingBottom: tabsHig + 'px' }"-->
  <div id="tabs" class="tabs page-shell" >
    <div  class="views" :style="{ paddingBottom: tabsHig + 'px', }">
      <keep-alive><router-view  v-if="$route.meta.keepAlive"></router-view></keep-alive>
      <router-view  v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <van-tabbar id="tabbar" v-model="active" route active-color="#ffb800" inactive-color="#a1a1a1" @change="onChange">
      <van-tabbar-item v-for="(itme, index) in tabsConfArr" :key="index" :to="itme.pageUrl">
        <span>{{ itme.title }}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? itme.yesImg : itme.noImg">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { api } from '@/config'
import { Tabbar, TabbarItem } from 'vant'
import { base } from '../mixin/base.js'
export default {
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem
  },
  mixins: [base],
  data() {
    return {
      active: 0,
      tabsHig: 10,
      tabsConfArr: [
        { title: '首页', yesImg: require('../assets/tabImg/34.png'), noImg: require('../assets/tabImg/33.png'), pageUrl: '/home/index' },
        { title: '我的', yesImg: require('../assets/tabImg/17.png'), noImg: require('../assets/tabImg/18.png'), pageUrl: '/my/userInfo' }
      ]
    }
  },
  computed: {},
  mounted() {},
  created() {
    var _this = this
    setTimeout(function() {
      console.info(document.getElementById('tabbar').offsetHeight)
      _this.tabsHig = document.getElementById('tabbar').offsetHeight
    }, 60)
  },
  methods: {
    onChange: function() {
      this.tabsHig = document.getElementById('tabbar').offsetHeight
    }
  }
}
</script>
<style lang="scss">
@import '../assets/sass/tabs.scss';
.views{
  min-height: 100vh !important;
}
</style>
