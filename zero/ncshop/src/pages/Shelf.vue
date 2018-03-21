<style scoped>
.h-44 {
    height: 44px;
}

.left-box {
    height: 86vh;
    width: 76px;
    background-color: #fafafa;
    left: 0;
}

.left-box .l-item {
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #6e6e6e;
    font-weight: 600;
    box-sizing: border-box;
}

.left-box .l-item.active {
    background-color: #fff;
    color: #4285f4;
    font-weight: 800;
}

.solid {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 86%;
    height: 1px;
    background-color: #cfcfcf;
    transform: scale(1, 0.5);
    -ms-transform: scale(1, 0.5);
    /* IE 9 */
    -moz-transform: scale(1, 0.5);
    /* Firefox */
    -webkit-transform: scale(1, 0.5);
    /* Safari 和 Chrome */
    -o-transform: scale(1, 0.5);
    margin-left: -43%;
}

.done {
    display: none;
}

.footer-box {
    height: 46px;
    font-size: 14px;
    bottom: 0;
    width: 100%;
    color: #fff;
    background-color: #7f7f7f;
    z-index: 9001;
}

.footer-box .text {
    width: 70%;
    background: #7f7f7f;
    height: 44px;
    padding-left: 16px;
}

.payBtn {
    height: 46px;
    line-height: 46px;
    width: 30%;
    background: #4285f4;
    text-align: center;
}

.payBtn:active {
    background: rgba(246, 143, 30, .7);
}

.right-box {
    box-sizing: border-box;
    margin-left: 72px;
    width: 80%;
}

.right-box .r-item {
    width: 100%;
    padding: 12px;
    padding-left: 0;
    border-bottom: 1px solid #eee;
    margin-left: 12px;
}

.right-box .r-title {
    font-weight: 600;
    /* line-height: 16px; */
}
.r-item .item-text{
    width: 80%;
}
.right-box .image {
    width: 80px;
    height: 80px;
    margin-right: 12px;
}

.sub-btn {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('//img.aimoge.com/FmsMxSn5fi2lD2JzW8rduZCJEjMr') no-repeat center center;
    background-size: 24px 24px;
}

.sub-btn.disabled {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('//img.aimoge.com/FnjdXg5t2Wf6SbHYWzbF0Yl2kkjm') no-repeat center center;
    background-size: 24px 24px;
}

.add-btn {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('//img.aimoge.com/FmJguIVPewCgDoNUATtvGX5FT3SH') no-repeat center center;
    background-size: 24px 24px;
}

.footer-box .arrow-u {
    width: 28px;
    height: 12px;
    background: url('//img.aimoge.com/FvNVOJAiPd7Id5TSlmGhlQxyYljj') no-repeat center center;
    background-size: 100% 100%;
    margin-right: 10px;
}

.footer-box .arrow_d {
    width: 28px;
    height: 12px;
    background: url('//img.aimoge.com/Fr5AyPuj9A5P5wERiMXVXMoJyuST') no-repeat center center;
    background-size: 100% 100%;
    margin-right: 10px;
}

.f-18 {
    font-size: 18px;
    font-weight: 600;
}

.pd-46 {
    padding-bottom: 78px;
}

.footer-box .item-box {
    width: 100%;
    color: #323232;
    background-color: #fff;
    bottom: 44px;
    padding: 0 16px;
    box-sizing: border-box;
    z-index: 9001;
    display: none;
    max-height: 40vh;
    overflow: auto;
}

.footer-box .item-box .list-title {
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid #cfcfcf;
}

.footer-box .item-box .f-item {
    height: 36px;
}

.shelf-layer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    z-index: 8889;
    display: none;
}
.discount-price{
    font-size: 16px;
    color:#d75a48;
    font-weight: 600;
}
.del{
    text-decoration: line-through;
    text-decoration-color: #6e6e6e;
    color: #6e6e6e;
    margin-left: 2px;
}
.f10{
    font-size: 10px;
}
.mg-l-4{
    margin-left: 4px;
}
.mg-t-5{
    margin-top: -5px;
}
.my-swipe{
    height: 88px;
    width: 100%;
}
.my-swipe img{
    width: 100%;
}
.width-42{
    width: 42%;
}
.cart_icon{
    width: 32px;
    margin-top: 8px;
    margin-right: 16px;
}
.h-88{
    height: 88px;
}
.wish-box{
    width: 100%;
    padding-left: 76px;
    box-sizing: border-box;
    top:-38px;
    color: #6e6e6e;
    height: 38px;
    line-height: 38px;
}
.wish-box>div{
    background: #fffcd0;
    padding-left: 8%;
    box-sizing: border-box;
    text-align: center;
}
.wish-box .btn{
    background:#4285f4;
    color: #fff;
    text-align: center;
    padding: 4px 16px;
    border-radius: 4px;
    margin-left: 4%;
}
.wish-list-box{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 9002;
}
.wish-list-box .wish-content{
    width: 224px;
    height: 248px;
    padding: 6px 0;
    background: url('//img.aimoge.com/Fu4YkmysEekQTMmEDe953pF65O_3') no-repeat center center;
    background-size: 100%;
    top: 130px;
    left: 50%;
    margin-left: -112px;
}
.wish-list-box .wish-content p{
    border-bottom: 1px solid #b6b6b6;
    line-height: 28px;
    
}
.wish-list-box .wish-content div.abs,textarea{
    width: 70%;
    left: 50%;
    margin-left: -35%;
    top: 20%;
}
.wish-list-box .wish-content textarea{
    top: 22%;
    border: 0;
    resize: none;
    line-height: 28px;
    background-color: transparent;
    font-size: 12px;
}
.wish-list-box .submit-btn{
    background:#4285f4;
    color: #fff;
    text-align: center;
    padding: 3px 30px;
    border-radius: 4px;
    left: 50%;
    margin-left: -44px;
    bottom: 12%;
}
.wish-list-box .submit-btn:active{
    background: #6e6e6e;
}
.wish-list-box .close-btn{
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: -20%;
    background: url('//img.aimoge.com/FvNEN-kG4FwAD-gBsrwQX0PyMUmB') no-repeat center center;
    background-size: 80%;
    left: 50%;
    margin-left: -18px;    
}
.flex-direction-column{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}
</style>

<template>
    <div class="Shelf">
        <div class="shelf-layer" @click="isShow"></div>
        <div class="wish-list-box" v-if="wish_show">
            <div class="wish-content abs">
                <div class="abs">
                    <p>&nbsp</p>
                    <p>&nbsp</p>
                    <p>&nbsp</p>
                </div>
                <textarea cols="30" rows="4" class="abs" maxlength="42" v-model="wish_content"  placeholder="请填写您心仪的商品，我们会尽快对货架进行完善"></textarea>
                <span class="submit-btn abs" @click.prevent.stop="submitWish">提交</span>
                <div class="close-btn" @click.prevent.stop="showWish"></div>
            </div>            
        </div>
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @confirmCallback="gotoOrder"></HeaderBar>
        <div class="h-44"></div>
        <div class="my-swipe fixed" v-if="swipeInfo.length">
            <swipe>
                <swipe-item v-for="item in swipeInfo" :key="item._id">
                    <a :href="item.url">
                        <img :src="'//img.aimoge.com/'+item.image.substring(0,28)" :alt="item.name">
                    </a>
                </swipe-item>
            </swipe>
        </div>
        <div class="h-88" v-if="swipeInfo.length"></div>
        <div class="main  flex-g">
            <div class="left-box fixed">
                <div class="l-item f14 rel" v-for="(item,index) in floors" :key="index" :class="{active:activeTab==index}" @click="switchTab(index)">
                    <div>{{item.name}}</div>
                    <div class="solid" v-show="activeTab!=index" :class="{done:floors.length-1==index}"></div>
                </div>
            </div>
            <div class="right-box pd-46 flex-g flex-wrap">
                <div class="r-item flex-g" v-for="item in current_tradings" :key="item._id">
                    <div class="image">
                        <img :src="'//img.aimoge.com/'+item.trading.img.substring(0,28)+'/style220.png'" alt="">
                    </div>
                    <div class="flex-g flex-pack-justify item-text flex-direction-column">
                        <span class="r-title">{{item.trading.title}}</span>
                        <div class="flex-g flex-pack-justify flex-align-center">
                            <div v-if="item.trading.price-item.trading.discount_price!=0" class="">
                                <span class="discount-price"><span class="f10">￥</span>{{item.trading.discount_price/100}}</span>
                                <span :class="{del:item.trading.discount_price}" class="f12">￥{{item.trading.price/100}}</span>
                            </div>
                            <span  v-else>￥{{(item.trading.price)/100}}</span>
                            <div class="width-42 flex-g flex-pack-justify">
                                <span class="sub-btn" :class="{disabled:!item.cart_num}" @click="reduce(item)"></span>
                                <span>{{item.cart_num || 0}}</span>
                                <span class="add-btn" @click="add(item)"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-box fixed flex-g flex-pack-justify flex-align-center">
            <div class="wish-box abs">
                <div class="">
                    <span>未挑选到心仪的商品？</span>
                    <span class="btn f12" @click.prevent.stop="showWish">心愿单</span>
                </div>
            </div>
            <div class="abs item-box">
                <div class="list-title">
                    已选择商品({{num}})
                </div>
                <div class="f-item flex-g flex-pack-justify flex-align-center" v-for="item in shelf_carts" :key="item.id" v-if="item.cart_num!=0">
                    <span style="width:50%;font-weight:600">{{item.title}}</span>
                    <span style="width:24%" v-if="item.price-item.discount_price!=0">
                        <span class="discount-price"><span class="f10">￥</span>{{item.discount_price/100}}</span>
                        <span class="del f10 mg-l-4">￥{{item.price/100}}</span>
                    </span>
                    <span style="width:24%" v-else>￥{{item.price/100}}</span>
                    <span style="width:20%;color:red" v-if="false">库存不足</span>
                    <span style="width:10%" class="sub-btn" :class="{disabled:item.cart_num==0}" @click="cart_reduce(item.trading_id)"></span>
                    <span style="width:6%;text-align:center;">{{item.cart_num || 0}}</span>
                    <span style="width:10%" class="add-btn" @click="cart_add(item.trading_id)"></span>
                </div>
            </div>

            <div class="text flex-g">
                <div class="cart_icon">
                    <img src="//img.aimoge.com/FhL5hSwXOEOiPGaK6XI5ft_kZj7v" alt="">
                </div>
                <div style="margin-top:5px">
                    <p style="font-weight:600">合计:&nbsp&nbsp&nbsp{{(total-(total-discount))/100}}&nbsp&nbsp元</p>
                    <p class="f12 mg-t-5" v-if="total-discount!=0">已优惠:&nbsp&nbsp{{(total-discount)/100}}&nbsp&nbsp元</p>
                </div>
            </div>
            <div class="arrow-u" @click="isShow" :class="{arrow_d:show}"></div>
            <div class="payBtn" @click="goPay">去支付</div>
        </div>
    </div>
</template>

<script>
import {Swipe,SwipeItem} from '../components/swipe'
import HeaderBar from '../components/Header'
export default {
    mixins: [require('../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: (window.ncshop_config && window.ncshop_config.ncshelf_name) || '格格+便利中心',
            bodyBg: 'white',
            btnconfig: {
                isgoback: 0,
                isorder: 1
            },
            shelf_code: '',
            activeTab: 0,
            shelf: null,
            floors: [],
            floor_tradings: {},
            current_tradings: [],
            floor_carts: {},
            floor_pages: {},
            shelf_carts: [],
            total: 0,
            num: 0,
            discount:0,
            show: false,
            shelf_loaded: false,
            floors_loaded: false,
            cart_loaded: false,
            scroll_load_loading: false,
            scroll_load_end: false,
            swipeInfo:[],
            wish_content:'',
            wish_show:false
        }
    },
    components: {
        HeaderBar,
        swipe:Swipe,
        swipeItem:SwipeItem
    },
    computed: {

    },
    created() {
    },
    mounted() {
        this.clearData();
        this.getInfo();
        $(document).on("scroll",this.handleScroll);
    },
    beforeRouteLeave: (to, from, next) => {
        $(document).off("scroll",this.handleScroll);
        next();
    },
    methods: {
        getTotal() {
            this.total = 0;
            this.num = 0;
            this.discount=0;
            for (var i = 0; i < this.shelf_carts.length; i++) {
                this.total += this.shelf_carts[i].cart_num * this.shelf_carts[i].price;
                this.num += this.shelf_carts[i].cart_num;
                this.discount+=this.shelf_carts[i].cart_num * this.shelf_carts[i].discount_price;
            }
        },
        getInfo() {
            $('#sysLoading').show();

            this.shelf_code = this.$route.query.shelf_code;
            let data = JSON.parse(localStorage.getItem("ncshelf_cart")) || {};
            if ((new Date()).getTime() - (data.ts || 0) <= 24 * 60 * 60 * 1000 && data.shelf_code == this.shelf_code) {
                this.shelf_carts = data.goodses || [];
                for (var i = 0; i < this.shelf_carts.length; i++) {
                    this.loadCart(this.shelf_carts[i]);
                }
            } else {
                localStorage.setItem("ncshelf_cart", '{}');
            }
            if (!this.shelf_carts.length) {
                this.cart_loaded = true;
            }
            this.loadShelf();
            this.loadFloor();
            this.getSwipeInfo();
        },
        loadCart(item) {
            let that = this;
            function check() {
                for (var i = 0; i < that.shelf_carts.length; i++) {
                    if (!that.shelf_carts[i].loaded) {
                        return
                    }
                }
                that.cart_loaded = true;
                var shelf_carts = [];
                for (var i = 0; i < that.shelf_carts.length; i++) {
                    if (that.shelf_carts[i].loaded && that.shelf_carts[i].trading) {
                        shelf_carts.push(that.shelf_carts[i]);
                    }
                }
                that.shelf_carts = shelf_carts;

                if (that.cart_loaded && that.shelf_loaded && that.floors_loaded) {
                    that.loaded();
                }
            }

            axios.get(window.config.API + '/ncshop/shelf/floor/trading/' + item.trading_id + '?shelf_code=' + that.shelf_code)
                .then(function(res) {
                    if (res.data.status == 0) {
                        if (item.cart_num > ((res.data.data.trading.num - res.data.data.trading.sale_num))) {
                            let diff = res.data.data.trading.num - res.data.data.trading.sale_num;
                            if (diff) {
                                item.cart_num = diff;
                            } else {
                                item.cart_num = item.cart_num;
                                item.lack = true;
                            }
                        }
                        item.title = res.data.data.trading.trading.title;
                        item.price = res.data.data.trading.trading.price;
                        item.discount_price=res.data.data.trading.trading.discount_price;
                        item.trading = res.data.data.trading;
                    }

                    item.loaded = true;
                    check();
                }).catch(function(err) {
                    item.loaded = true;
                    check();
                });
        },
        loadShelf() {
            let that = this;
            //获取货架信息
            axios.get('/ncshop/shelf?shelf_code=' + that.shelf_code)
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.shelf = res.data.data.shelf;
                    }
                    that.shelf_loaded = true;
                    if (that.cart_loaded && that.shelf_loaded && that.floors_loaded) {
                        that.loaded();
                    }
                }).catch(function(err) {
                    that.shelf_loaded = true;
                    if (that.cart_loaded && that.shelf_loaded && that.floors_loaded) {
                        that.loaded();
                    }
                });
        },
        loadFloor() {
            let that = this;
            //获取货架层列表
            axios.get('/ncshop/shelf/floor?shelf_code=' + that.shelf_code)
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.floors = res.data.data.floors;
                    }
                    that.floors_loaded = true;
                    if (that.cart_loaded && that.shelf_loaded && that.floors_loaded) {
                        that.loaded();
                    }
                }).catch(function(err) {
                    that.floors_loaded = true;
                    if (that.cart_loaded && that.shelf_loaded && that.floors_loaded) {
                        that.loaded();
                    }
                })
        },
        loaded() {
            let that = this;
            if (!that.shelf) {
                _util.showErrorTip('货架错误');
                return
            }

            if (!that.floors) {
                _util.showErrorTip('无层');
                return
            }
            this.getTotal();
            this.setLocalData();
            this.switchTab(0);
            $('#sysLoading').hide();
        },
        switchTab(index) {
            this.activeTab = index;
            this.clearData();
            this.getData(this.floors[this.activeTab].id);
        },
        update_trading_cart_num(trading, cart_num) {
            for (var fi = 0; fi < this.floors.length; fi++) {
                var current_tradings = this.floor_tradings[this.floors[fi].id] || [];
                for (var i = 0; i < current_tradings.length; i++) {
                    if (current_tradings[i].trading_id == trading.trading_id) {
                        current_tradings[i].cart_num = (current_tradings[i].cart_num || 0) + cart_num;
                    }
                }
            }
        },
        add(item) {
            var cart = false;
            var trading = item;
            for (var i = 0; i < this.shelf_carts.length; i++) {
                if (this.shelf_carts[i].trading_id == item.trading_id) {
                    cart = this.shelf_carts[i];
                    trading = cart.trading;
                    break;
                }
            }

            if (true||(cart ? cart.cart_num || 0 : 0) < (trading.num - trading.sale_num)) {
                this.update_trading_cart_num(item, 1);
                if (cart) {
                    cart.cart_num++;
                }
                else {
                    this.shelf_carts.push({
                        "trading_id": item.trading_id,
                        "cart_num": 1,
                        "price": item.trading.price,
                        "discount_price":item.trading.discount_price,
                        'title': item.trading.title,
                        "trading": item
                    });
                }
                this.getTotal();
                this.setLocalData();
            } else {
                _util.showErrorTip('抱歉库存不足了');
                return false;
            }
        },
        reduce(item) {
            var cart = false;
            for (var i = 0; i < this.shelf_carts.length; i++) {
                if (this.shelf_carts[i].trading_id == item.trading_id) {
                    cart = this.shelf_carts[i];
                    break;
                }
            }

            if (cart && (cart.cart_num || 0) > 0) {
                this.update_trading_cart_num(item, -1);
                if (cart.cart_num == 1) {
                    var shelf_carts = [];
                    for (var i = 0; i < this.shelf_carts.length; i++) {
                        if (this.shelf_carts[i].trading_id != item.trading_id) {
                            shelf_carts.push(this.shelf_carts[i]);
                        }
                    }
                    this.shelf_carts = shelf_carts;
                } else {
                    cart.cart_num--;
                }
                this.getTotal();
                this.setLocalData();
            } else {
                _util.showErrorTip('已经没有了不要再减了!');
                return false;
            }
        },
        cart_add(trading_id) {
            for (var i = 0; i < this.shelf_carts.length; i++) {
                if (this.shelf_carts[i].trading_id == trading_id && this.shelf_carts[i].trading) {
                    this.add(this.shelf_carts[i].trading);
                }
            }
        },
        cart_reduce(trading_id) {
            for (var i = 0; i < this.shelf_carts.length; i++) {
                if (this.shelf_carts[i].trading_id == trading_id && this.shelf_carts[i].trading) {
                    this.reduce(this.shelf_carts[i].trading);
                }
            }
        },
        isShow() {
            if (this.show) {
                $('.shelf-layer').hide();
                $('.item-box').hide();
                $('body').css({ 'overflow': 'visible' });
                this.show = false;
            } else {
                document.body.scrollTop = 0;
                $('.shelf-layer').show();
                $('.item-box').show();
                $('body').css({ 'overflow': 'hidden' });
                this.show = true
            }
        },
        getData(floor_id, load_next_page) {
            let that = this;
            if (that.floor_tradings[floor_id] && !load_next_page) {
                that.current_tradings = that.floor_tradings[floor_id];
                return;
            }
            if (that.scroll_load_loading) {
                return false;
            }
            if (that.scroll_load_end) {
                return false;
            }
            if (!that.floor_pages[floor_id]) {
                that.floor_pages[floor_id] = {
                    "current_page": '',
                    "pages": []
                };
            }

            var floor_page = that.floor_pages[floor_id] || {};
            that.scroll_load_loading = true;
            axios.get('/ncshop/shelf/floor/trading?shelf_code=' + that.shelf_code + '&floor_id=' + floor_id + "&cursor=" + (floor_page["current_page"] || ''))
                .then(function(res) {
                    that.scroll_load_loading = false;
                    if (res.data.status == 0) {
                        if(!res.data.data.floor_tradings.length){
                            that.scroll_load_end=true;
                        }
                        if (floor_page["pages"].indexOf(floor_page["current_page"] || '') >= 0) {
                            return;
                        }

                        floor_page["pages"].push(floor_page["current_page"] || '');
                        floor_page["current_page"] = res.data.data.next_cursor;

                        if (!that.floor_tradings[floor_id]) {
                            that.floor_tradings[floor_id] = [];
                            that.floor_carts[floor_id] = {};
                        }
                        that.floor_tradings[floor_id] = that.floor_tradings[floor_id].concat(res.data.data.floor_tradings);
                        that.current_tradings = that.floor_tradings[floor_id];
                        for (var i = 0; i < that.current_tradings.length; i++) {
                            for (var j = 0; j < that.shelf_carts.length; j++) {
                                if (that.shelf_carts[j].trading_id == that.current_tradings[i].trading_id) {
                                    that.current_tradings[i].cart_num = that.shelf_carts[j].cart_num;
                                    that.floor_carts[floor_id][that.current_tradings[i].trading_id] = that.current_tradings[i];
                                }
                            }
                        }
                    } else {
                        _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        setLocalData() {
            var goodses = [];
            for (var i = 0; i < this.shelf_carts.length; i++) {
                goodses.push({
                    "trading_id": this.shelf_carts[i].trading_id,
                    "cart_num": this.shelf_carts[i].cart_num,
                    "price": this.shelf_carts[i].price,
                    "discount_price":this.shelf_carts[i].discount_price
                });
            }
            let data = {
                'shelf_code': this.shelf_code,
                'total': this.total,
                'goodses': goodses,
                'ts': (new Date()).getTime()
            };
            localStorage.setItem("ncshelf_cart", JSON.stringify(data));
        },
        goPay() {
            this.setLocalData();
            if (!this.shelf_carts.length) {
                _util.showErrorTip('请选择商品');
                return false;
            } else {
                this.url('/ncshop/shelf/pay');
            }
        },
        gotoOrder() {
            this.url('/ncshop/shelf/order');
        },
        clearData() {
            this.scroll_load_loading = false;
            this.scroll_load_end = false;
        },
        handleScroll() {
            if (this.$route.path == ('/ncshop/shelf')&&this.current_tradings.length>4) {
                if (($(document).scrollTop()+ window.innerHeight) >= document.body.scrollHeight - 1) {
                    let floor_id = this.floors[this.activeTab].id,
                        load_next_page = this.floor_pages[floor_id];
                    this.getData(floor_id, load_next_page);
                }
            }
        },
        showWish(){
            this.wish_show=!this.wish_show;
        },
        submitWish(){
            if(!this.wish_content){
                _util.showErrorTip('请输入您的心愿');
                return false;
            }
            this.wish_show=false;
            let params={
                shelf_code:this.shelf_code,
                content:this.wish_content
            };
            let that=this;
            axios.post(window.config.API + '/ncshop/shelf/wish/list', params)
                .then(function(res) {
                    if (res.data.status == 0) {
                       that.wish_content='';
                    } else {
                        _util.showErrorTip(res.data.msg);
                    }
                }).catch(function(err) {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
        },
        getSwipeInfo(){
            let params={
                place:'home',
                dot_id:window.dot_id,
                shelf_code:this.shelf_code
            },
            that=this;
            axios.get(window.config.API + '/ncshop/shelf/banner?place=' + params.place +'&dot_id='+params.dot_id+ '&shelf_code=' + params.shelf_code)
                .then(function(res) {
                    if(res.data.status==0){
                        that.swipeInfo=res.data.data.banners;
                        that.swipeInfo=that.swipeInfo.reverse();
                    }
                }).catch(function(err) {
                    _util.showErrorTip(err.msg||'');
                });
        }
    }
}
</script>