<!-- home -->
<template>
  <div class="app-container  f24">
    <div>
      <div @click="echarts1">折线图堆叠</div>
      <div class="echarts1" id="echarts1ID"></div>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js';
export default {
  components: {},

  data() {
    return {
      active: 0
    };
  },

  computed: {},

  mounted() {},

  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      getUserInfo()
        .then(() => {})
        .catch(() => {});
    },
    //折线图堆叠
    echarts1: function() {
      var option = {
        title: {
          text: '折线图堆叠',
          show: false
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top:  '20%',
          containLabel: true
        },
        //下载工具
        // toolbox: {
        //     feature: {
        //         saveAsImage: {},
        //     }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '数值',
          type: 'value',
          // min: 0, // 设置y轴刻度的最小值
          // max: 1800, // 设置y轴刻度的最大值
          splitNumber: 5, // 设置y轴刻度间隔个数
          // axisLine: {
          //   lineStyle: {
          //     // 设置y轴颜色
          //     color: '#87CEFA'
          //   }
          // }
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 290, 330, 320]
          }
        ]
      };
      let myChart = this.$echarts.init(document.getElementById('echarts1ID'));
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/sass/tabs.scss';
.app-container {
  .echarts1 {
    height: r(700px);
    width: 100%;
    border: dashed #C0BEBE 1px;
  }
}
</style>
