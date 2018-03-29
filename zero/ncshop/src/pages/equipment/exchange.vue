<style scoped>
.equipment-exchange .gege-header {
  background-color: #be6835;
}
.equipment-exchange .container {
  padding: 0;
  padding-top: 44px;
}
.equipment-exchange .item {
  padding: 16px;
  line-height: 26px;
  color: #323232;
}
.equipment-exchange .item .item-title span {
  font-size: 16px;
  font-weight: 700;
}
.equipment-exchange .item .item-title .refund-btn {
  padding: 0 4px;
  border: 1px solid #5c2307;
  color: #5c2307;
  border-radius: 6px;
}
.equipment-exchange .item .item-title .refund-btn.disabled {
  border: none;
}
.equipment-exchange .item-content .flex-g > div {
  width: 76%;
}
.equipment-exchange .c-1 {
  color: #ffaf54;
}
.equipment-exchange .c-2 {
  color: #be6835;
}
.equipment-exchange .c-3 {
  color: #5c2307;
}
.equipment-exchange .h12 {
  height: 12px;
  background-color: #fff5ed;
}
.equipment-exchange .info-box {
  background-color: #be6835;
  padding: 6px 12px;
  border-radius: 20px;
  color: #fff;
  margin-left: 16px;
}
.equipment-exchange .w-36{
	width: 36%;
}
.equipment-exchange .w-64{
	width: 64%;
}
</style>

<template>
    <div class="equipment-exchange">
        <div class="container">
            <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
            <div class="item">
                <div class="item-title flex-g flex-pack-justify flex-align-center">
                    <span>商品兑换码</span>
                    <div class="refund-btn" :class="{disabled:isRefund}" @click="refund">申请退款</div>
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
                        <p>￥{{(orderDetail.pay_fee/100)}}</p>
                    </div>
                </div>
            </div>
            <span class="info-box" v-if="(orderDetail.total_fee-orderDetail.pay_fee)">优惠券已折扣￥{{(orderDetail.total_fee-orderDetail.pay_fee)/100}}</span>   
        </div>
    </div>
</template>

<script>
import HeaderBar from "../../components/Header";
export default {
  mixins: [require("../../components/mixin/BodyBg")],
  data() {
    return {
      pageTitle: "待兑换",
      bodyBg: "white",
      btnconfig: {
        isgoback: 1
      },
      pickupInfo: [],
      orderDetail: {
          order_id:'',
          pay_at:'',
          status_verbose:'',
          pay_fee:0,
          total_fee:0,
      },
      activeTab: 0
    };
  },
  components: {
    HeaderBar
  },
  created() {},
  mounted() {
    this.getOrderDetail();
  },
  computed:{
     isRefund:function(){
         for(let i=0;i<this.pickupInfo.length;i++){
             for(let j=0;j<this.pickupInfo[i].pickups.length;j++){
				 if(this.pickupInfo[i].pickups[j].status){
					 return true
					 break;
				 }
			 }
         }
     }
  },
  methods: {
    getOrderDetail() {
      let that = this,
        _id = this.$route.query._id;
      $("#sysLoading").show();
      axios
		.get("/ncshop/equipment/order/" + _id)
        .then(function(res) {
          $("#sysLoading").hide();
          if (res.data.status == 0) {
            let data = res.data.data.order;
            that.orderDetail.order_id = data.order_id;
            that.orderDetail.pay_at = data.pay_at;
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
		obj.trading_id=data.goodses[i].trading_id;
		obj.pickups=[];
		for(let j=0;j<data.pickups.length;j++){
			data.pickups[j].status_verbose=data.pickups[j].status?'已使用':'未使用';
			if(obj.trading_id==data.pickups[j].trading_id){
				obj.pickups.push(data.pickups[j]);
			}
		}
        array.push(obj);
      }
      return array;
    },
    refund(){
       if(this.isRefund){
           _util.showErrorTip('抱歉您已经有兑换码使用');
           return false;
       }
       let _id=this.$route.query._id
       this.url('/ncshop/equipment/coffee/refund',{'_id':_id});
    }
  }
};
</script>