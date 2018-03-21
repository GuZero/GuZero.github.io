<style scoped>
.c-blue {
    color: #008cff;
}

.c-gary {
    color: #afafaf;
}

.content-box {
    padding: 8px;
    padding-top: 52px;
}

.list {
    background: #fff;
    margin-bottom: 20px;
    padding: 5px 16px;
    justify-content: flex-start;
    -webkit-box-pack: flex-start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: flex-start;
}

.list p {
    line-height: 35px;
}

.list-r {
    width: 75%;
    color: #333;
}

.list-l {
    color: #999999;
    width: 25%;
}

.item {
    height: 35px;
    line-height: 35px;
    color: #323232;
}

.total {
    height: 42px;
    border-top: 1px solid #ececec;
}

.footer-box {
    background: #fff;
    border-top: 1px solid #d2d2d2;
    width: 100%;
    text-align: center;
    height: 45px;
    line-height: 45px;
    color: #008cff;
    bottom: 0px;
}
</style>
<template>
    <div class="shelf-List">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="content-box">
            <div class="list flex-g">
                <div class="list-l">
                    <p>订单编号</p>
                    <p>购物网点</p>
                    <p>支付金额</p>
                    <p>支付时间</p>
                    <p>支付方式</p>
                </div>
                <div class="list-r">
                    <p>{{order.order_id}}</p>
                    <p>{{order.terminal_name}}</p>
                    <p>{{order.pay_fee}}元</p>
                    <p>{{order.pay_at}}</p>
                    <p>{{order.pay_type}}</p>
                </div>
            </div>
            <div style="background:#fff;">
                <div style="padding:5px 16px;">
                    <div class="item flex-g" v-for="item in goods" :key="item.id">
                        <div style="width:70%">{{item.title}}</div>
                        <div style="width:10%;text-align:center;" class="c-gary">×{{item.num}}</div>
                        <div style="width:20%;text-align:right;">{{item.pay_fee/100}}元</div>
                    </div>
                </div>
                <div style="padding-left:16px;padding-right:16px;">
                    <div class="flex-g total flex-pack-justify flex-align-center">
                        <span style="font-weight:bold;color:#323232;">商品总额</span>
                        <span class="c-blue">{{order.total_fee}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-box fixed">
            如对订单有疑问，请拨打客服电话：{{consumer_phone}}
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    mixins: [require('../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: '订单详情',
            bodyBg: 'gray',
            btnconfig: {
                isgoback: 1
            },
            order: {
                order_id: '',
                terminal_name: '',
                pay_fee: 0,
                pay_at: '',
                pay_type: 0,
                total_fee: 0,
            },
            goods: [],
            consumer_phone: (window.ncshop_config && window.ncshop_config.consumer_phone) || '400-033-8888'
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
    watch: {
        '$route': function() {
            if (this.$route.path == ('/ncshop/shelf/order/' + this.$route.params.order_id)) {
                this.getData();
            }
        }
    },
    methods: {
        getData() {
            let that = this;
            $('#sysLoading').show();
            axios.get('/ncshop/shelf/order/' + that.$route.params.order_id)
                .then(function(res) {
                    $('#sysLoading').hide();
                    if (res.data.status == 0) {
                        let data = res.data.data.order;
                        that.order.order_id = data.order_id;
                        that.order.terminal_name = data.shelf.name;
                        that.order.pay_fee = data.pay_fee / 100;
                        that.order.pay_at = data.pay_at;
                        that.order.total_fee = data.total_fee / 100;
                        switch (data.pay_type) {
                            case 3:
                                that.order.pay_type = '支付宝支付';
                                break;
                            case 4:
                                that.order.pay_type = '微信支付';
                                break;
                            default:
                                that.order.pay_type = '支付宝支付';
                                break;
                        }
                        let goodses = data.goodses;
                        that.goods = [];
                        for (let i = 0; i < goodses.length; i++) {
                            let obj = Object.create(null);
                            obj.title = goodses[i].trading.title;
                            obj.num = goodses[i].num;
                            obj.pay_fee = goodses[i].price;
                            that.goods.push(obj);
                        }
                    } else {
                        if (res.data.msg) _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    $('#sysLoading').hide();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
    }
}
</script>



