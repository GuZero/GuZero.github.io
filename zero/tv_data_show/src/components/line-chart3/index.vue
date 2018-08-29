<template>
  <div id="line_chart_3"></div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/chart/line");
require("echarts/lib/component/legendScroll");
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let myChart = echarts.init(document.getElementById("line_chart_3"));
      let option = {
        legend: {
          show: true,
          left: "right",
          data: ["用户数", "新增用户数"],
          y: "6%",
          padding:20,
          itemWidth: 18,
          itemHeight: 12,
          icon: "circle",
          orient: "vertical",
          textStyle: { color: "#fff", fontSize: 14 }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#3940ab"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            },
            data: ["8.27", "8.28", "8.29", "8.30", "8.31", "9.1", "9.2"]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "用户数/新增用户数",
            nameTextStyle: {
              color: "#fff",
              fontSize: 12
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#3940ab"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "用户数",
            type: "line",
            smooth: false,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: true,
            lineStyle: {
              normal: {
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: "#344f92"
              }
            },
            itemStyle: {
              normal: {
                color: "#20a2f8"
              },
              emphasis: {
                color: "rgb(0,196,132)",
                borderColor: "rgba(0,196,132,0.2)",
                extraCssText: "box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);",
                borderWidth: 10
              }
            },
            data: [2100, 1220, 1410, 1240, 1110, 1800, 1900]
          },
          {
            name: "新增用户数",
            type: "line",
            smooth: false,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: true,
            lineStyle: {
              normal: {
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: "#2fa281"
              }
            },
            itemStyle: {
              normal: {
                color: "#32ab88"
              },
              emphasis: {
                color: "rgb(0,196,132)",
                borderColor: "rgba(0,196,132,0.2)",
                extraCssText: "box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);",
                borderWidth: 10
              }
            },
            data: [600, 720, 310, 240, 810, 400, 460]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
#line_chart_3 {
  width: 100%;
  height: 100%;
}
</style>
