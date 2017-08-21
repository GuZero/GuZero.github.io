<template>
    <div class="Pay">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="content-box">
            <div class="list">
                <div class="list-l">
                    <p>订单编号</p>
                    <p>购物网点</p>
                    <p>支付金额</p>
                    <p>支付时间</p>
                    <p>支付方式</p>
                </div>
                <div class="list-r">
                    <p>***********************</p>
                    <p>***********************</p>
                    <p>26元</p>
                    <p>2017-07-23 13：00</p>
                    <p>微信支付</p>
                </div>
            </div>
            <div style="background:#fff;">
                <div style="padding:5px 16px;">
                    <div class="item">
                        <div style="width:70%">蒙牛纯牛奶250ml</div>
                        <div style="width:10%;text-align:center;" class="c-gary">×5</div>
                        <div style="width:20%;text-align:right;">3.2元</div>
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
            如对订单有疑问，请拨打客服电话：400-033-8888
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '订单列表',
            btnconfig: {
                isgoback: 1
            },
            sum: '26'
        }
    },
    components: {
        HeaderBar
    },
    mounted() {

    },
    methods: {
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
    padding: 8px;
    padding-top: 52px;
}

.list {
    background: #fff;
    margin-bottom: 20px;
    display: flex;
    padding: 5px 16px;
    justify-content: flex-start;
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
    display: flex;
    height: 35px;
    line-height: 35px;
}

.total {
    height: 42px;
    align-items: center;
    border-top: 1px solid #ececec;
    justify-content: space-between;
}
.footer-box{
    background: #fff;
    border-top: 1px solid #d2d2d2;
    width: 100%;
    text-align: center;
    height: 45px;
    line-height: 45px;
    color:#008cff;
    bottom: 0px; 
}
</style>



