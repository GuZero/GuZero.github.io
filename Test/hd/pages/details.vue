<template>
    <div class="details">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div style="height:44px;"></div>
        <div class="content mui-content">
            <div class="header rel">
                <div>
                    <div class="title">{{title}}</div>
                    <div>{{content}}</div>
                </div>
                <a class="abs" style="top:24px;right:30px;" href="" v-if="status==12">
                    <div class="aw_r"></div>
                </a>
            </div>
            <div class="info" style="background:#fff;border-bottom:1px solid #dfdfdf;margin-bottom:16px;">
                <div class="mui-table-view-cell">
                    <div class="items">
                        <div>上屏柜机</div>
                        <div class="mui-ellipsis-2" style="min-width:65%;max-height=60px;overflow-y: scroll;">
                            <p v-for="(item,index) in items" :key="item.terminal_code" :class="{mg_t0:index==0}">{{item.terminal_name}}</p>
                        </div>
                    </div>
                </div>
                <div class="mui-table-view-cell">
                    <div class="items">
                        <div>上屏时间</div>
                        <div>
                            {{start_date}} ---- {{end_date}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="info" style="background:#fff;border-bottom:1px solid #dfdfdf;border-top:1px solid #dfdfdf;">
                <div class="mui-table-view-cell">
                    <div class="items">
                        <div>支付金额</div>
                        <div class="mui-ellipsis-2">
                            {{fee/100}}元
                        </div>
                    </div>
                </div>
                <div class="mui-table-view-cell">
                    <div class="items">
                        <div>下单时间</div>
                        <div>
                            {{'09-20'}} {{'10:30'}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    mixins: [require('../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: '作品详情',
            bodyBg: 'bg_gray',
            btnconfig: {
                isgoback: 1
            },
            start_date: '2017-07-11',
            end_date: '2017-09-13',
            items: [],
            title: '审核中',
            content: '24小时内将完成审核，若不通过则自动退款',
            fee: 0,
            status:0
        }
    },
    components: {
        HeaderBar
    },
    mounted() {
        this.getData();
    },
    watch: {
        '$route': function() {
            if (this.$route.path == ('/details')) {
                this.getData();
            }
        }

    },
    methods: {
        showLoading() { //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading() { //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        },
        getData() {
            let that = this;
            that.showLoading();
            axios.get('/media/adinteraction/' + that.$route.query._id)
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.hideLoading();
                        that.items = res.data.data.terminals;
                        that.start_date = res.data.data.start_date;
                        that.end_date = res.data.data.end_date;
                        that.fee = res.data.data.fee;
                        that.status=res.data.data.status;
                        switch (res.data.data.status) {
                            case 1:
                                that.title = '审核中';
                                that.content = '24小时内将完成审核，若不通过则自动退款';
                                break;
                            case 11:
                                that.title = '未通过';
                                that.content = '内容不符，已安排微信退款，请注意查收';
                                break;
                            case 12:
                                that.title = '上屏中';
                                that.content = '24小时内将完成审核，若不通过则自动退款';
                                break;
                            default:
                                that.title = '审核中';
                                that.content = '24小时内将完成审核，若不通过则自动退款';
                                break;
                        }
                    } else {
                        if (res.data.msg) _util.showErrorTip(res.data.msg);
                    }
                })
                .catch(function(err) {
                    that.hideLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        }
    }
}
</script>
<style scoped>
.gege-header {
    background: #4285f4;
}

.header {
    height: 25vh;
    background: #4285f4;
    color: #fff;
    font-size: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
}

.header .title {
    font-size: 30px;
    margin-bottom: 28px;
}

.items {
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    color: #8a8a8a;
}

.items p {
    margin-top: 8px;
    text-align: right;
}

.items .mg_t0 {
    margin-top: 0px;
}

.aw_r::after {
    content: '';
    display: block;
    position: absolute;
    width: 11px;
    height: 11px;
    border-top: 2px #fff solid;
    border-right: 2px #fff solid;
    border-top-right-radius: 2px;
    transform: rotate(45deg);
}
</style>

