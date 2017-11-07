<style scoped>
.h-44 {
    height: 44px;
}

.logo {
    text-align: center;
    height: 100px;
    width: 240px;
    margin: 20px auto;
}

.content-box {
    padding: 0 16px;
}

.title {
    font-size: 18px;
    color: #323232;
    padding: 0 16px;
    height: 50px;
    line-height: 50px;
    box-shadow: 0px 0px 5px #ccc;
    font-weight: 600;
}

.item {
    margin-top: 36px;
    padding: 12px 24px;
    box-shadow: 0px 0px 5px #ccc;
    color: #323232;
    margin-bottom: 44px;
}

.item .item-list {
    height: 36px;
    line-height: 36px;
}

.footer-box {
    height: 46px;
    font-size: 14px;
    bottom: 0;
    width: 100%;
    color: #fff;
    background-color: #7f7f7f;
    z-index: 9001;
}

.footer-box .text {
    width: 70%;
    background: #7f7f7f;
    height: 44px;
    line-height: 44px;
    padding-left: 10px;
}

.payBtn {
    height: 46px;
    line-height: 46px;
    width: 30%;
    background: #4285f4;
    text-align: center;
}

.f-18 {
    font-size: 18px;
    font-weight: 600;
}

.payBtn:active {
    background: rgba(246, 143, 30, .7);
}
.flex-7 {
    -webkit-box-flex: 0.7;
    -webkit-flex: 0.7;
    -ms-flex: 0.7;
    flex: 0.7;
}
</style>

<template>
    <div class="Pay">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="h-44"></div>
        <div class="content-box">
            <div class="logo">
                <img :src="'//img.aimoge.com/'+logo_src.substring(0,28)" alt="">
            </div>
            <div class="title flex-g flex-pack-justify">
                <span>支付金额</span>
                <span>{{total_fee/100}}</span>
            </div>
            <div class="item">
                <div class="item-list flex-g flex-pack-justify" v-for="item in items" :key="item.trading_id" v-if="item.loaded && item.trading">
                    <span style="width:60%">
                       {{item.trading.trading.title}}
                    </span>
                    <span style="width:20%" v-if="item.cart_num">*{{item.cart_num}}</span>
                    <span style="width:30%;color:red;" v-if="item.cart_num==0">库存不足</span>
                    <span style="width:20%">{{item.trading.trading.discount_price/100}}元</span>
                </div>
            </div>
        </div>
        <div class="footer-box fixed  flex-g flex-pack-justify flex-align-center">
            <div class="text">支付金额：
                <span class="f-18">{{total_fee/100}} 元</span>
            </div>
            <div class="payBtn" @click="goPay">确认付款</div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    mixins: [require('../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: (window.ncshop_config && window.ncshop_config.ncshelf_name) || '格格+便利中心',
            btnconfig: {
                isgoback: 1
            },
            bodyBg: 'white',
            merchant_id: '59c37b4e2bb8fbf83f8081d7',
            shelf_code: '',
            total_fee: 0,
            total_num: 0,
            items: [],
            goods: [],
            payInfo: null,
            order: null,
            address: null,
            items_loaded: false,
            address_loaded: false,
            logo_src:''
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
            let data=JSON.parse(localStorage.getItem("ncshelf_cart"));
            this.logo_src=window.ncshop_config && window.ncshop_config.ncshelf_logo||'Fljo7op5nJ1AJIUgGAVLKyUMlQTc_437x624_32101.jpeg';
            if((new Date()).getTime() - (data.ts || 0) <= 24 * 60 * 60 * 1000) {
                this.total = data.total;
                this.items = data.goodses;
                this.shelf_code = data.shelf_code;

                for(var i=0; i<this.items.length; i++){
                    this.loadItem(this.items[i]);
                }
                this.loadAddress();
            }
            else{
                this.total = 0;
                this.items = [];
                this.shelf_code = '';
                localStorage.setItem("ncshelf_cart", '{}');
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

            axios.get(window.config.API + '/ncshop/shelf/floor/trading/' + item.trading_id + '?shelf_code=' + that.shelf_code)
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
            axios.get(window.config.API + '/ncshop/shelf/address?shelf_code=' + that.shelf_code)
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
            for(var i=0; i<that.items.length; i++){
                if(that.items[i].loaded && !!that.items[i].trading && that.items[i].cart_num!=0){
                    that.total_fee += that.items[i].cart_num * (that.items[i].trading.trading.discount_price || that.items[i].trading.trading.price),
                    that.total_num += that.items[i].cart_num;
                    that.goods.push({
                        "trading_id": that.items[i].trading.trading._id,
                        "shelf_trading_id": that.items[i].trading._id,
                        "total_fee": that.items[i].cart_num * (that.items[i].trading.trading.discount_price || that.items[i].trading.trading.price),
                        "num": that.items[i].cart_num,
                        "price": (that.items[i].trading.trading.discount_price || that.items[i].trading.trading.price)
                    });
                }
            }
            $('#sysLoading').hide();
            if(!that.address){
                _util.showErrorTip('货架地址加载失败');
            }
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
                            that.url('/ncshop/shelf/pay/success', { order_id: order_id }, true);
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
                data.call_back_url = window.config.BASE_URL + '/ncshop/shelf/alipay/{pay_id}/' + order_id + '/' + (window.dot_id || 0);
                data.merchant_url = window.config.BASE_URL + '/ncshop/shelf/alipay/{pay_id}/' + order_id + '/' + (window.dot_id || 0);
                if(window.ncshop_config && window.ncshop_config.alipay_account){
                    data.account = window.ncshop_config.alipay_account;
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
            if(!that.address){
                _util.showErrorTip('货架地址加载失败');
                return
            }

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
                address_info: {
                    address_type: 1,
                    _id: this.address._id
                },
                merchants: [
                    {
                        goods: this.goods,
                        merchant_id: this.merchant_id,
                        total_fee: this.total_fee,
                        total_num: this.total_num,
                        pay_fee: this.total_fee,
                        remark: "",
                        order_type: "ncshelf",
                        shelf_code: this.shelf_code
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
                        localStorage.setItem("ncshelf_cart", '{}');
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
