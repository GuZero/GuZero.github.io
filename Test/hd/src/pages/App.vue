<template>
    <div class="home">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @shareBtnCallback="isShare"></HeaderBar>
        <div class="mui-content pd-t40">
            <div class="mui-content-padded" style="padding-top:16px;">
                <div class="bg_icon">
                    <img src="//img.aimoge.com/Fg98WaiXzbArcqC-YffzPkOebVlJ">
                </div>
                <div id="info" v-if="items">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell info" v-for="item in items" :key="item._id" @click.stop.prevent="gotoInfo(item)">
                            <div class="mui-table">
                                <div class="mui-table-cell mui-col-xs-10">
                                    <div class="mui-row line_h30">
                                        <div class="mui-col-sm-2 mui-ellipsis gray ">支付：</div>
                                        <div class="mui-col-sm-10 mui-ellipsis ">24.00元</div>
                                    </div>
                                    <div class="mui-row line_h30">
                                        <div class="mui-col-sm-2 mui-ellipsis gray">日期：</div>
                                        <div class="mui-col-sm-10 line_h30">{{item.start_date.substring(0, 10)}}~{{item.end_date.substring(0, 10)}}</div>
                                    </div>
                                    <div class="mui-row line_h30">
                                        <div class="mui-col-sm-2 mui-ellipsis gray ">审核：</div>
                                        <div class="mui-col-sm-10 blue line_h30">{{item.status1}}</div>
                                    </div>
                                </div>
                                <div class="mui-table-cell mui-col-xs-2 ">
                                    <div class="aw-r"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="no_work" v-if="!items">
                    <div>
                        <div class="img_pic">
                            <img src="//img.aimoge.com/FhZ2HwIuo8ORmL5WmRl2evWh8yGT" alt="">
                        </div>
                        <p class="blue  margin16">暂无互动作品</p>
                    </div>
                </div>
                <button type="button" class="mui-btn mui-btn-primary mui-btn-block" @click="gotoMake">开始制作</button>
            </div>
            <div class="mui-popup-backdrop" v-if="isWeiXin" :class="{opacity:isWeiXin}">
                <div id="share">
                    <div class="lead_img">
                        <img src="//img.aimoge.com/FrIulbQ1YAi88BvSSb-Ojzw-UhDU" alt="" width="100%" height="100%">
                    </div>
                    <div>
                        <p class="mui-text-center">请点击右上角</p>
                        <p class="mui-text-center">将它发送给朋友</p>
                        <p class="mui-text-center">或者朋友圈</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '大屏互动',
            btnconfig: {
                isgoback: 0,
                isshare: 1
            },
            _id: '',
            pay: '',
            cityName: '',
            start_date: '',
            end_date: '',
            items: [],
            isWeiXin: false,
            scroll_load_loading: false,
            scroll_load_end: false
        }
    },
    components: {
        HeaderBar
    },
    created() {
        this.getInfo();
        // this.isshare=_util.isWeixin();
    },
    methods: {
        isShare() {
            this.isWeiXin = true;
            setTimeout(() => this.isWeiXin = false, 1000);
        },
        getInfo() {
            let that = this;
            that.showLoading();
            axios.get('http://api.dev.aimoge.com/v1/media/adinteraction')
                .then(function (response) {
                    if (response.data.status == 0) {
                        that.hideLoading();
                        let data = response.data.data.adinteractions;
                        for (let i = 0; i < data.length; i++) {
                            switch (data[i].status) {
                                case 1:
                                    data[i].status1 = '等待审核';
                                    break;
                                case 11:
                                    data[i].status1 = '通过审核';
                                    break;
                                case 12:
                                    data[i].status1 = '审核拒绝';
                                    break;
                                default:
                                    data[i].status1 = '等待审核';
                                    break;
                            }
                            data[i].length = data[i].city.name.length;
                            // console.log(data.city);
                        }
                        that.items = response.data.data.adinteractions;
                    } else {
                        if (response.data.msg) _util.showErrorTip(response.data.msg);
                    }
                })
                .catch(function (err) {
                    that.hideLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        gotoInfo(item) {
            if (item.status == '1') {
                this.url('/details',{_id:item._id})
            }
        },
        gotoMake() {
            this.url('/make')
        },
        showLoading() { //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading() { //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        }
    }
}
</script>
<style scoped>
.opacity {
    opacity: 1;
}

.aw-r {
    position: absolute;
    right: 9px;
    top: 50%;
    margin-top: -6px
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
}
</style>



