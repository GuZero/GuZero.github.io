<template>
    <div class="container flex">
        <div class="loading" v-if="loading">
          <img src="//img.alicdn.com/tfs/TB1RzYryY9YBuNjy0FgXXcxcXXa-300-300.gif" alt="loading">
        </div>
		<div class="left-box">
			<div class="top-box">
				<div class="title-box title-font flex flex-align-center flex-justify-center">小站昨日销售排行（TOP10）</div>
				<div class="content-box">
					<div class="title-font-1 flex flex-justify-between">
						<span>小站名称</span>
						<span>订单数量</span>
						<span>销售额</span>
					</div>
					<p class="flex flex-justify-between">
						<span>云厨小站11</span>
						<span>853</span>
						<span>4434</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站22</span>
						<span>715</span>
						<span>4234</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>702</span>
						<span>4030.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>650</span>
						<span>3820.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>635</span>
						<span>3532.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>605</span>
						<span>3400</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>582</span>
						<span>3200</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>576</span>
						<span>3122.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>542</span>
						<span>3016.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>506</span>
						<span>2810.5</span>
					</p>
				</div>
			</div>
			<div class="left-center-box">
				<div class="title-box title-font flex flex-align-center flex-justify-center">商品销售额占比（TOP10）</div>
				<div class="content-box rel">
					<pie-chart1></pie-chart1>
					<p class="abs">TOP10销售总额：￥13,145</p>
				</div>
			</div>
			<div class="left-bottom-box">
				<div class="bottom-item rel">
					<div class="item-title title-font-2 abs">近七天线上商城订单数</div>
					<bar-chart1></bar-chart1>
				</div>
				<div class="bottom-item rel">
					<div class="item-title title-font-2 abs">近七天线上商城销售额</div>
					<bar-chart2></bar-chart2>
				</div>
			</div>
		</div>
		<div class="center-box flex rel">
			<header class="abs flex flex-align-center flex-justify-center">
				<div>
					<p>云厨小站战略分布图</p>
					<p class="f16">{{now}}</p>
				</div>
			</header>
			<div class="center-left-box rel">
				<div class="card-box">
					<div class="f16">小站用户</div>
					<div class="card-content">
						<div class="flex flex-align-center">
							<span class="icon"></span>
							<span>用户总数：10486</span>
						</div>
						<div class="flex flex-align-center">
							<span class="icon"></span>
							<span>今日新增：243</span>
						</div>
					</div>
				</div>
				<div class="card-box">
					<div class="f16">昨日数据</div>
					<div class="card-content">
						<div class="flex flex-align-center">
							<span class="icon"></span>
							<span>昨日订单数量：742</span>
						</div>
						<div class="flex flex-align-center">
							<span class="icon"></span>
							<span>昨日销售额：3780</span>
						</div>
					</div>
				</div>
				<div class="msg-box">
					<Msg></Msg>
				</div>
				<div class="progress-box abs">
					<div class="progress-item rel">
						<div class="item-title title-font-2 abs">点位开发进度</div>
						<div class="item-content flex flex-justify-between flex-align-center">
							<div>
								<p>累计开发</p>
								<p class="f16">72</p>
							</div>
							<div>
								<p>今日开发</p>
								<p class="f16">1</p>
							</div>
							<div>
								<p>上周开发</p>
								<p class="f16">12</p>
							</div>
						</div>
					</div>
					<div class="progress-item rel">
						<div class="item-title title-font-2 abs">小站安装进度</div>
						<div class="item-content flex flex-justify-between flex-align-center">
							<div>
								<p>累计安装</p>
								<p class="f16">65</p>
							</div>
							<div>
								<p>今日安装</p>
								<p class="f16">2</p>
							</div>
							<div>
								<p>上周安装</p>
								<p class="f16">9</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="center-map-box rel">
				<div class="map abs">
					<div class="map-legend abs">
						<div class="flex flex-align-center">
							<span class="icon-1"></span>
							<p>云厨1站分布</p>
						</div>
						<div class="flex flex-align-center">
							<span class="icon-1 icon-1-bg"></span>
							<p>云厨小站分布</p>
						</div>
					</div>
					<Map></Map>
				</div>
			</div>
			<div class="center-right-box rel" :class="{'center-right-box-pd-9':innerHeight}">
				<div class="tips-box">
					<p :class="{'p-pd-3':innerHeight}">今日订单量：812</p>
					<p class="text-algin-center">同比昨日：1.3%</p>
				</div>
				<div class="tips-box">
					<p>今日销售额：4231.5</p>
					<p class="text-algin-center">同比昨日：1.2%</p>
				</div>
				<div class="pre-chart-box">
					<div class="pre-chart rel">
						<div class="item-title title-font-2 abs">各区小站数量占比</div>
						<pie-chart3></pie-chart3>
					</div>
					<div class="pre-chart rel">
						<div class="item-title title-font-2 abs">昨日各区小站数量占比</div>
						<pie-chart2></pie-chart2>
					</div>
				</div>
			</div>
		</div>
		<div class="right-box">
			<div class="top-box">
				<div class="title-box title-font flex flex-align-center">近七日订单趋势</div>
				<div class="content-box">
					<line-chart1></line-chart1>
				</div>
			</div>
			<div class="right-center-box">
				<div class="title-box title-font flex flex-align-center">近七日销售额趋势</div>
				<div class="content-box">
					<line-chart2></line-chart2>
				</div>
			</div>
			<div class="right-bottom-box">
				<div class="title-box title-font flex flex-align-center">近七日用户数据趋势</div>
				<div class="content-box">
					<line-chart3></line-chart3>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import Map from "../components/map/index";
import Msg from "../components/msg/index";
import lineChart1 from "../components/line-chart1/index";
import lineChart2 from "../components/line-chart2/index";
import lineChart3 from "../components/line-chart3/index";
import pieChart1 from "../components/pie-chart1/index";
import pieChart2 from "../components/pie-chart2/index";
import pieChart3 from "../components/pie-chart3/index";
import barChart1 from "../components/bar-chart1/index";
import barChart2 from "../components/bar-chart2/index";
export default {
  data() {
    return {
      loading: false,
      now: new Date().format("yyyy-MM-dd hh:mm:ss"),
      preloads: [
        "//img.aimoge.com/llxjn1k6oSSnCjlQUvQOi184SVoe", //bg
      ],
      _interval: null,
      innerHeight: (window.innerHeight<1080),
      style: {
        pie_height: "90%"
      }
    };
  },
  components: {
    Map,
    Msg,
    lineChart1,
    lineChart2,
    lineChart3,
    pieChart1,
    pieChart2,
    pieChart3,
    barChart1,
    barChart2
  },
  created() {},
  mounted() {
    this.initDom();
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this._interval);
    next();
  },
  methods: {
    filePreload(file, process, success, error) {
      let preload = new createjs.LoadQueue(true);
      preload.on("fileload", function(e) {});
      preload.on("progress", process);
      preload.on("complete", success);
      if (error) preload.on("error", error);
      preload.loadManifest(file);
    },
    initDom() {
      this.filePreload(
        this.preloads,
        e => {
          this.loading = true;
        },
        e => {
          this.loading = false;
          this.setTime();
        }
      );
    },
    setTime() {
      this._interval = setInterval(() => {
        this.now = new Date().format("yyyy-MM-dd hh:mm:ss");
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>

