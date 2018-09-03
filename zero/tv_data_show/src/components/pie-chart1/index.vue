<template>
  <div id="pie_chart_1"></div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/chart/pie");
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let myChart = echarts.init(document.getElementById("pie_chart_1"));
      let data = [
        {
          value: 26,
          name: "小炒肉",
          sum: 2600,
          itemStyle: {
            normal: {
              color: "#9ef13d"
            }
          }
        },
        {
          value: 16.7,
          name: "红烧狮头",
          sum: 1670,
          itemStyle: {
            normal: {
              color: "#3df36b"
            }
          }
        },
        {
          value: 12.4,
          name: "酸菜鱼",
          sum: 1240,
          itemStyle: {
            normal: {
              color: "#3bf19e"
            }
          }
        },
        {
          value: 12.2,
          name: "新奇士橙",
          sum: 1220,
          itemStyle: {
            normal: {
              color: "#40fec0"
            }
          }
        },
        {
          value: 8.4,
          name: "小郑酥烧饼",
          sum: 840,
          itemStyle: {
            normal: {
              color: "#40ffdd"
            }
          }
        },
        {
          value: 7.6,
          name: "黑豆角烧鱼",
          sum: 760,
          itemStyle: {
            normal: {
              color: "#40f8ff"
            }
          }
        },
        {
          value: 5.9,
          name: "番茄炒蛋",
          sum: 590,
          itemStyle: {
            normal: {
              color: "#42d3ff"
            }
          }
        },
        {
          value: 3.6,
          name: "秘制鲜辣酱-特辣",
          sum: 360,
          itemStyle: {
            normal: {
              color: "#41d2ff"
            }
          }
        },
        {
          value: 2.9,
          name: "溧水草鸡蛋",
          sum: 290,
          itemStyle: {
            normal: {
              color: "#3dd4ff"
            }
          }
        },
        {
          value: 2.2,
          name: "徐想猕猴桃",
          sum: 220,
          itemStyle: {
            normal: {
              color: "#3ea3fd"
            }
          }
        },
        {
          value: 1.7,
          name: "迷你小菠萝",
          sum: 170,
          itemStyle: {
            normal: {
              color: "#407fff"
            }
          }
        },
        {
          value: 0.4,
          name: "吉林大米",
          sum: 40,
          itemStyle: {
            normal: {
              color: "#3e48ff"
            }
          }
        }
      ];
      let data_name = [];
      for (let n in data) {
        data[n]["name"] =
          data[n]["name"] +
          " " +
          data[n]["value"] +
          "%" +
          "  ￥" +
          data[n]["sum"];
        data_name.push(data[n]["name"]);
      }
      if (window.innerHeight < 1080) {
        data_name = data_name.slice(0, 9);
      }
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}"
        },
        legend: {
          orient: "vertical",
          top: "10%",
          right: "10%",
          itemHeight: 6,
          itemWidth: 6,
          padding: 0,
          data: data_name,
          icon: "circle",
          textStyle: {
            color: "#fff",
            fontsize: 12
          }
        },
        series: [
          {
            name: "销售额占比",
            type: "pie",
            radius: "55%",
            center: ["25%", "50%"],
            data: data,
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
#pie_chart_1 {
  width: 100%;
  height: 100%;
}
</style>
