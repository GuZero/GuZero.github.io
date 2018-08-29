<template>
  <div id="bar_chart_1"></div>
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
      let myChart = echarts.init(document.getElementById("bar_chart_1"));
      let option = {
        xAxis: {
          data: ["8.27", "8.28", "8.29", "8.30", "8.31", "9.1", "9.2"],
          axisLine: {
            lineStyle: {
              color: "#0177d4"
            }
          },
          axisLabel: {
            color: "#fff",
            fontSize: 12
          }
        },
        yAxis: {
          name: "订单量/笔",
          nameTextStyle: {
            color: "#fff",
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: "#0177d4"
            }
          },
          axisLabel: {
            color: "#fff",
            fontSize: 12
          },
          splitLine: {
            show: false,
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
                      color: "#1698d6"
                    },
                    {
                      offset: 0.8,
                      color: "#34d794"
                    }
                  ],
                  false
                )
              }
            },
            data: [254, 325, 165, 245, 475, 201, 121]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
#bar_chart_1 {
  width: 100%;
  height: 100%;
}
</style>
