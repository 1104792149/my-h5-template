<template>
  <div><div id="myChart" :style="{ width: '100vw', height: '400px' }"></div></div>
</template>

<script>
import gds from '../../dtData/ygggh.js';
export default {
  name: 'hello',
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.createMap(gds);
  },
  methods: {
    //生成地图
    createMap: function(data) {
      var markdata = []; //这是为了给地图上添加气泡图标,拿取备用数据
      //取得json的样式，读取json文件
      markdata = this.convertData(data.features);
      this.$echarts.registerMap('demo', data);
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      myChart.setOption({
        dataRange: {
          min: 0, //颜色区间的最小值
          max: 100, //颜色区间的最大值，和data中的最大值一致
          x: 'left',
          y: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          inRange: {
            //颜色区间
            color: ['#A0D9EF', '#71BDE2','#6484C7','#5869C3','#0033CC']
          }
        },
        tooltip: {
          show: true,
          formatter: '电压合格率<br /> {b}: {c0}'+'%'
        },
        series: [
          {
            type: 'map',
            map: 'demo',
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: markdata,
            //悬停气泡
            // markPoint: {
            //   symbolSize: 60,
            //   itemStyle: {
            //     normal: {
            //       borderColor: '#33CBFF',
            //       color: '#33CBFF',
            //       borderWidth: 1, // 标注边线线宽，单位px，默认为1
            //       label: {
            //         show: true
            //       }
            //     }
            //   },

            //   data: markdata
            // }
          }
        ]
      });
    },
    //处理整合   气泡图标数据
    convertData: function(arrs) {
      var markdata = [];
      var valuess = [10, 20, 30, 60, 90];
      for (var i = 0; i < arrs.length; i++) {
        markdata.push({});
        if (arrs[i].properties.name == '安次区') {
          markdata[i].coord = new Array(parseFloat(arrs[i].properties.center[0]) + 0.1, parseFloat(arrs[i].properties.center[1]) - 0.18);
          console.log(markdata[i]);
        } else {
          markdata[i].coord = arrs[i].properties.center;
        }
        markdata[i].name = arrs[i].properties.name;

        markdata[i].value = valuess[i];
      }
      console.log(markdata);
      return markdata;
    }
  }
};
</script>

<style></style>
