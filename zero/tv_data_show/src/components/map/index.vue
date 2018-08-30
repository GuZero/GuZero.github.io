<template>
  <div id="main"></div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/map");
require("echarts/lib/component/geo");
require("echarts/lib/chart/scatter");
require("echarts/lib/chart/effectScatter");
import geoJson from "../../assets/json/nanjing.json";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      echarts.registerMap("nanjing", geoJson);
      let data = [
        {
          name: "1",
          value: [118.77, 32.16, 120]
        },
        {
          name: "2",
          value: [118.8, 32.05, 120]
        },
        {
          name: "3",
          value: [118.8, 32.02, 120]
        },
        {
          name: "4",
          value: [118.77, 32.28, 120]
        },
        {
          name: "5",
          value: [118.75, 32.03, 120]
        },
        {
          name: "6",
          value: [118.88, 32.12, 120]
        },
        {
          name: "7",
          value: [118.62, 32.05, 120]
        },
        {
          name: "8",
          value: [118.67, 32.25, 120]
        },
        {
          name: "9",
          value: [118.83, 32.35, 120]
        },
        {
          name: "10",
          value: [118.7, 32.18, 120]
        },
        {
          name: "11",
          value: [118.75, 32.13, 120]
        },
        {
          name: "12",
          value: [118.73, 32.22, 120]
        },
        {
          name: "13",
          value: [118.62, 32.19, 120]
        },
        {
          name: "14",
          value: [118.67, 32.25, 120]
        },
        {
          name: "15",
          value: [118.83, 32.3, 120]
        },
        {
          name: "16",
          value: [118.88, 32.33, 120]
        },
        {
          name: "18",
          value: [118.68, 32.26, 120]
        },
        {
          name: "19",
          value: [118.88, 32.12, 120]
        },
        {
          name: "20",
          value: [118.85, 31.32, 120]
        },
        {
          name: "21",
          value: [118.84, 31.69, 120]
        },
        {
          name: "22",
          value: [118.98, 31.92, 120]
        },
        {
          name: "23",
          value: [118.93, 31.56, 120]
        },
        {
          name: "24",
          value: [118.99, 31.43, 120]
        }
      ];
      let myChart = echarts.init(document.getElementById("main"));
      let option = {
        geo: {
          show: true,
          map: "nanjing",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              borderColor: "#a9d8ff",
              borderWidth: 1,
              areaColor: "#1f72ea"
            },
            emphasis: {
              areaColor: "#3cbcf1",
              borderWidth: 0
            }
          }
        },
        series: [
          {
            type: "map",
            map: "nanjing",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: "#000"
                }
              }
            },
            roam: true
          },
        //   {
        //     name: "点",
        //     type: "scatter",
        //     coordinateSystem: "geo",
        //     symbol: "pin",
        //     symbolSize: 30,
        //     itemStyle: {
        //       normal: {
        //         color: "#F62157" //标志颜色
        //       }
        //     },
        //     zlevel: 6,
        //     data: data
        //   },
          {
            name: "云厨1站",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: data.slice(0, 16),
            symbolSize: 16,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            // label: {
            //   normal: {
            //     formatter: "{b}",
            //     position: "right",
            //     show: true
            //   }
            // },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: "#eb6100",
                shadowBlur: 20,
                shadowColor: "#eb6100"
              }
            },
            zlevel: 1
          },
          {
            name: "云厨小站",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: data.slice(16, data.length-1),
            symbolSize: 16,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            // label: {
            //   normal: {
            //     formatter: "{b}",
            //     position: "right",
            //     show: true
            //   }
            // },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: "#8fc31f",
                shadowBlur: 20,
                shadowColor: "#8fc31f"
              }
            },
            zlevel: 1
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
}
</style>
