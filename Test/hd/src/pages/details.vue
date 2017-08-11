<template>
    <div class="details">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div style="height:44px;"></div>
        <div class="content mui-content">
            <div class="header">
                <div>
                    <div class="title">上屏中</div>
                    <div>内容不符，已安排微信退款，请注意查收</div>
                </div>
            </div>
            <div class="info" style="background:#fff;border-bottom:1px solid #dfdfdf;margin-bottom:16px;">
                <div class="mui-table-view-cell">
                    <div class="items">
                        <div>上屏柜机</div>
                        <div class="mui-ellipsis-2" style="min-width:65%;">
                            <p style="margin-top:0;">1865创意园东二楼格格货栈</p>
                            <p>1865创意园东二楼格格货栈</p>
                        </div>
                    </div>
                </div>
                <div class="mui-table-view-cell">
                    <div class="items">
                        <div>上屏柜机</div>
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
                          {{21.00}}元
                        </div>
                    </div>
                </div>
                <div class="mui-table-view-cell">
                    <div class="items">
                        <div>下单时间</div>
                        <div>
                          {{'09-20'}}   {{'10:30'}}
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
        }
    },
    components: {
        HeaderBar
    },
    mounted() {
        this.getData();
    },
    watch:{
        '$route':function(){
           if(this.$route.path==('/details')){
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
        getData(){
             let that = this;
            that.showLoading();
            axios.get('http://api.dev.aimoge.com/v1/media/adinteraction/'+that.$route.query._id)
                .then(function (res) {
                    if (res.data.status == 0) {
                        that.hideLoading();
                        console.log(res.data);
                    } else {
                        if (res.data.msg) _util.showErrorTip(res.data.msg);
                    }
                })
                .catch(function (err) {
                    console.log(err);
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
</style>

