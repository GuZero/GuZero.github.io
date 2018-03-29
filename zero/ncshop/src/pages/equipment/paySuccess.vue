<style scoped>
.store-pay-success .gege-header {
  background-color: #be6835;
}
.store-pay-success .container {
  padding: 0;
  margin: 0;
  padding-top: 44px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}
.store-pay-success .banner-box {
  height: 88px;
  padding: 16px;
  width: 100%;
  background-color: #fff5ed;
}
.store-pay-success .banner-box .icon-box {
  width: 22%;
}
.store-pay-success .banner-box .text-box {
  color: #be6835;
  margin-left: 16px;
  width: 66%;
  line-height: 26px;
}
.store-pay-success .banner-box .text-box .f-30 {
  font-size: 30px;
}
.store-pay-success .item {
  padding: 16px;
  line-height: 26px;
  color: #323232;
}
.store-pay-success .item .item-title span {
  font-size: 16px;
  font-weight: 700;
}
.store-pay-success .item .item-title span.title-msg {
  background-color: #fadaa5;
  color: #4a4a4a;
  font-size: 12px;
  padding: 0 12px;
  text-align: center;
  margin-left: 16px;
  border-radius: 25px;
  height: 22px;
  line-height: 22px;
  margin-top: 1px;
  font-weight: normal;
}
.store-pay-success .item-content .flex-g > div {
  width: 70%;
}
.store-pay-success .h12 {
  height: 12px;
  background-color: #fff5ed;
}
.store-pay-success .info-box {
  background-color: #be6835;
  padding: 6px 12px;
  border-radius: 20px;
  color: #fff;
  margin-left: 16px;
}
.store-pay-success .prompt-msg {
  width: 100%;
  text-align: center;
  color: #888;
  bottom: 1%;
}
.store-pay-success .w-36{
	width: 36%;
}
.store-pay-success .w-64{
	width: 64%;
}
.store-pay-success .c-1 {
  color: #ffaf54;
}
.store-pay-success .c-2 {
  color: #be6835;
}
.store-pay-success .c-blue {
  color: #008cff;
}
.store-pay-success .f-weight {
  font-weight: 600;
}
.store-pay-success .original-price {
  margin-left: 20px;
  font-weight: 600;
  text-decoration: line-through;
}
</style>

<template>
    <div class="store-pay-success">
        <div class="container rel">
            <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
            <div class="banner-box flex flex-align-center">
                <div class="icon-box">
                    <img src="//img.aimoge.com/Ft-s2uq8BBjvJHrt8GlfqxaQb4PX" alt="success-icon">
                </div>
                <div class="text-box">
                    <p class="f-30">{{orderDetail.status_val}}</p>
                    <p>您可以在任意的趣点咖啡机上兑换咖啡</p>
                </div>
            </div>
            <div class="item">
                <div class="item-title flex-g">
                    <span>商品兑换码</span>
					<span class="title-msg">兑换码有效期15天</span>
                </div>                
                <div class="item-content">
                    <div class="flex-g" v-for="(item,index) in pickupInfo" :key="index">
						<span class="ellipsis w-36">{{item.title}}:</span>
						<div class="w-64">
							<div class="flex-g flex-pack-justify" v-for="(data,index) in item.pickups" :key="index">
                            	<span>{{data.password}}</span>
								<span :class="[data.status?'c-2':'c-1']">{{data.status_verbose}}</span>
                        	</div>   
						</div>                       
                    </div>
                </div>
            </div>
            <div class="h12"></div>
            <div class="item">
                <div class="item-title">
                    <span>订单详情</span>
                </div>
                <div class="item-content">
                    <div class="flex-g">
                        <span>订单编号:</span>
                        <p>{{orderDetail.order_id}}</p>
                    </div>
                    <div class="flex-g">
                        <span>支付时间:</span>
                        <p>{{orderDetail.pay_at}}</p>
                    </div>
                    <div class="flex-g">
                        <span>订单状态:</span>
                        <p>{{orderDetail.status_verbose}}</p>
                    </div>
                    <div class="flex-g">
                        <span>订单金额:</span>
                        <p class="f-weight">￥{{(orderDetail.pay_fee/100)}}</p>
						<p class="original-price" v-if="orderDetail.total_fee-orderDetail.pay_fee!=0">￥{{(orderDetail.total_fee/100)}}</p>
                    </div>
                </div>
            </div>
            <p class="prompt-msg abs">可以在公众号"个人中心-<router-link to="/ncshop/equipment/coffee/order" class="c-blue">我的订单</router-link>"中查看</p>   
        </div>
    </div>
</template>

<script>
import HeaderBar from "../../components/Header";
export default {
  mixins: [require("../../components/mixin/BodyBg")],
  data() {
    return {
      pageTitle: "支付成功",
      bodyBg: "white",
      btnconfig: {
        isgoback: 0
      },
      pickupInfo: [],
      orderDetail: {
        order_id: "",
        pay_at: "",
        status_verbose: "",
        pay_fee: 0,
        total_fee: 0,
        status_val: ""
      }
    };
  },
  components: {
    HeaderBar
  },
  created() {},
  mounted() {
    this.getOrederInfo();
  },
  methods: {
    getOrederInfo() {
      let that = this,
        _id = this.$route.query.order_id;
      $("#sysLoading").show();
      axios
        .get("/ncshop/equipment/order/" + _id)
        .then(function(res) {
          $("#sysLoading").hide();
          if (res.data.status == 0) {
            let data = res.data.data.order;
            that.orderDetail.order_id = data.order_id;
            that.orderDetail.pay_at = data.pay_at;
            that.orderDetail.status_val = data.status_verbose;
            that.orderDetail.status_verbose = that.checkStatus(data.status);
            that.orderDetail.pay_fee = data.pay_fee;
            that.orderDetail.total_fee = data.total_fee;
            that.pickupInfo = that.formatData(data);
          } else {
            if (res.data.msg) _util.showErrorTip(res.data.msg);
          }
        })
        .catch(function(err) {
          $("#sysLoading").hide();
          _util.showErrorTip("您的网络可能出了点问题:(");
        });
    },
    checkStatus(status) {
      let val = "";
      switch (status) {
        case 2801:
          val = "支付成功待兑换";
          break;
        case 3001:
          val = "支付成功待兑换";
          break;
        case 4801:
          val = "申请退款";
          break;
        case 4802:
          val = "退款中";
          break;
        case 4901:
          val = "已退款";
          break;
        case 4902:
          val = "退款失败";
          break;
        case 4910:
          val = "已收款";
          break;
        case 4911:
          val = "收款失败";
          break;
        default:
          val = "Error";
          break;
      }
      return val;
    },
    formatData(data) {
      let array = [];
      for (let i = 0; i < data.goodses.length; i++) {
        let obj = Object.create(null);
        obj.title = data.goodses[i].trading.title;
        obj.trading_id = data.goodses[i].trading_id;
        obj.pickups = [];
        for (let j = 0; j < data.pickups.length; j++) {
          data.pickups[j].status_verbose = data.pickups[j].status
            ? "已使用"
            : "未使用";
          if (obj.trading_id == data.pickups[j].trading_id) {
            obj.pickups.push(data.pickups[j]);
          }
        }
        array.push(obj);
      }
      return array;
    }
  }
};
</script>