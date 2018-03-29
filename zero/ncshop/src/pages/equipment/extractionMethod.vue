<style scoped>
.extraction-page .gege-header{
    background-color: #be6835;
}
.c-coffee{
    color: #be6835
}
.extraction-page .container{
    padding: 0;
    padding-top: 60px;
}
.extraction-page .item{
    padding: 15px 30px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    color: #3d3d3d;
}
.extraction-page .item .left-box{
    width: 28%;
}
.extraction-page .item .right-box{
    text-align: center;
    width: 70%;
    font-weight: 600;
}
.extraction-page .weight{
    font-weight: 600;
}
.extraction-page .footer-box{
    width: 100%;
    text-align: center;
    bottom: 1%;
    color: #888888;
}
.extraction-page .dashed-icon-1{
    width: 10%;
    left:5%;
    bottom: -16%;
}
.extraction-page .dashed-icon-2{
    width: 5%;
    bottom: -30%;
    left: 30%;
}
</style>

<template>
    <div class="extraction-page">
        <div class="container">
            <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @confirmCallback="gotoOrder"></HeaderBar>
            <div class="item flex-g rel">
                <div class="left-box">
                    <img src="//img.aimoge.com/FjMyZ-7rllueiIBnTl4vwWnSEdyO" alt="icon">
                </div>
                <div class="right-box flex-g flex-pack-center flex-align-center">
                    <div>
                        <p>线上<span class="c-coffee weight">咖啡商城</span>选购</p>
                        <p>咖啡并成功生成兑换码</p>
                    </div>
                </div>
                <div class="dashed-icon-1 abs">
                    <img src="//img.aimoge.com/FlNalQtH9j9NGwr0Bv_SqnVQkrEF" alt="dashed-icon-1">
                </div>
            </div>
            <div class="item flex-g rel">
                <div class="left-box">
                    <img src="//img.aimoge.com/Fk8hDWgXwoNdgGwib3hzHwMHvsXO" alt="icon">
                </div>
                <div class="right-box flex-g flex-pack-center flex-align-center">
                    <div>
                        <p>选择您附近的</p>
                        <p>一台<span class="c-coffee weight">趣点咖啡机</span></p>
                    </div>
                </div>
                <div class="dashed-icon-2 abs">
                    <img src="//img.aimoge.com/FoyA0NQQkZJIwUI20-4kOzwTe3XU" alt="dashed-icon-2">
                </div>
            </div>
             <div class="item flex-g rel">
                <div class="left-box">
                    <img src="//img.aimoge.com/FjMyZ-7rllueiIBnTl4vwWnSEdyO" alt="icon">
                </div>
                <div class="right-box flex-g flex-pack-center flex-align-center">
                    <div>
                        <p>从咖啡机屏幕兑换</p>
                        <p>入口进入依次</p>
                        <p>输入<span class="c-coffee weight">兑换码</span>即可获得</p>
                    </div>
                </div>
                <div class="dashed-icon-1 abs">
                    <img src="//img.aimoge.com/FlNalQtH9j9NGwr0Bv_SqnVQkrEF" alt="dashed-icon-1">
                </div>
            </div>
            <div class="item flex-g rel">
                <div class="left-box">
                    <img src="//img.aimoge.com/Fq6iNepGszJCih1FuvX5vMROLGm2" alt="icon">
                </div>
                <div class="right-box flex-g flex-pack-center flex-align-center">
                    <div>
                        <p><span class="c-coffee weight">15天</span>内未兑换</p>
                        <p>将自动退款</p>
                        <p>钱原路返回</p>
                    </div>
                </div>
            </div>
            <div class="footer-box abs">
                <p>趣点咖啡，您最好的休闲选择</p>
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
            pageTitle: '咖啡提取方式',
            bodyBg: 'white',
            btnconfig: {
                isgoback: 1
            },
        }
    },
    components: {
        HeaderBar,
    },
    created() {
    },
    mounted() {
    },
    methods: {}
     
}
</script>