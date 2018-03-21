<style scoped>
.c-blue {
    color: #008cff;
}

.c-gary {
    color: #afafaf;
}

.content-box img {
    background-color: none;
}

.content-box {
    height: 40vh;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 44px;
}

.btn-box {
    width: 100%;
}

.btn-box .btn {
    width: 36%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background: #008cff;
    padding: 0 5px;
    border-radius: 25px;
}

.icon-box {
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
            <div class="btn" @click="goBack">
                返回首页
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '付款成功',
            order: {},
            btnconfig: {
                isgoback: 0,
            },
        }
    },
    components: {
        HeaderBar
    },
    mounted() {
        this.getData();
    },
    methods: {
        goBack() {
            this.url('/ncshop/shelf', {"shelf_code": this.order.shelf_code, "dot_id": this.order.dot_id}, true);
        },
        getData() {
            let that = this;
            $('#sysLoading').show();
            axios.get('/ncshop/shelf/order/' + that.$route.query.order_id)
                .then(function(res) {
                    $('#sysLoading').hide();
                    if (res.data.status == 0) {
                        that.order = res.data.data.order;
                    } else {
                        if (res.data.msg) _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    $('#sysLoading').hide();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
        }
    }
}
</script>



 