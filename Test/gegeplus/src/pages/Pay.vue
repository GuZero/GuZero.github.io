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
                        <div style="width:70%">{{item.name}}</div>
                        <div style="width:10%;text-align:center;" class="c-gary">×{{item.num}}</div>
                        <div style="width:20%;text-align:right;">{{item.price}}</div>
                    </div>
                </div>
                <div style="padding-left:16px;padding-right:16px;">
                    <div class="flex-g total">
                        <span style="font-weight:bold">商品总额</span>
                        <span class="c-blue">31</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-box fixed">
            <div style="width:70%;background:#454545;height:42px;line-height:42px;padding-left:10px;">支付金额：31元</div>
            <div style="width:30%;background:#f88f1e;height:42px;line-height:42px;text-align:center" @click="postData">确认扣款</div>
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
            sum: '26',
            res: {},
            _id: '',
            items: []
        }
    },
    components: {
        HeaderBar
    },
    created() {
        this.items = [{
            'price': '3',
            'name': '蒙牛纯牛奶250ml',
            'num': '3',
            'id': '01'
        }, {
            'price': '4',
            'name': '蒙牛纯牛奶250ml',
            'num': '3',
            'id': '02'
        }]
    },
    mounted() {
    },
    methods: {
        getInfo() {
            let that = this;
            $('#sysLoading').show();
            axios.get(window.config.API + '/v1/ncshop/cart/' + that._id)
                .then(function (res) {
                    $('#sysLoading').hide();
                    if (res.data.status == 0) {

                    } else {
                        if (res.data.msg) {
                            _util.showErrorTip(res.data.msg);
                        }
                    }
                }).catch(function (err) {
                    $('#sysLoading').hide();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        ajax(data, success, error) {
            $.ajax({
                type: "post",
                url: window.config.PAY + '/pay/' + pay_id,
                data: JSON.stringify(data),
                dataType: 'json',
                contentType: 'application/json',
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    if (data.status != 0) {
                        _util.showErrorTip(data.msg);
                    }
                    success(data);
                },
                error: function (data) {
                    _util.showErrorTip('网络错误，请重试！');
                    error(data);
                }
            });
        },
        wxPay() {
            let that = this;
            wx.ready(function () {
                wx.chooseWXPay({
                    "timestamp": '{{ params.timestamp }}', //时间戳，自 1970 年以来的秒数
                    "nonceStr": '{{ params.noncestr }}', //随机串
                    "package": '{{ params.package_value }}',
                    "signType": '{{ params.sign_type }}', //微信签名方式:
                    "paySign": '{{ params.pay_sign }}', //微信签名
                    "success": function (res) {
                        var data = {
                            "pay_id": pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": '支付成功',
                            "result": 100
                        };
                        _util.showErrorTip('等待确认，请稍后...');
                        ajax(data, function (data) {
                            that.url('/pay/success');
                        }, function (data) {
                            that.url('/pay/success');
                        });
                    },
                    "cancel": function (res) {
                        var data = {
                            "pay_id": pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": '用户主动取消',
                            "result": 200
                        };
                        _util.showErrorTip('正在取消，请稍后...');
                        ajax(data, function (data) {
                            window.history.back();
                        }, function (data) {
                            window.history.back();
                        });
                    },
                    "fail": function (res) {
                        var data = {
                            "pay_id": pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": res.err_msg,
                            "result": 300
                        };
                        _util.showErrorTip(res.err_msg + '正在返回...');
                        ajax(data, function (data) {
                            setTimeout(function () {
                                window.history.back();
                            }, 2000);
                        }, function (d) {
                            setTimeout(function () {
                                window.history.back();
                            }, 2000);
                        });
                    }
                });
            })
        },
        goPay() {
            let data = {
                total_fee: this.fee,
                total_num: 1,
                pay_type: 4,
                order_ids:'',
                service:'',
                weixin_id:'',
                open_id:''
            }
        }
    }
}

</script>
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
    width: 36%;
    height: 96px;
    background: url('//img.aimoge.com/FuGFP0LpnA1XQ0gEQNqi0HUEzgIp') no-repeat center center;
    position: absolute;
    right: 20px;
    background-size: 70% 70%;
    top: 20%;
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
