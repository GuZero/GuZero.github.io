<style scoped>
.equipment-order .gege-header {
  background-color: #be6835;
}
.equipment-order .container {
  padding-top: 76px;
}
.equipment-order .ordre-title {
  height: 44px;
  background-color: #be6835;
  top: 44px;
  left: 0;
  width: 100%;
  font-size: 16px;
  color: #612709;
}
.equipment-order .ordre-title .active {
  color: #fff;
}
.equipment-order .ordre-title .active:after {
  content: "";
  display: block;
  position: absolute;
  bottom: -4px;
  left: 50%;
  border: 1px solid #ffffff;
  width: 40px;
  margin-left: -20px;
}
.equipment-order .item {
  width: 100%;
  padding: 16px 12px;
  box-shadow: 0px 0px 3px #e5ded2;
  line-height: 26px;
  border-radius: 5px;
  margin-top: 30px;
  box-sizing: border-box;
  color: #323232;
}
.equipment-order .item .item-title {
  font-weight: 600;
  font-size: 18px;
}
.equipment-order .item .item-icon {
  width: 6%;
  top: 33%;
  right: 5%;
}
.c-coffee {
  color: #be6835;
}
</style>

<template>
    <div class="equipment-order">
        <div class="container">
            <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @confirmCallback="gotoOrder"></HeaderBar>
            <div class="ordre-title fixed flex-g flex-align-center flex-pack-around">
                <span class="rel" :class="{active:activeTab===0}" @click="switchTab(0)">全部</span>
                <span class="rel" :class="{active:activeTab===1}" @click="switchTab(1)">待兑换</span>
                <span class="rel" :class="{active:activeTab===2}" @click="switchTab(2)">退款</span>
            </div>
            <div class="all-box">
                <div class="item rel">
                    <p class="item-title">2018-3-02 14:00</p>
                    <div class="item-content">
                        <div class="flex-g">
                            <span>订单标号：</span>
                            <p>***************</p>
                        </div>
                        <div class="flex-g">
                            <span>订单状态：</span>
                            <p>支付成功待兑换</p>
                        </div>
                        <div class="flex-g">
                            <span>订单金额：</span>
                            <p class="c-coffee">￥47</p>
                        </div>
                    </div>
                    <div class="item-icon abs">
                        <img src="//img.aimoge.com/Fl5Suaf3AZviBCJgW4O_jX04WdVS" alt="item-icon">
                    </div>
                </div>
                <div class="item rel">
                    <p class="item-title">2018-3-02 14:00</p>
                    <div class="item-content">
                        <div class="flex-g">
                            <span>订单标号：</span>
                            <p>***************</p>
                        </div>
                        <div class="flex-g">
                            <span>订单状态：</span>
                            <p>支付成功待兑换</p>
                        </div>
                        <div class="flex-g">
                            <span>订单金额：</span>
                            <p class="c-coffee">￥47</p>
                        </div>
                    </div>
                    <div class="item-icon abs">
                        <img src="//img.aimoge.com/Fl5Suaf3AZviBCJgW4O_jX04WdVS" alt="item-icon">
                    </div>
                </div>
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
      pageTitle: "我的订单",
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