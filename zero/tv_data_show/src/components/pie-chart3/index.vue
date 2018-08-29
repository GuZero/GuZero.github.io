<template>
  <div id="pie_chart_3"></div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/chart/pie");
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
      let myChart = echarts.init(document.getElementById("pie_chart_3"));
      //  颜色集合
      let colorList = [
        "#9ef13d",
        "#3df36b",
        "#3bf19e",
        "#40fec0",
        "#40ffdd",
        "#40f8ff",
        "#42d3ff",
        "#41d2ff",
        "#3dd4ff",
        "#3e48ff"
      ];

      // 总和
      let total = {
        value: "小站总数量",
        name: "1000"
      };

      let data = [
        {
          value: 35,
          sum: 350,
          name: "秦淮区"
        },
        {
          value: 15,
          sum: 150,
          name: "江宁区"
        },
        {
          value: 25,
          sum: 150,
          name: "雨花台区"
        },
        {
          value: 25,
          sum: 250,
          name: "玄武区"
        }
      ];
      let data_name = [];
      for (let n in data) {
        data[n]["name"] =
          data[n]["name"] +
          data[n]["value"] +
          "%" +
          "         ￥" +
          data[n]["sum"];
        data_name.push(data[n]["name"]);
      }

      echarts.util.each(data, function(item, index) {
        item.itemStyle = {
          normal: {
            color: colorList[index]
          }
        };
      });

      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        backgroundColor: "#ffffff",
        title: [
          {
            text: total.name,
            left: "49%",
            top: "46%",
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#999",
              fontWeight: "normal",
              fontSize: 40
            }
          },
          {
            text: total.value,
            left: "49%",
            top: "56%",
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#666",
              fontWeight: "normal",
              fontSize: 20
            }
          }
        ],
        legend: {
          orient: "vertical",
          bottom: 0,
          right: "center",
          data: data_name,
          icon: "circle",
          textStyle: {
            color: "#000",
            fontWeight: "normal",
            fontFamily: "宋体"
          }
        },
        series: [
          {
            hoverAnimation: false, //设置饼图默认的展开样式
            radius: [60, 100],
            name: "pie",
            type: "pie",
            selectedMode: "single",
            selectedOffset: 16, //选中是扇区偏移量
            clockwise: true,
            startAngle: 90,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderWidth: 0,
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.2)"
              }
            },
            data: data
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
#pie_chart_3 {
  width: 300px;
  height: 300px;
}
</style>
