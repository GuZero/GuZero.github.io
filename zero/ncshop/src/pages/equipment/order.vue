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
  z-index: 2;
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
  right: 1%;
}
.equipment-order .contetn-box .text-msg{
    margin-top: 50px;
    width: 100%;
    text-align: center;
    color: #888;
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
            <div class="contetn-box">
                <div class="item rel" v-for="(item,index) in current_orders" :key="index" @click="orderDetail(item.order_id,item.status)">
                    <p class="item-title">{{item.created_at}}</p>
                    <div class="item-content">
                        <div class="flex-g">
                            <span>订单标号：</span>
                            <p>{{item.order_id}}</p>
                        </div>
                        <div class="flex-g">
                            <span>订单状态：</span>
                            <p>{{item.status_verbose}}</p>
                        </div>
                        <div class="flex-g">
                            <span>订单金额：</span>
                            <p class="c-coffee">￥{{(item.total_fee/100)}}</p>
                        </div>
                    </div>
                    <div class="item-icon abs" v-if="item.icon_show">
                        <img src="//img.aimoge.com/Fl5Suaf3AZviBCJgW4O_jX04WdVS" alt="item-icon">
                    </div>
                </div>
                <p v-if="!current_orders.length" class="text-msg">暂无订单</p>
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
      store_orders:[],
      current_orders:[],
      activeTab:0
    };
  },
  components: {
    HeaderBar
  },
  created() {
  },
  mounted() {
      this.getOrder();
  },
  methods: {
      switchTab(index){
          this.activeTab=index;
          this.screenOrder(index);
      },
      getOrder(){
            let that = this;
            $('#sysLoading').show();
            axios.get('/ncshop/equipment/order')
                .then(function(res) {
                    $('#sysLoading').hide();
                    if (res.data.status == 0) {
                        let data = res.data.data.orders;
                        that.store_orders=that.filterData(data);
                        that.switchTab(1);                     
                    } else {
                        if (res.data.msg) _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    $('#sysLoading').hide();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
      },
      checkStatus(status){
          let val='';
          switch (status) {
            case 2801:
                val='支付成功待兑换'
                break;
            case 3001:
                val='支付成功待兑换'
                break;
            case 4801:
                val='申请退款'
                break;
            case 4802:
                val='退款中'
                break;
            case 4901:
                val='已退款'
                break;
            case 4902:
                val='退款失败'
                break;
            case 4910:
                val='已收款'
                break;
            case 4911:
                val='收款失败'
                break;
            case 3901:
                val='兑换成功'
                break              
            default:
                val='Error'
                break;
          }
          return val;
      },
      filterData(data){
          let array=[];
          for(let i=0;i<data.length;i++){
              let obj=Object.create(null);
              obj.order_id=data[i].order_id;
              obj.created_at=data[i].created_at;
              obj.total_fee=data[i].total_fee;
              obj.status_verbose=this.checkStatus(data[i].status);
              if([3001,2801].indexOf(data[i].status)>-1){
                  obj.status='待兑换';
                  obj.icon_show=1;
              }
              if([4801,4802,4901,4902,4910,4911].indexOf(data[i].status)>-1){
                  obj.status='退款';
                  obj.icon_show=0;
              }
              array.push(obj);
          }
          return array;
      },
      screenOrder(index){
        let that=this;
        function filterFun(val){
            that.current_orders=[];
            for(let i=0;i<that.store_orders.length;i++){
                if(that.store_orders[i].status==val){
                    that.current_orders.push(that.store_orders[i])
                }
            }
        }
        switch (index) {
            case 0:
                that.current_orders=that.store_orders;
                break;
            case 1:
                filterFun('待兑换');
                break;
            default:
                filterFun('退款');
                break;
        }
      },
      orderDetail(_id,status){
          if(status=='待兑换'){
              this.url('/ncshop/equipment/coffee/exchange',{'_id':_id})
          }          
      }
  }
};
</script>