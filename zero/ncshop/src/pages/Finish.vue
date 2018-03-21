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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
}

.btn-box {
    width: 100%;
    display: flex;
    justify-content: center;
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
    ;
}

.icon-box {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 30px;
    width: 100%;
}
</style>

<template>
    <div class="Finish">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="content-box">
            <div style="width:26%;"><img src="//img.aimoge.com/FsSlu4KsMzm2toqjFUoABNBz76cv"></div>
            <div>登录成功</div>
        </div>
        <!-- <div class="btn-box">
            <div class="btn">
                如何使用格格+
            </div>
        </div> -->
        <!-- <div class="icon-box">
            <div style="width:20%;"><img src="//img.aimoge.com/Ft3-d6-Oj7tnn5ioEFOaqNhtXmza"></div>
        </div> -->
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '登录成功',
            btnconfig: {
                isgoback: 0,
                isconfirm: 0
            },
        }
    },
    components: {
        HeaderBar
    },
    created() {
    },
    mounted() {
        $('#layer').css({ 'display': 'none' });
        this.postData();
    },
    methods: {
        postData() {
            let data = {
                terminal_code: this.$route.query.terminal_code,
                access_token: this.$route.query.access_token
            };
            let that = this;
            that.showSysLoading();
            axios.post('/ncshop/terminal/door/open', data).then((rsp) => {
                that.hideSysLoading();
                if (rsp.data.status == 0) {
                    _util.showSuccessTip('开门成功');
                } else {
                    _util.showErrorTip(rsp.data.msg);
                }
            }).catch((err) => {
                that.hideSysLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            })
        },
        showSysLoading() {
            $('#sysLoading').show();
        },
        hideSysLoading() {
            $('#sysLoading').hide();
        },
    }
}
</script>



 