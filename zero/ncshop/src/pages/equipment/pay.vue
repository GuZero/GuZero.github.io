<style scoped>
.store-pay .gege-header{
    background-color: #be6835;
}
.store-pay .container{
    margin: 0;
    padding: 0;
    padding-top: 44px;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    background-color: #fafafa;
}
.store-pay .banner-box{
    height: 88px;
    padding: 16px;
    width: 100%;
    background-color: #fff5ed;
    top: 44px;
    left: 0;
    text-align: center;
    box-sizing: border-box;
}
.store-pay .content-box{
    color: #333333;
    font-size: 16px;
}
.store-pay .content-box .text-box{
    padding: 8px 16px;
    background-color: #fff;
    box-sizing: border-box;
}
.store-pay .content-box .item-box{
    margin-top: 12px;
    padding: 6px  16px;
    line-height: 30px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
}
.store-pay .w-60{
    width: 60%;
}
.store-pay .w-20{
    width: 20%;
    text-align: center;
}
.store-pay .pay-btn{
    text-align: center;
    padding: 6px 0;
    background-color: #be6835;
    border-radius: 25px;
    width: 90%;
    bottom: 3%;
    color: #ffffff;
    left: 50%;
    margin-left: -45%;
}
.store-pay .c-coffee {
  color: #be6835;
  font-weight: 600;
}
</style>

<template>
    <div class="store-pay">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="container">
            <div class="banner-box">
                <img src="//img.aimoge.com/Fg8A6M9DPo25_t0iUtCQXpce6nsR" alt="qudian-baner">
            </div>
            <div class="content-box">
                <div class="text-box flex-g flex-pack-justify">
                    <span>支付金额</span>
                    <span class="c-coffee">￥{{total_fee/100}}</span>
                </div>
                <div class="item-box">
                    <div class="flex-g" v-for="item in items" :key="item.trading_id" v-if="item.loaded && item.trading">
                        <span class="w-60 ellipsis">{{item.trading.title}}</span>
                        <span class="w-20" v-if="item.cart_num">*{{item.cart_num}}</span>
                        <span class="w-20" style="color:red;font-size:12px;" v-if="item.cart_num==0">库存不足</span>
                        <span class="w-20">￥{{item.trading.discount_price/100}}</span>
                    </div>
                </div>
            </div>
            <div class="pay-btn abs" @click="goPay">
                微信支付
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../../components/Header'
export default {
    mixins: [require('../../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle:'趣点咖啡商城',
            btnconfig: {
                isgoback: 1
            },
            bodyBg: 'white',
            merchant_id: '5a4b2667c1fecc0acbeff5aa',
            dot_id: '',
            total_fee: 0,
            total_num: 0,
            items: [],
            goods: [],
            payInfo: null,
            order: null,
            address: null,
            items_loaded: false,
            address_loaded: false,
        }
    },
    components: {
        HeaderBar
    },
    created() {
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData(){
            $('#sysLoading').show();
            let data=JSON.parse(localStorage.getItem("ncstore_cart"));
            if((new Date()).getTime() - (data.ts || 0) <= 24 * 60 * 60 * 1000) {
                this.total = data.total;
                this.items = data.goodses;
                this.dot_id = data.dot_id;

                for(var i=0; i<this.items.length; i++){
                    this.loadItem(this.items[i]);
                }
                this.loadAddress();
            }
            else{
                this.total = 0;
                this.items = [];
                this.dot_id = '';
                localStorage.setItem("ncstore_cart", '{}');
                this.loaded();
            }
        },
        loadItem(item){
            let that = this;
            function check() {
                for(var i=0; i<that.items.length; i++){
                    if(!that.items[i].loaded){
                        return
                    }
                }
                that.items_loaded = true;

                if(that.items_loaded && that.address_loaded){
                    that.loaded();
                }
            }

            axios.get(window.config.API + '/ncshop/equipment/trading/' + item.trading_id + '?dot_id=' + that.dot_id)
                .then(function(res) {
                    if (res.data.status == 0) {
                        item.trading = res.data.data.trading;
                    }
                    item.loaded = true;
                    check();
                }).catch(function(err) {
                    item.loaded = true;
                    check();
                });
        },
        loadAddress(){
            let that = this;
            axios.get(window.config.API + '/ncshop/equipment/address?dot_id=' + that.dot_id)
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.address = res.data.data.address;
                    }
                    that.address_loaded = true;
                    if(that.items_loaded && that.address_loaded){
                        that.loaded();
                    }
                }).catch(function(err) {
                    that.address_loaded = true;
                    if(that.items_loaded && that.address_loaded){
                        that.loaded();
                    }
                });
        },
        loaded(){
            let that = this;
            that.total_fee = 0;
            that.total_num =0;
            that.goods = [];
            console.log(that.items);
            for(var i=0; i<that.items.length; i++){
                if(that.items[i].loaded && !!that.items[i].trading && that.items[i].cart_num!=0){
                    that.total_fee += that.items[i].cart_num * (that.items[i].trading.discount_price || that.items[i].trading.price),
                    that.total_num += that.items[i].cart_num;
                    that.goods.push({
                        "trading_id": that.items[i].trading._id,
                        "equipment_store_trading_id": that.items[i].trading._id,
                        "total_fee": that.items[i].cart_num * (that.items[i].trading.discount_price || that.items[i].trading.price),
                        "num": that.items[i].cart_num,
                        "price": (that.items[i].trading.discount_price || that.items[i].trading.price)
                    });
                }
            }
            $('#sysLoading').hide();
            // if(!that.address){
            //     _util.showErrorTip('咖啡机地址加载失败');
            // }
        },
        ajaxPay(data, callback) {
            $.ajax({
                type: "post",
                url: window.config.PAY + '/pay/' + data.pay_id,
                data: JSON.stringify(data),
                dataType: 'json',
                contentType: 'application/json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(data) {
                    callback(data);
                },
                error: function(data) {
                    callback(data);
                }
            });
        },
        wxPay(pay_info, order_id) {
            let that = this;
            window.wxsdk(function() {
                wx.chooseWXPay({
                    "timestamp": pay_info.order_info.timestamp.toString(), //时间戳，自 1970 年以来的秒数
                    "nonceStr": pay_info.order_info.noncestr, //随机串
                    "package": pay_info.order_info.package_value,
                    "signType": pay_info.order_info.sign_type, //微信签名方式:
                    "paySign": pay_info.order_info.pay_sign, //微信签名
                    "success": function(res) {
                        var data = {
                            "pay_id": pay_info.pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": '支付成功',
                            "result": 100
                        };
                        that.ajaxPay(data, function(data) {
                            if (data.status == 0) {
                                that.payInfo = null;
                            }
                            $('#sysLoading').hide();
                            that.url('/ncshop/equipment/coffee/paysuccess', { order_id: order_id }, true);
                        });
                    },
                    "cancel": function(res) {
                        var data = {
                            "pay_id": pay_info.pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": '用户主动取消',
                            "result": 200
                        };
                        that.ajaxPay(data, function(data) {
                            if (data.status == 0) {
                                that.payInfo = null;
                            }
                            $('#sysLoading').hide();
                            _util.showErrorTip('支付已被取消!');
                        });
                    },
                    "fail": function(res) {
                        var data = {
                            "pay_id": pay_info.pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": res.err_msg,
                            "result": 300
                        };
                        that.ajaxPay(data, function(data) {
                            if (data.status == 0) {
                                that.payInfo = null;
                            }
                            $('#sysLoading').hide();
                            _util.showErrorTip('支付失败:' + res.errMsg);
                        });
                    }
                });
            })
        },
        aliPay(data) {
            window.location.href = "http://wappaygw.alipay.com/service/rest.htm?" + data.order_info.params;
        },
        confirmPay(pay_id, callback) {
            let that = this;
            var data = {
                "pay_id": pay_id,
                "pay_type": that.order.pay_type,
                "pay_info": {},
                "error_msg": '用户主动取消',
                "result": 200
            };
            that.ajaxPay(data, function(data) {
                if (data.status == 0) {
                    that.payInfo = null;
                }
                callback(data);
            });
        },
        submitPay(order_id) {
            let that = this;
            let pay_type = _util.isWeixin() ? 4 : 3;
            let data = {
                total_fee: this.order.total_fee,
                total_num: this.order.total_num,
                pay_type: pay_type,
                order_ids: [order_id],
                service: 'trading_order_service',
                device_info: _util.getDeviceInfo()
            };

            if (pay_type == 4) {
                data.weixin_id = window.wxid || '';
                data.open_id = window.open_id || '';
            } else {
                data.call_back_url = window.config.BASE_URL + '/ncshop/equipment/pay/alipay/{pay_id}/' + order_id + '/' + (window.dot_id || 0);
                data.merchant_url = window.config.BASE_URL + '/ncshop/equipment/pay/alipay/{pay_id}/' + order_id + '/' + (window.dot_id || 0);
                if(window.ncshop_config && (window.ncshop_config.shelf_alipay_account || window.ncshop_config.alipay_account)){
                    data.account = window.ncshop_config.shelf_alipay_account || window.ncshop_config.alipay_account
                }
            }

            $.ajax({
                type: "post",
                url: window.config.PAY + '/pay',
                data: JSON.stringify(data),
                dataType: 'json',
                contentType: 'application/json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(data) {
                    if (data.status == 0) {
                        that.payInfo = data.data;
                        if (pay_type == 4) {
                            that.wxPay(data.data, order_id);
                        } else {
                            that.aliPay(data.data);
                        }
                    }
                    else {
                        $('#sysLoading').hide();
                        _util.showErrorTip(data.msg);
                    }
                },
                error: function(data) {
                    $('#sysLoading').hide();
                    _util.showErrorTip(data.msg);
                }
            });
        },
        goPay() {
            let that = this;
            // if(!that.address){
            //     _util.showErrorTip('咖啡机地址加载失败');
            //     return
            // }

            if(!that.total_fee){
                _util.showErrorTip('商品为空');
                return
            }

            $('#sysLoading').show();
            if (that.order) {
                if (that.payInfo) {
                    that.confirmPay(that.payInfo.pay_id, function() {
                        that.submitPay(that.order.order_id);
                    });
                }
                else {
                    that.submitPay(that.order.order_id);
                }
            } else {
                that.createrOrder(function() {
                    that.submitPay(that.order.order_id);
                });
            }
        },
        createrOrder(callback) {
            let that = this;
            let params = {
                // address_info: {
                //     address_type: 1,
                //     _id: this.address._id
                // },
                merchants: [
                    {
                        goods: this.goods,
                        merchant_id: this.merchant_id,
                        total_fee: this.total_fee,
                        total_num: this.total_num,
                        pay_fee: this.total_fee,
                        remark: "",
                        order_type: "ncequipment",
                        gen_pickup_type:2,
                        dot_id: this.dot_id
                    }
                ],
                total_fee: this.total_fee,
                delivery_fee: 0,
                total_num: this.total_num,
                device_info: _util.getDeviceInfo()
            };
            axios.post(window.config.PAY + '/order?source=wap', params)
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.order = res.data.data.merchants[0];
                        localStorage.setItem("ncstore_cart", '{}');
                        callback();
                    } else {
                        $('#sysLoading').hide();
                        _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    $('#sysLoading').hide();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
        }
    }
}

</script>
