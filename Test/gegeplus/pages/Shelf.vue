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
    line-height: 44px;
    padding-left: 10px;
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
    padding: 12px;
    box-sizing: border-box;
    margin-left: 72px;
    width: 80%;
}

.right-box .r-item {
    width: 50%;
    text-align: center;
    float: left;
    height: 160px;
    box-sizing: border-box;
}

.right-box .r-title {
    font-weight: 600;
    /* line-height: 16px; */
}

.right-box .image {
    width: 80px;
    height: 80px;
    margin: 0 auto;
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
    padding-bottom: 46px;
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
    line-height: 36px;
    border-bottom: 1px solid #cfcfcf;
}

.footer-box .item-box .f-item {
    height: 36px;
}

.shelf-layer {
    position: absolute;
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
}
.del{
    text-decoration: line-through ;
    text-decoration-color: #d75a48;
    line-height: 2px;
}
.f10{
    font-size: 10px;
}
.mg-t-4{
    margin-top: -4px;
}
</style>

<template>
    <div class="Shelf">
        <div class="shelf-layer" @click="isShow"></div>
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @confirmCallback="gotoOrder"></HeaderBar>
        <div class="h-44"></div>
        <div class="main  flex-g">
            <div class="left-box fixed">
                <div class="l-item f14 rel" v-for="(item,index) in floors" :key="index" :class="{active:activeTab==index}" @click="switchTab(index)">
                    <div>{{item.name}}</div>
                    <div class="solid" v-show="activeTab!=index" :class="{done:floors.length-1==index}"></div>
                </div>
            </div>
            <div class="right-box pd-46 clearfix">
                <div class="r-item" v-for="item in current_tradings" :key="item._id">
                    <div class="image">
                        <img :src="'//img.aimoge.com/'+item.trading.img.substring(0,28)+'/style220.png'" alt="">
                    </div>
                    <span class="r-title">{{item.trading.title}}</span>
                    <div class="flex-g flex-pack-around">
                        <div v-if="item.trading.discount_price" class="mg-t-4">
                            <p class="discount-price"><span class="f10">￥</span>{{item.trading.discount_price/100}}</p>
                            <p :class="{del:item.trading.discount_price}" class="f12">￥{{item.trading.price/100}}</p>
                        </div>
                        <span  v-else>￥{{(item.trading.price)/100}}</span>
                        <span class="sub-btn" :class="{disabled:!item.cart_num}" @click="reduce(item)"></span>
                        <span>{{item.cart_num || 0}}</span>
                        <span class="add-btn" @click="add(item)"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-box fixed flex-g flex-pack-justify flex-align-center">
            <div class="abs item-box">
                <div class="list-title">
                    已选择商品({{num}})
                </div>
                <div class="f-item flex-g flex-pack-justify flex-align-center" v-for="item in shelf_carts" :key="item.id" v-if="item.cart_num!=0">
                    <span style="width:50%">{{item.title}}</span>
                    <span style="width:20%" v-if="!item.lack">￥{{item.price/100}}</span>
                    <span style="width:20%;color:red" v-if="item.lack">库存不足</span>
                    <span style="width:10%" class="sub-btn" :class="{disabled:item.cart_num==0}" @click="cart_reduce(item.trading_id)"></span>
                    <span style="width:10%;text-align:center;">{{item.cart_num || 0}}</span>
                    <span style="width:10%" class="add-btn" @click="cart_add(item.trading_id)"></span>
                </div>
            </div>

            <div class="text">合计：￥
                <span class="f-18">{{total/100}}</span>
            </div>
            <div class="arrow-u" @click="isShow" :class="{arrow_d:show}"></div>
            <div class="payBtn" @click="goPay">去支付</div>
        </div>
    </div>
</template>

<script>
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
            show: false,
            shelf_loaded: false,
            floors_loaded: false,
            cart_loaded: false,
            scroll_load_loading: false,
            scroll_load_end: false,
        }
    },
    components: {
        HeaderBar,
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
            for (var i = 0; i < this.shelf_carts.length; i++) {
                this.total += this.shelf_carts[i].cart_num * this.shelf_carts[i].price;
                this.num += this.shelf_carts[i].cart_num;
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
                        item.price = res.data.data.trading.trading.discount_price || res.data.data.trading.trading.price;
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

            if ((cart ? cart.cart_num || 0 : 0) < (trading.num - trading.sale_num)) {
                this.update_trading_cart_num(item, 1);
                if (cart) {
                    cart.cart_num++;
                }
                else {
                    this.shelf_carts.push({
                        "trading_id": item.trading_id,
                        "cart_num": 1,
                        "price": item.trading.discount_price || item.trading.price,
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
                    "price": this.shelf_carts[i].price
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
            if (this.$route.path == ('/ncshop/shelf')&&this.current_tradings.length>5) {
                if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    let floor_id = this.floors[this.activeTab].id,
                        load_next_page = this.floor_pages[floor_id];
                    this.getData(floor_id, load_next_page);
                }
            }
        }
    }
}
</script>