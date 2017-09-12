<template>
    <div class="examine">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @callback="goback"></HeaderBar>
        <div class="mui-content pd10">
            <div class="mui-content-padded">
                <div class="mui-text-center">
                    <div style="width: 110px;height: 80px;display: inline-block;">
                        <img src="//img.aimoge.com/FusiskJqzeh-IeU39DPXStckIv-U" alt="" width="100%" height="100%">
                    </div>
                </div>
                <div class="mui-text-center margin16">
                    <p class="mui-h4 mui-ellipsis color_w line_h30">
                        格格小编对着
                        <span id="city_count">{{city_count}}</span>个作品
                    </p>
                    <p class="mui-h4 mui-ellipsis color_w line_h30">
                        凝视中...
                    </p>
                </div>
                <div class="mui-table-view weixi pd10">
                    <div class="mui-row mui-text-center">
                        <div style="width:105px;height:105px;display: inline-block;">
                            <img src="//img.aimoge.com/Fr57mf2VPXU-JXi3ABQY226rGXcl" alt="" width="100%" height="100%">
                        </div>
                    </div>
                    <div class="mui-row mui-text-center font_14 line_h30 margin16">
                        微信关注格格小区
                    </div>
                    <div class="mui-row mui-text-center font_14 line_h30">
                        超能箱菜单查看互动作品的状态
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
            pageTitle: '正在审核',
            btnconfig: {
                isgoback: 0,
                isback:1
            },
            city_id: '',
            city_count: '',
            scroll_load_loading: false,
            scroll_load_end: false
        }
    },
    components: {
        HeaderBar
    },
    created() {
        this.cancelOrder(this.getInfo);
    },
    watch:{
        '$route': function() {
            if (this.$route.path == ('/examine')) {
               this.cancelOrder(this.getInfo);
            }
        } 
    },
    methods: {
        cancelOrder(callback) {
            let that = this;
            axios.get('/media/adinteraction').then((res) => {
                if (res.data.status == 0) {
                    let data = res.data.data.adinteractions;
                    that.city_id = data[0].city_id;
                    for (let i = 0; i < data.length; i++) {
                        if (data[i]._id) {
                            if (data[i].pay_id && [36, 37].indexOf(data[i].status) > -1) {
                                axios.delete('/media/adinteraction/' + data[i]._id).then((res) => {
                                })
                            }
                        }
                    };
                    if (callback) callback()
                }
            })

        },
        getInfo() {
            let that = this;
            that.showLoading();
            axios.get('/media/adinteraction/info?city_id=' + that.city_id)
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.hideLoading();
                        if (res.data.city_count == null) {
                            that.city_count = 0;
                        } else {
                            that.city_count = res.data.city_count;
                        }
                    } else {
                        if (res.data.msg) _util.showErrorTip(res.data.msg);
                    }
                })
                .catch(function(err) {
                    that.hideLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        goback(){
            this.url('./',null,1);
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



