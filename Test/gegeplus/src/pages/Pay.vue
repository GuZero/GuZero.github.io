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
                    <div class="item">
                        <div style="width:70%">蒙牛纯牛奶250ml</div>
                        <div style="width:10%;text-align:center;" class="c-gary">×5</div>
                        <div style="width:20%;text-align:right;">3.2元</div>
                    </div>
                    <div class="item">
                        <div style="width:70%">蒙牛纯牛奶250ml</div>
                        <div style="width:10%;text-align:center;" class="c-gary">×5</div>
                        <div style="width:20%;text-align:right;">3.2元</div>
                    </div>
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
            <div style="width:70%;background:#454545;height:42px;line-height:42px;padding-left:10px;">支付金额：31元</div>
            <div style="width:30%;background:#f88f1e;height:42px;line-height:42px;text-align:center">确认扣款</div>
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
.footer-box{
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



