<template>
    <div class="choiceChest">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @confirmCallback="setData" @callback="setData"></HeaderBar>
        <div style="height:44px;"></div>
        <div class="search flex flex-pack-justify flex-align-center fixed">
            <div class="input rel">
                <input type="text" placeholder="输入小区名" v-model="word">
                <div class="tag abs" v-if="word" @click="clearInput"></div>
            </div>
            <div class="search-btn" @click="search">搜索</div>
        </div>
        <div class="content mui-content rel">
            <div class="height_24">包成示爱选项</div>
            <div class="all flex flex-pack-justify" @click="gotoInfo">
                <div class="text">包城示爱</div>
                <div class="aw-r rel" style="width:20px;height:100%;"></div>
            </div>
            <div class="height_24">附近的格格货栈</div>
            <div class="pos-loading rel" v-show="isLocation">{{locatinfo}}
                <div class="abs repos" @click="AMapGetLoction('ture')">重新定位</div>
            </div>
            <div :class="{mg_20:isLocation,pd_20:!isLocation}">
                <div class="item flex" v-for="(d,index) in items" :key="d.id" @click="choiceItem(d,$event)" :class="{disabled:d.id=='02'}">
                    <div class="icon">
                        <div class="choice_icon" v-show="flag"></div>
                    </div>
                    <p class="mui-ellipsis">{{d.terminal_name}}</p>
                    <div class="abs" style="right:16px;">{{d.distance}}KM</div>
                </div>
                <div class="empty" v-if="!items.length&&!scroll_load_loading&&!isLocation">┗|'O'|┛ 嗷~~抱歉暂时没有找到您想要的</div>
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
            pageTitle: '选择柜机',
            bodyBg: 'bg_white',
            btnconfig: {
                isgoback: 0,
                isconfirm: 1,
                isback: 1
            },
            word: '',
            latitude: 32.015198941158,
            longitude: 118.79287282351,
            locatinfo: "定位中...",
            isLocation: true,
            scrollHeight: 0,
            numPerPage: 16,
            items: [],
            pageList: [],
            page: '',
            scroll_load_loading: false,
            scroll_load_end: false,
            activeTab: '0',
            flag: false,
            t_c: [],
            t_n: [],
            city_id: ''
        }
    },
    components: {
        HeaderBar
    },
    beforeRouteEnter: (to, from, next) => {
        $('#sysLoading').hide();
        next();
    },
    beforeRouteLeave: (to, from, next) => {
        window.removeEventListener('scroll', this.handleScroll);
        $('#sysLoading').show();
        next();
    },
    mounted() {
        this.AMapGetLoction();
    },
    watch: {
        '$route': function() {
            if (this.$route.path == ('/choiceChest')) {
                this.clearData();
                this.AMapGetLoction();
            }
        }
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        choiceItem(item, ev) {
            let el = ev.currentTarget;
            let icon = $(el).children('.icon').children();
            if ($(icon).is(":hidden")) {
                $(icon).show();
                this.t_c.add(item.terminal_code)
                this.t_n.add(item.terminal_name)
                this.city_id = item.city_id;
            } else {
                $(icon).hide();
                this.t_c.remove(item.terminal_code);
                this.t_n.remove(item.terminal_name)
            }
        },
        gotoInfo() {
            this.url('./allcity');
        },
        wxGetLoction() {
            let that = this;
            wx.ready(function() {
                wx.getLocation({
                    suceess: function(res) {
                        that.longitude = res.longitude;
                        that.latitude = res.latitude;
                        that.load();
                    },
                    cancel: function(err) {
                        _util.showErrorTip('用户拒绝授权获取地理位置');
                        that.locatinfo = '定位失败';
                    }
                })
            })
        },
        AMapGetLoction(isFirst) {
            if (_util.isWeixin() && isFirst) {
                this.$router.go(0);
            }
            var map, geolocation;
            var that = this;
            //加载地图，调用浏览器定位服务
            map = new AMap.Map('', {
                resizeEnable: true
            });
            map.plugin('AMap.Geolocation', function() {
                geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true, //是否使用高精度定位，默认:true
                    timeout: 10000, //超过10秒后停止定位，默认：无穷大
                    buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    buttonPosition: 'RB'
                });
                map.addControl(geolocation);
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', that.onComplete); //返回定位信息
                AMap.event.addListener(geolocation, 'error', that.onError); //返回定位出错信息
            });
        },
        load() {
            let that = this,
                page = '';
            if (that.scroll_load_loading) {
                return false;
            }
            if (that.scroll_load_end) {
                return false;
            }
            that.showLoading();
            page = that.page;
            axios.get('/media/adinteraction/terminal/near?longitude=' + that.longitude + '&latitude=' + that.latitude + '&word=' + that.word)
                .then(function(response) {
                    if (response.data.status == 0) {
                        that.hideLoading();
                        let d = response.data;
                        if (d.data.terminals && d.data.terminals.length > 0) {
                            if (that.pageList.indexOf(page) >= 0) return false;
                            that.pageList.push(page);
                            that.page = d.data.next_cursor || '';
                            that.items = that.items.concat(d.data.terminals);
                            that.setDataStatus();
                            if (d.data.terminals && d.data.terminals.length < that.numPerPage) {
                                that.scroll_load_end = true;
                            }
                        }
                    } else {
                        if (response.data.msg) _util.showErrorTip(response.data.msg);
                    }
                })
                .catch(function(err) {
                    that.hideLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        handleScroll() {
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                if (this.items.length > 8) {
                    this.load();
                }else{
                    return false;
                }
            }
        },
        setDataStatus() {
            var that = this;
            var item = null,
                tempItems = [];
            for (let i = 0; i < that.items.length; i++) {
                item = that.items[i];
                item.distance = that.getFlatternDistance(that.latitude, that.longitude, item.geo[1], item.geo[0]);
                tempItems.push(item);
            }
            that.items = tempItems;
        },
        getFlatternDistance(lat1, lng1, lat2, lng2) {
            var that = this;
            var PI = Math.PI;
            var radLat1 = that.getRad(lat1);
            var radLat2 = that.getRad(lat2);
            var a = radLat1 - radLat2;
            var b = that.getRad(lng1) - that.getRad(lng2);
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * 6378.137; // EARTH_RADIUS;
            s = Math.round(s * 1000) / 1000;
            return s;
            return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
        },
        getRad(d) {
            let PI = Math.PI;
            return d * PI / 180.0;
        },
        onComplete(data) {
            this.longitude = data.position.getLng();
            this.latitude = data.position.getLat();
            this.isLocation = false;
            this.load();
        },
        onError(data) {
            _util.showErrorTip('定位失败，请确认是否授权获取您的地理位置...');
            this.locatinfo = '定位失败';
            // this.isLocation = false;
            // this.load();
        },
        setData() {
            window.Data.t_c = this.t_c;
            window.Data.t_n = this.t_n;
            window.Data.city_id = this.city_id;
            this.url('./submit')
        },
        clearData() {
            $(".choice_icon").hide();
            window.Data = {};
            this.isLocation = true;
            this.word = '';
            this.flag = false;
            this.t_c = [];
            this.t_n = [];
            this.items = [];
            this.pageList = [];
            this.page = '';
            this.scroll_load_loading = false;
            this.scroll_load_end = false;
        },
        search() {
            if (!this.word) {
                _util.showErrorTip('请输入小区的名称')
                return false;
            }
            this.page = '';
            this.pageList = [];
            this.items = [];
            this.scroll_load_end = false;
            this.scroll_load_loading = false;
            this.load();
        },
        clearInput() {
            this.word = '';
        },
        showLoading() { //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading() { //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        },
    }
}

</script>
<style scoped>
.gege-header {
    background: #4285f4;
}

.content {
    padding: 0 16px;
    padding-top: 60px;
}

.btn_blue {
    border: 0.01px solid #4285f4;
    background-color: #4285f4;
    font-size: 15px;
    padding: 7px 0;
    width: 100%;
    color: #fff;
    border-radius: 4px;
}

.search {
    margin: 0;
    z-index: 300;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 16px;
    font-size: 14px;
    color: #c3c3c3;
    border-bottom: 1px #eee solid;
    background-color: #4285f4;
    box-sizing: border-box;
}

.search .input {
    flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.search input {
    color: #666;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    background-color: #fff;
    border-radius: 4px;
    padding: 0 32px 0 16px;
}

.search .input .tag {
    right: 5px;
    top: 50%;
    background-image: url('//img.aimoge.com/Fp5Fb_0YJWJASyYvqsDVGCrPXbvC');
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: center center;
    width: 24px;
    height: 24px;
    z-index: 300;
    margin-top: -12px;
}

.search .search-btn {
    width: 50px;
    height: 34px;
    line-height: 34px;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    margin-left: 16px;
}

 ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #999;
}

 :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #999;
}

 ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #999;
}

 :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #999;
}

.height_24 {
    height: 24px;
    line-height: 24px;
    position: absolute;
    background: #ececec;
    color: #606060;
    width: 100%;
    padding-left: 16px;
    left: 0;
    font-size: 16px;
}

.all {
    line-height: 56px;
    height: 56px;
    font-size: 16px;
    margin-top: 24px;
}

.all .text {
    font-size: 16px;
    color: #ef8b80;
    font-weight: 700;
    font-family: '黑体';
    background: url('//img.aimoge.com/FswDzMCJr7d3IrV5x5y9Nu1MzMQy') no-repeat right center;
    padding-right: 30px;
    background-size: 24px 24px;
}

.aw-r::after {
    border-top: 2px #ef8b80 solid;
    border-right: 2px #ef8b80 solid;
    top: 50%;
    margin-top: -6px;
}

.content .pos-loading {
    color: #000;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    margin-top: 24px;
}

.content .pos-loading .repos {
    right: 0px;
    top: 50%;
    height: 24px;
    line-height: 24px;
    padding-left: 30px;
    background-image: url(//img.aimoge.com/FuCPy6uTtcXC0CVP5n740M-ZIRps);
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: left center;
    font-size: 16px;
    color: #4285f4;
    margin-top: -12px;
}

.item {
    margin: 15px auto;
    font-size: 14px;
}

.item .icon {
    width: 18px;
    height: 18px;
    border: 1px solid #979797;
    border-radius: 3px;
}

.choice_icon {
    width: 10px;
    height: 5px;
    border-bottom: 2px solid #4788f4;
    border-left: 2px solid #4788f4;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    /* IE 9 */
    -moz-transform: rotate(-45deg);
    /* Firefox */
    -webkit-transform: rotate(-45deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(-45deg);
    margin-top: 3px;
    margin-left: 3px;
}

.item p {
    font-size: 14px;
    color: #4d4d4d;
    margin: 0px 12px;
}

.empty {
    font-size: 14px;
    text-align: center;
    color: #888;
    padding-top: 30px;
}

.pd_20 {
    padding-top: 20px;
}

.mg_20 {
    margin-top: -20px;
}
</style>
