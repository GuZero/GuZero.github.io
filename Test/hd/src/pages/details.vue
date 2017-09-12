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
                <a class="abs" style="top:14px;right:30px;color:#fff;display:flex;"  v-if="status==11" @click="gotoWWdetails">
                    上屏中
                    <div class="aw_r"></div>
                </a>
                <a class="abs" style="top:14px;right:30px;color:#fff;display:flex;"  v-if="status==31" @click="goPay">
                    去支付
                    <div class="aw_r"></div>
                </a>
            </div>
            <div class="info" style="background:#fff;border-bottom:1px solid #dfdfdf;margin-bottom:16px;">
                <div class="mui-table-view-cell">
                    <div class="items">
                        <div>上屏柜机</div>
                        <div class="mui-ellipsis-2" style="min-width:65%;max-height=60px;overflow-y: scroll;"  v-if="!city_name">
                            <p v-for="(item,index) in items" :key="item.terminal_code" :class="{mg_t0:index==0}">{{item.terminal_name}}</p>
                        </div>
                         <div class="mui-ellipsis-2" style="min-width:65%;max-height=60px;overflow-y: scroll;"  v-if="city_name">
                            <p class="mg_t0">{{city_name}}</p>
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
            <div class="info" style="background:#fff;border-bottom:1px solid #dfdfdf;border-top:1px solid #dfdfdf;" v-show="status!=31">
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
                            {{crts}}
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
            status: 0,
            crts: '',
            topic_id:'',
            terminal_codes:[],
            city_name:'',
            //支付信息
            order: {
                service: 'media_adinteraction_service',
                total_fee: 1,
                pay_id: '',
                pay_Type: 4,
                order_id: '',
                status: 0,
                total_num: 1
            },
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
                this.resetData();
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
            Date.prototype.toLocaleString = function() {
                function getzf(num) {
                    if (parseInt(num) < 10) {
                        num = '0' + num;
                    }
                    return num;
                }
                return (getzf(this.getMonth() + 1)) + "-" + getzf(this.getDate()) + " " + getzf(this.getHours()) + ":" + getzf(this.getMinutes())
            };
            axios.get('/media/adinteraction/' + that.$route.query._id)
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.hideLoading();                        
                        that.terminal_codes=res.data.data.terminal_codes;
                        if(that.terminal_codes.length!=0){
                            that.items = res.data.data.terminals;
                        }else{
                            that.city_name=res.data.data.city.name;
                        }                      
                        that.start_date = res.data.data.start_date;
                        that.end_date = res.data.data.end_date;
                        that.fee = res.data.data.fee;
                        that.status = res.data.data.status;
                        that.crts = new Date(res.data.data.crts * 1000).toLocaleString()
                        that.topic_id=res.data.data.topic_id;
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
                                that.content = '作品已发布上柜，点击查看互动评论';
                                break;
                            case 31:
                                that.title = '金额:' + (that.fee / 100)+'元';
                                that.content = ' ';
                                let data = res.data.data;
                                that.order.order_id = data._id;
                                that.order.total_fee = data.fee;
                                that.order.pay_id = data.pay_id;
                                that.order.status = data.status;
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
                    console.log(err);
                    that.hideLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        goPay() {
            let that = this;
            let search = {
                "order_id": that.order.order_id,
                "service": that.order.service,
                "pay_Type": that.order.pay_Type,
                "total_fee": that.order.total_fee,
                "total_num": that.order.total_num,
                "callbackurl": encodeURIComponent("/adinteraction?#/examine")
            }

            function goPay() {
                window.location.href = '/pay?order_ids=' + search.order_id + '&service=' + search.service + '&total_fee=' + search.total_fee + '&total_num=' + search.total_num + '&callbackurl=' + search.callbackurl;
            }
            if (that.order.status == 211) {
                this.confirmPayCancel(goPay)
            } else {
                window.location.href = '/pay?order_ids=' + search.order_id + '&service=' + search.service + '&total_fee=' + search.total_fee + '&total_num=' + search.total_num + '&callbackurl=' + search.callbackurl;
            }
        },
        confirmPayCancel(callback) {
            let that = this;
            let data = {
                "service": that.order.service,
                "pay_id": that.order.pay_id,
                "pay_type": that.order.pay_Type,
                "result": 300,
                "error_msg": '用户主动取消',
                "pay_info": {}
            }
            axios.post(window.config.PAY + '/pay/' + that.order.pay_id, data).then((rsp) => {
                if (rsp.status == 0 && rsp.data) {
                    if (callback) callback();
                } else {
                    _util.showErrorTip('支付失败');
                    that.$route.go(0);
                }
            })
        },
        gotoWWdetails(){
            if(this.topic_id!='000000000000000000000000'){
                window.location.href=window.config.BASE_URL+'/forum/000000000000000000000000/topic/'+this.topic_id;
            }
        },
        resetData(){
            this.terminal_codes=[];
            this.city_name='';
        }
    }
}
</script>
<style scoped>
.gege-header {
    background: #4285f4;
}

.header {
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
    top: 4px;
}
</style>

