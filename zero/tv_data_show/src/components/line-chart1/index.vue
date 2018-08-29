<template>
  <div id="line_chart_1"></div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/chart/line");
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let myChart = echarts.init(document.getElementById("line_chart_1"));
      let option = {
        color: ["#fff"],
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
            name: "订单数量/笔",
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
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
            name: "订单",
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
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(55,219,150,1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(10,32,118,1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "#20d0ff"
              },
              emphasis: {
                color: "rgb(0,196,132)",
                borderColor: "rgba(0,196,132,0.2)",
                extraCssText: "box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);",
                borderWidth: 10
              }
            },
            data: [2200, 1820, 1910, 1340, 1500, 1200, 1100]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
#line_chart_1 {
  width: 100%;
  height: 100%;
}
</style>
