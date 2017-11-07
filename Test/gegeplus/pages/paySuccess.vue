<style scoped>
.c-blue {
    color: #008cff;
}

.c-gary {
    color: #afafaf;
}
.content-box img{
   background-color: none;
}
.content-box{
    height: 40vh;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 44px;
}
.btn-box{
    width: 100%;
}
.btn-box .btn{
    width: 36%;
    text-align: center;
    height:40px;
    line-height: 40px;
    color: #fff;
    background: #008cff;
    padding:0 5px;
    border-radius: 25px;;
}
.icon-box{
    position: absolute;
    bottom: 30px;
    width: 100%;
}
</style>
<template>
    <div class="Finish">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="content-box flex-g flex-align-center flex-pack-center">
           <div style="width:26%;"><img src="//img.aimoge.com/FsSlu4KsMzm2toqjFUoABNBz76cv"></div>
           <div>支付成功</div>
        </div>
        <div class="btn-box flex-g flex-pack-center">
            <div class="btn">
                继续逛逛
            </div>
        </div>
        <div class="icon-box flex-g flex-pack-center">
            <div style="width:20%;"><img src="//img.aimoge.com/Ft3-d6-Oj7tnn5ioEFOaqNhtXmza"></div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '付款成功',
            btnconfig: {
                isgoback: 0,
            },
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



 