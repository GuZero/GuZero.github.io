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

.aw-r::after {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-top: 2px #c7c7cc solid;
    border-right: 2px #c7c7cc solid;
    border-top-right-radius: 2px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    /* IE 9 */
    -moz-transform: rotate(45deg);
    /* Firefox */
    -webkit-transform: rotate(45deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(45deg);
}

.item {
    padding-left: 20px;
    background: #fff;
    box-sizing: border-box;
    margin-bottom: 10px;
}

.item-t {
    border-bottom: 1px solid #ececec;
    color: #333;
    height: 46px;
    padding-right: 10px;
    font-size: 16px;
    font-weight: 600;
}

.item-c {
    color: #a8a8a8;
    padding: 20px 0;
    box-sizing: border-box;
    padding-right: 20px;
}

.aw-r {
    position: absolute;
    right: 22px;
    top: 36%;
}

.text {
    color: #a8a8a8;
    font-size: 16px;
    position: absolute;
    height: 36px;
    top: 40%;
    width: 100%;
    text-align: center;
}
</style>
<template>
    <div class="Pay">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="content-box">
            <div class="item" v-for="item in items" :key="item.order_id">
                <div class="item-t flex-g flex-pack-justify flex-align-center">
                    <div>{{item.pay_at}}</div>
                    <div>{{item.pay_fee}}元</div>
                </div>
                <div class="item-c rel flex-g flex-pack-justify" @click="gotoList(item)">
                    <div>
                        <div class="flex-g">
                            <div style="width:30%">
                                订单编号：
                            </div>
                            <div style="width:70%">
                                {{item.order_id}}
                            </div>
                        </div>
                        <div class="flex-g">
                            <div style="width:30%">
                                购物网点：
                            </div>
                            <div style="width:70%">
                                {{item.terminal_name}}
                            </div>
                        </div>
                    </div>
                    <div class="aw-r"></div>
                </div>
            </div>
        </div>
        <div v-if="flag" class="text">暂无订单</div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '订单列表',
            btnconfig: {
                isgoback: 0
            },
            items: [],
            flag: true
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
            if (this.$route.path == ('/ncshop/order')) {
                this.getData();
            }
        }
    },
    methods: {
        getData() {
            this.items = [];
            let that = this;
            $('#sysLoading').show();
            axios.get('/ncshop/order')
                .then(function(res) {
                    $('#sysLoading').hide();
                    if (res.data.status == 0) {
                        let data = res.data.data.orders;
                        data.length == 0 ? that.flag = true : that.flag = false;
                        for (let i = 0; i < data.length; i++) {
                            let obj = Object.create(null);
                            obj.pay_at = data[i].pay_at;
                            obj.pay_fee = data[i].pay_fee / 100;
                            obj.order_id = data[i].order_id;
                            obj.terminal_name = data[i].terminal['terminal_name'];
                            that.items.push(obj);
                        }
                    } else {
                        if (res.data.msg) _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    $('#sysLoading').hide();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        gotoList(item) {
            this.url('/ncshop/order/' + item.order_id);
        }
    }
}
</script>




