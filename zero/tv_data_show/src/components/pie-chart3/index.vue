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
        "#9ef13c",
        "#3cf16b",
        "#3cf19a",
        "#40ffbe",
        "#40ffdd",
        "#40f8ff",
        "#40d4ff",
        "#40a3ff",
        "#407eff",
        "#405bff",
        "#4045ff",
        "#653dfc"
      ];

      // 总和
      let total = {
        value: "小站总数量",
        name: "1000"
      };
      let data = [
        {
          value: 4,
          sum: 400,
          name: "玄武区"
        },
        {
          value: 6,
          sum: 600,
          name: "秦淮区"
        },
        {
          value: 9,
          sum: 900,
          name: "鼓楼区"
        },
        {
          value: 15,
          sum: 1500,
          name: "建邺区"
        },
        {
          value: 21,
          sum: 2100,
          name: "栖霞区"
        },
        {
          value: 10,
          sum: 1000,
          name: "雨花台区"
        },
        {
          value: 3,
          sum: 300,
          name: "浦口区"
        },
        {
          value: 25,
          sum: 2500,
          name: "江宁区"
        },
        {
          value: 5,
          sum: 500,
          name: "六合区"
        },
        {
          value: 10,
          sum: 1000,
          name: "溧水区"
        },
        {
          value: 10,
          sum: 1000,
          name: "高淳区"
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
        title: [
          {
            text: total.name,
            left: "48%",
            top: "30%",
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#fff",
              fontWeight: "normal",
              fontSize: 12
            }
          },
          {
            text: total.value,
            left: "48%",
            top: "36%",
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#fff",
              fontWeight: "normal",
              fontSize: 12
            }
          }
        ],
        legend: {
          orient: "vertical",
          bottom: 10,
          right: "center",
          data: data_name.slice(0, 4),
          icon: "circle",
          itemHeight: 6,
          itemWidth: 6,
          textStyle: {
            color: "#fff",
            fontsize: 12
          }
        },
        series: [
          {
            hoverAnimation: false, //设置饼图默认的展开样式
            radius: ["40%", "60%"],
            center: ["50%", "35%"],
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
  width: 100%;
  height: 100%;
}
</style>
