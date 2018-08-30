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
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
					<p class="flex flex-justify-between">
						<span>云厨小站24</span>
						<span>2300</span>
						<span>4434.5</span>
					</p>
				</div>
			</div>
			<div class="left-center-box">
				<div class="title-box title-font flex flex-align-center flex-justify-center">商品销售额占比（TOP10）</div>
				<div class="content-box">
					<pie-chart1></pie-chart1>
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
					<p class="f16">{{time}}</p>
				</div>
			</header>
			<div class="center-left-box rel">
				<div class="card-box">
					<div class="f16">小站用户</div>
					<div class="card-content">
						<div class="flex flex-align-center">
							<span class="icon"></span>
							<span>用户总数：88888</span>
						</div>
						<div class="flex flex-align-center">
							<span class="icon"></span>
							<span>今日新增：666</span>
						</div>
					</div>
				</div>
				<div class="card-box">
					<div class="f16">昨日数据</div>
					<div class="card-content">
						<div class="flex flex-align-center">
							<span class="icon"></span>
							<span>昨日订单数量：888</span>
						</div>
						<div class="flex flex-align-center">
							<span class="icon"></span>
							<span>昨日销售额：666</span>
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
								<p class="f16">666</p>
							</div>
							<div>
								<p>今日开发</p>
								<p class="f16">666</p>
							</div>
							<div>
								<p>上周开发</p>
								<p class="f16">666</p>
							</div>
						</div>
					</div>
					<div class="progress-item rel">
						<div class="item-title title-font-2 abs">小站安装进度</div>
						<div class="item-content flex flex-justify-between flex-align-center">
							<div>
								<p>累计安装</p>
								<p class="f16">666</p>
							</div>
							<div>
								<p>今日安装</p>
								<p class="f16">666</p>
							</div>
							<div>
								<p>上周安装</p>
								<p class="f16">666</p>
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
			<div class="center-right-box rel">
				<div class="tips-box">
					<p>今日订单量：55555</p>
					<p class="text-algin-center">同比昨日：4%</p>
				</div>
				<div class="tips-box">
					<p>今日订单量：55555</p>
					<p class="text-algin-center">同比昨日：4%</p>
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
      time: new Date().format("yyyy-MM-dd hh:mm")
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
  }
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>

