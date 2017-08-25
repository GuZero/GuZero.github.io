<style scoped>
.c-blue {
    color: #008cff;
}

.c-gary {
    color: #afafaf;
}

.content-box {
    padding: 12px;
    color: #333;
    padding-top: 44px;
}

.pay-box {
    background: #fff;
    overflow: hidden;
}

.pay-box .pay-header {
    height: 20vh;
    text-align: center;
    font-size: 16px;
    position: relative;
    margin-top: 22px;
    box-sizing: border-box;
    padding-top: 18%;
}

.sum {
    font-size: 36px;
}

.pay-img {
    width: 42%;
    height: 70px;
    background: url('//img.aimoge.com/FuGFP0LpnA1XQ0gEQNqi0HUEzgIp') no-repeat center center;
    position: absolute;
    right: 8px;
    background-size: 70% 70%;
    top: 22%;
}

.dotted {
    width: 80%;
    height: 2px;
    border-bottom: 2px dotted #008cff;
}

.arch {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ececec;
}

.item {
    display: flex;
    height: 35px;
}

.total {
    height: 42px;
    align-items: center;
    border-top: 1px solid #ececec;
    justify-content: space-between;
}

.footer-box {
    height: 42px;
    font-size: 14px;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    display: flex;
    width: 100%;
    color: #fff;
}
</style>

<template>
    <div class="Pay">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="content-box">
            <div class="pay-box">
                <div class="pay-header">
                    <div>支付金额
                        <span class="c-blue sum"> {{sum}} </span>
                        <span class="c-blue">元</span>
                    </div>
                </div>
                <div class="pay-img">
                </div>
                <div class="flex-g" style="align-items: center;justify-content: space-between;">
                    <div class="arch" style="margin-left:-18px"></div>
                    <div class="dotted"></div>
                    <div class="arch" style="margin-right:-18px;"></div>
                </div>
                <div style="padding:16px;">
                    <div class="item" v-for="item in items" :key="item.id">
                        <div style="width:70%">{{item.title}}</div>
                        <div style="width:10%;text-align:center;" class="c-gary">×{{item.rfid_codes.length}}</div>
                        <div style="width:20%;text-align:right;">{{item.price/100*item.rfid_codes.length}}元</div>
                    </div>
                </div>
                <div style="padding-left:16px;padding-right:16px;">
                    <div class="flex-g total">
                        <span style="font-weight:bold">商品总额</span>
                        <span class="c-blue">{{sum}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-box fixed">
            <div style="width:70%;background:#454545;height:42px;line-height:42px;padding-left:10px;">支付金额：{{sum}}元</div>
            <div style="width:30%;background:#f88f1e;height:42px;line-height:42px;text-align:center" @click="goPay">确认扣款</div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '付款',
            btnconfig: {
                isgoback: 1
            },
            sum: 0,
            res: {},
            _id: '',
            items: [],
            payInfo: null,
            order: {
                terminal_code:'',
                address_id:'',
                total_fee:0,
                total_num:0,
                order_id:'',
                order_status:'',
                pay_id:''
            },
            goods:[]
        }
    },
    components: {
        HeaderBar
    },
    created() {
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            let that = this;
            $('#sysLoading').show();
            axios.get('/ncshop/cart/' + that.$route.query.cart_id)
                .then(function(res) {
                    $('#sysLoading').hide();
                    if (res.data.status == 0) {
                        let data = res.data.data.tradings;
                        that.items =data;
                        for (let i = 0; i < data.length; i++) {
                            that.sum += data[i].rfid_codes.length * data[i].price / 100;
                            let obj=Object.create(null);
                            obj.trading_id=data[i]._id;
                            obj.price=data[i].price;
                            obj.num=data[i].rfid_codes.length;
                            obj.total_fee=obj.num*obj.price;
                            obj.rfid_codes=data[i].rfid_codes;
                            that.goods.push(obj);
                        }
                        that.order.address_id=res.data.data.address_id;
                        that.order.terminal_code=res.data.data.terminal_code;
                        that.order.total_fee=that.sum*100;
                        that.order.total_num=data.length;
                        that.order.order_id=res.data.data.order_id;
                        that.order.order_status=res.data.data.order_status;
                        that.order.pay_id=res.data.data.pay_id;
                        that.order.pay_type=res.data.data.pay_type;

                        if(that.order.order_id){
                            if(that.order.pay_id && [2101, 2501, 2502].indexOf(that.order.status) > -1){
                                that.confirmPay(that.order.pay_id, function () {});
                            }
                        }
                    } else {
                        _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    $('#sysLoading').hide();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        ajaxPay(data, callback) {
            $.ajax({
                type: "post",
                url: window.config.PAY + '/pay/' + pay_id,
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
        wxPay(data) {
            let that = this;
            window.wxsdk(function() {
                wx.chooseWXPay({
                    "timestamp": data.order_info.timestamp.toString(), //时间戳，自 1970 年以来的秒数
                    "nonceStr": data.order_info.noncestr, //随机串
                    "package": data.order_info.package_value,
                    "signType": data.order_info.sign_type, //微信签名方式:
                    "paySign": data.order_info.pay_sign, //微信签名
                    "success": function(res) {
                        var data = {
                            "pay_id": that.payInfo.pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": '支付成功',
                            "result": 100
                        };
                        that.ajaxPay(data, function(data) {
                            if(data.status == 0){
                                that.order.pay_id = '';
                                that.order.pay_type = 0;
                            }
                            that.url('/pay/success', {}, true);
                        });
                    },
                    "cancel": function(res) {
                        var data = {
                            "pay_id": that.payInfo.pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": '用户主动取消',
                            "result": 200
                        };
                        that.ajaxPay(data, function(data) {
                            if(data.status == 0){
                                that.order.pay_id = '';
                                that.order.pay_type = 0;
                            }
                            $('#sysLoading').hide();
                            _util.showErrorTip('正在取消，请稍后...');
                        });
                    },
                    "fail": function(res) {
                        var data = {
                            "pay_id": that.payInfo.pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": res.err_msg,
                            "result": 300
                        };
                        that.ajaxPay(data, function(data) {
                            if(data.status == 0){
                                that.order.pay_id = '';
                                that.order.pay_type = 0;
                            }
                            $('#sysLoading').hide();
                            _util.showErrorTip('正在取消，请稍后...');
                        });
                    }
                });
            })
        },
        aliPay(data) {

        },
        confirmPay(pay_id, callback) {
            var data = {
                "pay_id": pay_id,
                "pay_type": 4,
                "pay_info": {},
                "error_msg": '用户主动取消',
                "result": 200
            };
            that.ajaxPay(data, function(data) {
                if(data.status == 0){
                    that.order.pay_id = '';
                    that.order.pay_type = 0;
                }
                callback();
            });
        },
        submitPay(order_id){
            let that = this;
            let pay_type = _util.isWeixin() ? 4 : 3;
            let data = {
                total_fee: this.sum * 100,
                total_num: this.order.total_num,
                pay_type: pay_type,
                order_ids: [order_id],
                service: 'trading_order_service',
                weixin_id: window.wxid || '',
                open_id: window.open_id || '',
                device_info: _util.getDeviceInfo()
            };
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
                    if(data.status == 0){
                        that.order.pay_id = data.data.pay_id;
                        that.order.pay_type = data.data.pay_id;
                        if(pay_type == 4){
                            that.wxPay(data.data);
                        }else{
                            that.aliPay(data.data);
                        }
                    }
                    else{
                        $('#sysLoading').hide();
                        _util.showErrorTip(data.data.msg);
                    }
                },
                error: function(data) {
                    $('#sysLoading').hide();
                    _util.showErrorTip(data.data.msg);
                }
            });
        },
        goPay() {
            let that = this;
            if(that.order.order_id){
                if(that.order.pay_id && [2101, 2501, 2502].indexOf(that.order.status) > -1){
                    that.confirmPay(that.order.pay_id, function () {
                        that.submitPay(that.order.order_id);
                    });
                }
                else{
                    that.submitPay(that.order.order_id);
                }
            }else{
                that.createrOrder(function () {
                    that.submitPay(that.order.order_id);
                });
            }
        },
        createrOrder(callback) {
            let that=this;
            let params = {
                address_info: {
                    address_type: 1,
                    _id: this.order.address_id
                },
                merchants: [
                    {
                        goods:this.goods,
                        merchant_id: window.merchant_id,
                        total_fee: this.order.total_fee,
                        total_num: this.order.total_num,
                        pay_fee: this.order.total_fee,
                        remark: "",
                        terminal_code:this.order.terminal_code
                    }
                ],
                total_fee: this.order.total_fee,
                delivery_fee: 0,
                total_num: this.order.total_num,
                device_info: _util.getDeviceInfo()
            };
            axios.post(window.config.PAY + '/order?source=wap', params)
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.order.order_id=res.data.data.merchants[0].order_id;
                        callback();
                    } else {
                         $('#sysLoading').hide();
                         _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    $('#sysLoading').hide();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        }
    }
}

</script>
