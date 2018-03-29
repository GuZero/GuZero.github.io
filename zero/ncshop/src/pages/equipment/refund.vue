<style scoped>
.equipment-refund .gege-header {
  background-color: #be6835;
}
.equipment-refund .container{
    padding: 0;
    margin: 0;
    padding-top: 44px;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
}
.equipment-refund .list-box{
    padding: 10px 16px;
    line-height: 28px;
}
.equipment-refund .list-box span{
    color: #919191;
}
.equipment-refund .text-right{
    text-align: right;
}
.equipment-refund .line-height-6{
    line-height: 6px;
}
.equipment-refund .h12{
    margin-top: 16px;
    width: 100%;
    height: 12px;
    background-color: #fff5ed;
}
.equipment-refund .select-list{
    margin-top: 20px;
    padding: 0 16px;
}
.equipment-refund .select-list .select-title{
    font-size: 16px;
    color: #323232;
    font-weight: 700;
}
.equipment-refund .select-list .select-content{
    line-height: 42px;
}
.equipment-refund .select-list .select-content .icon{
    width: 24px;
    height: 24px;
}
.equipment-refund .c-coffee {
  color: #be6835;
}
.equipment-refund .refund-btn{
    width: 90%;
    text-align: center;
    padding: 6px 0;
    background-color: #be6835;
    color: #fff;
    left: 50%;
    margin-left: -45%;
    bottom: 5%;
    border-radius: 25px;
}
</style>

<template>
    <div class="equipment-refund">
        <div class="container rel">
            <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
            <div class="list-box">
                <div class="flex flex-pack-justify">
                    <span>退款订单编号</span>
                    <p>{{refundOrder.order_id}}</p>
                </div>
                <div class="flex flex-pack-justify">
                    <span>退款金额</span>
                    <p>￥{{(refundOrder.pay_fee/100)}}</p>
                </div>
                <div class="flex flex-pack-justify">
                    <span>退款方式</span>
                    <div class="text-right">
                        <p>原路退回</p>
                        <p class="line-height-6">(1-7个工作日内退款原支付方)</p>
                    </div>
                </div>
            </div>
            <div class="h12"></div>
            <div class="select-list">
                <p class="select-title">退款原因（至少选择一项）</p>
                <div class="select-content">
                    <div class="flex flex-pack-justify flex-align-center" v-for="(item,index) in cause" :key="index"  @click="selectCause(item)">
                        <span :class="{'c-coffee':item.checked}">{{item.value}}</span>
                        <div class="icon" v-if="item.checked">
                            <img src="//img.aimoge.com/Fg1T68zrwQjNiETlUnXeUqjXqoGl" alt="checked-icon">
                        </div>
                        <div class="icon" v-else>
                            <img src="//img.aimoge.com/Fot9rKrzEpYBbmI_cChtv11JRJtP" alt="checked-icon">
                        </div>    
                    </div>
                </div>
            </div>
            <div class="refund-btn abs" @click="refundFun">
                申请退款
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from "../../components/Header";
export default {
  mixins: [require("../../components/mixin/BodyBg")],
  data() {
    return {
      pageTitle: "申请退款",
      bodyBg: "white",
      btnconfig: {
        isgoback: 1
      },
      cause:[
          {
              value:'兑换不成功',
              checked:false
          },{
              value:'附近无可用咖啡机',
              checked:false
          },{
              value:'买多了/买错了',
              checked:false
          }
      ],
      refundOrder:{
          order_id:'',
          pay_fee:0,
          pay_type:4,
          pay_id:''
      }
    };
  },
  components: {
    HeaderBar
  },
  created() {},
  mounted() {
      this.getOrder();
  },
  methods: {
    selectCause(item){
        item.checked=item.checked?false:true;
    },
    getOrder(){
        let that = this,
        _id = this.$route.query._id;
      $("#sysLoading").show();
      axios
        .get("/ncshop/equipment/order/" + _id)
        .then(function(res) {
          $("#sysLoading").hide();
          if (res.data.status == 0) {
            let data = res.data.data.order;
            that.refundOrder.order_id = data.order_id;
            that.refundOrder.pay_fee = data.pay_fee;
            that.refundOrder.pay_id=data.pay_id;
            that.refundOrder.pay_type=data.pay_type;
          } else {
            if (res.data.msg) _util.showErrorTip(res.data.msg);
          }
        })
        .catch(function(err) {
          $("#sysLoading").hide();
          _util.showErrorTip("您的网络可能出了点问题:(");
        });
    },
    refundFun(){
        let that=this;
        let refund_reason=[];
        for(let i=0;i<this.cause.length;i++){
            if(this.cause[i].checked){
                refund_reason.push(this.cause[i].value);
            }
        }
        if(!refund_reason.length){
            _util.showErrorTip('请至少选择一项退款原因')
            return false;
        }
        let data = {
            service: "trading_order_service",
            pay_id: this.refundOrder.pay_id,
            pay_type: this.refundOrder.pay_type,
            refund_type: this.refundOrder.pay_type,
            reason: refund_reason.join(',')
        };
        axios.put(window.config.PAY+'/pay/'+this.refundOrder.pay_id,data)
            .then(function(res){
               if(res.data.status==0){
                   that.url('/ncshop/equipment/coffee/order');
               }else{
                  if (res.data.msg) _util.showErrorTip(res.data.msg); 
               }
            }).catch(function(err){
                _util.showErrorTip("您的网络可能出了点问题:(");
            })
    }
  }
};
</script>