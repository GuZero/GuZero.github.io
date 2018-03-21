<style scoped>
.equipment-exchange .gege-header {
  background-color: #be6835;
}
.equipment-exchange .container{
    padding: 0;
    padding-top: 44px;
}
.equipment-exchange .item {
    padding: 16px;
    line-height: 26px;
    color: #323232;
}
.equipment-exchange .item .item-title span{
    font-size: 16px;
    font-weight: 700;
}
.equipment-exchange .item .item-title .refund-btn{
    padding: 0 4px;
    border: 1px solid #5c2307;
    color: #5c2307;
    border-radius: 6px;
}
.equipment-exchange .item .item-title .refund-btn.disabled{
    border:none;
}
.equipment-exchange .item-content .flex-g>div{
    width: 70%;
}
.equipment-exchange .c-1{
    color: #ffaf54;
}
.equipment-exchange .c-2{
    color: #be6835;
}
.equipment-exchange .c-3{
    color: #5c2307;
}
.equipment-exchange .h12{
    height: 12px;
    background-color: #fff5ed;
}
.equipment-exchange .info-box{
    background-color: #be6835;
    padding: 6px 12px;
    border-radius: 20px;
    color: #fff;
    margin-left: 16px;
}
</style>

<template>
    <div class="equipment-exchange">
        <div class="container">
            <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @confirmCallback="gotoOrder"></HeaderBar>
            <div class="item">
                <div class="item-title flex-g flex-pack-justify flex-align-center">
                    <span>商品兑换码</span>
                    <div class="refund-btn disabled">申请退款</div>
                </div>                
                <div class="item-content">
                    <div class="flex-g flex-pack-justify">
                        <div>
                            <span>美式咖啡:</span>
                            <span>00000000000000</span>
                        </div>                    
                        <span class="c-1">未使用</span>
                    </div>
                    <div class="flex-g flex-pack-justify">
                        <div>
                            <span>美式咖啡:</span>
                            <span>00000000000000</span>
                        </div>                    
                        <span class="c-2">未使用</span>
                    </div>
                    <div class="flex-g flex-pack-justify">
                        <div>
                            <span>美式咖啡:</span>
                            <span>00000000000000</span>
                        </div>                    
                        <span class="c-3">未使用</span>
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
                        <p>00000000000000</p>
                    </div>
                    <div class="flex-g">
                        <span>支付时间:</span>
                        <p>2018-5-03 12:00</p>
                    </div>
                    <div class="flex-g">
                        <span>订单状态:</span>
                        <p>00000000000000</p>
                    </div>
                    <div class="flex-g">
                        <span>订单金额:</span>
                        <p>￥47</p>
                    </div>
                </div>
            </div>
            <span class="info-box">优惠券已折扣￥4</span>   
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
      activeTab:0
    };
  },
  components: {
    HeaderBar
  },
  created() {},
  mounted() {},
  methods: {
      switchTab(index){
          this.activeTab=index;
      }
  }
};
</script>