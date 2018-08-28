<template>
    <div class="container">
        <div class="loading" v-if="loading">
          <img src="//img.alicdn.com/tfs/TB1RzYryY9YBuNjy0FgXXcxcXXa-300-300.gif" alt="loading">
        </div>
		<header>
			<p>云厨小站门店导览图</p>
			<p>2018-8-27 18:38:28</p>
		</header>
		<!-- <Msg></Msg> -->
        <!-- <Map class="map"></Map> -->
        <pie-chart1></pie-chart1>
    </div>
</template>

<script>
import Map from "../components/map/index";
import lineChart1 from "../components/line-chart1/index";
import lineChart2 from "../components/line-chart2/index";
import lineChart3 from "../components/line-chart3/index";
import pieChart1 from "../components/pie-chart1/index";
import Msg from "../components/msg/index";
export default {
  data() {
    return {
      loading: false
    };
  },
  components: {
    Map,
	Msg,
	lineChart1,
	lineChart2,
	lineChart3,
	pieChart1
  }
};
</script>
<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0f2a42;
}
.loading img {
  width: 10%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -5%;
  margin-left: -5%;
}
header {
  width: 20%;
  text-align: center;
  margin: 36px auto;
}
header p:first-child {
  font-size: 36px;
}
header p:last-child {
  margin-top: 20px;
  font-size: 24px;
}
.map {
  width: 50%;
  height: 50%;
}
</style>

