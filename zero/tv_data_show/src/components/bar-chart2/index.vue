<template>
  <div id="bar_chart_2"></div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let myChart = echarts.init(document.getElementById("bar_chart_2"));
      let option = {
        xAxis: {
          data: ["8.27", "8.28", "8.29", "8.30", "8.31", "9.1", "9.2"],
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#2f3788"
            }
          },
          axisLabel: {
            color: "#fff",
            fontSize: 14
          }
        },
        yAxis: {
		  name: "金额/元",
          nameTextStyle: {
            color: "#fff",
            fontSize: 0
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "rgb(170,170,170)"
          },
          axisLine: {
            lineStyle: {
              color: "#0177d4"
            }
          },
          interval: 500
        },
        series: [
          {
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#1891d6"
                    },
                    {
                      offset: 0.8,
                      color: "#364ecc"
                    }
                  ],
                  false
                )
              }
            },
            data: [205, 302, 106, 204, 470, 200, 121]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
#bar_chart_2 {
  width: 100%;
  height: 100%;
}
</style>
