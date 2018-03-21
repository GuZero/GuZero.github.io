<style scoped>
.store-pay-success .gege-header {
  background-color: #be6835;
}
.store-pay-success .container{
    padding: 0;
    margin: 0;
    padding-top: 44px;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
}
.store-pay-success .banner-box{
    height: 88px;
    padding: 16px;
    width: 100%;
    background-color: #fff5ed;
}
.store-pay-success .banner-box .icon-box{
    width: 22%;
}
.store-pay-success .banner-box .text-box{
    color: #be6835;
    margin-left: 16px;
    width: 66%;
    line-height: 26px;
}
.store-pay-success .banner-box .text-box .f-30{
    font-size: 30px;
}
.store-pay-success .item {
    padding: 16px;
    line-height: 26px;
    color: #323232;
}
.store-pay-success .item .item-title span{
    font-size: 16px;
    font-weight: 700;
}
.store-pay-success .item .item-title .refund-btn{
    padding: 0 4px;
    border: 1px solid #5c2307;
    color: #5c2307;
    border-radius: 6px;
}
.store-pay-success .item-content .flex-g>div{
    width: 70%;
}
.store-pay-success .h12{
    height: 12px;
    background-color: #fff5ed;
}
.store-pay-success .info-box{
    background-color: #be6835;
    padding: 6px 12px;
    border-radius: 20px;
    color: #fff;
    margin-left: 16px;
}
.store-pay-success .prompt-msg{
    width: 100%;
    text-align: center;
    color: #888;
    bottom: 1%;
}
</style>

<template>
    <div class="store-pay-success">
        <div class="container rel">
            <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @confirmCallback="gotoOrder"></HeaderBar>
            <div class="banner-box flex flex-align-center">
                <div class="icon-box">
                    <img src="//img.aimoge.com/Ft-s2uq8BBjvJHrt8GlfqxaQb4PX" alt="success-icon">
                </div>
                <div class="text-box">
                    <p class="f-30">支付成功</p>
                    <p>您可以在任意的趣点咖啡机上兑换咖啡</p>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    <span>商品兑换码</span>
                </div>                
                <div class="item-content">
                    <div class="flex-g">
                            <span>美式咖啡:</span>
                            <span>00000000000000</span>                   
                    </div>
                    <div class="flex-g">
                            <span>美式咖啡:</span>
                            <span>00000000000000</span>                   
                    </div>
                    <div class="flex-g">
                            <span>美式咖啡:</span>
                            <span>00000000000000</span>                   
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
            <p class="prompt-msg abs">可以在公众号"个人中心-我的订单"中查看</p>   
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