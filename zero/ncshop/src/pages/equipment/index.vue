<style scoped>
.equipment-page .gege-header{
    background-color: #be6835;
}
.equipment-page  .h-184 {
    height: 184px;
}
.equipment-page .prompt-msg{
    height: 26px;
    background-color: #fadaa5;
    color: #4a4a4a;
    width: 100%;
    left: 0;
    top: 44px;
    text-align: center;
    font-size: 12px;
}
.equipment-page .banner-box{
    height: 88px;
    padding: 16px;
    width: 100%;
    background-color: #fff5ed;
    top: 64px;
    left: 0;
    text-align: center;
}
.equipment-page  .left-box {
    height: 86vh;
    width: 76px;
    background-color: #fafafa;
    left: 0;
}

.equipment-page  .left-box .l-item {
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #6e6e6e;
    font-weight: 600;
    box-sizing: border-box;
}

.equipment-page  .left-box .l-item.active {
    background-color: #fff;
    color: #5c2307;
    font-weight: 800;
}

.equipment-page  .solid {
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

.equipment-page  .done {
    display: none;
}

.equipment-page  .footer-box {
    height: 46px;
    font-size: 14px;
    bottom: 0;
    width: 100%;
    color: #be6835;
    background-color: #fff5ed;
    z-index: 9001;
}

.equipment-page .footer-box .text {
    width: 70%;
    background: #fff5ed;
    height: 44px;
    padding-left: 16px;
}

.equipment-page  .payBtn {
    height: 46px;
    line-height: 46px;
    width: 30%;
    background: #be6835;
    text-align: center;
    color: #ffffff;
}

.equipment-page  .payBtn:active {
    background: rgba(70, 180, 253, 0.7);
}

.equipment-page .right-box {
    box-sizing: border-box;
    margin-left: 72px;
    width: 80%;
}

.equipment-page  .right-box .r-item {
    width: 100%;
    padding: 12px;
    padding-left: 0;
    border-bottom: 1px solid #eee;
    margin-left: 12px;
}

.equipment-page  .right-box .r-title {
    font-weight: 600;
    /* line-height: 16px; */
}
.equipment-page  .r-item .item-text{
    width: 80%;
}
.equipment-page  .right-box .image {
    width: 80px;
    height: 80px;
    margin-right: 12px;
}

.equipment-page  .sub-btn {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('//img.aimoge.com/Fp2jlb8MeF8aW7bRaIwhl3eo9q5u') no-repeat center center;
    background-size: 24px 24px;
}

.equipment-page  .sub-btn.disabled {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('//img.aimoge.com/FnjdXg5t2Wf6SbHYWzbF0Yl2kkjm') no-repeat center center;
    background-size: 24px 24px;
}

.equipment-page .add-btn {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url('//img.aimoge.com/Ft14YX-OYI52UQ5dGhQhdOIulBI-') no-repeat center center;
    background-size: 24px 24px;
}

.equipment-page  .footer-box .arrow-u {
    width: 28px;
    height: 28px;
    background: url('//img.aimoge.com/FvLlfM_GJSHMNfyTARXG82wIQ0yF') no-repeat center center;
    margin-right: 10px;
}

.equipment-page .footer-box .arrow-d {
    width: 28px;
    height: 28px;
    background: url('//img.aimoge.com/FrESP-mBiFDXZ4c5u2EHYIGbO9JN') no-repeat center center;
    margin-right: 10px;
}

.equipment-page .f-18 {
    font-size: 18px;
    font-weight: 600;
}

.equipment-page .pd-46 {
    padding-bottom: 78px;
}

.equipment-page  .footer-box .item-box {
    width: 100%;
    color: #323232;
    background-color: #fff5ed;
    bottom: 44px;
    padding: 0 16px;
    box-sizing: border-box;
    z-index: 9001;
    display: none;
    max-height: 40vh;
    overflow: auto;
    border-bottom: 1px solid #be6835;
}

.equipment-page .footer-box .item-box .list-title {
    font-size: 14px;
    line-height: 40px;
    
}
.equipment-page .footer-box .item-box .title-solid{
    border-bottom: 1px solid #be6835;
}
.equipment-page .footer-box .item-box .f-item {
    height: 36px;
}

.equipment-page .shelf-layer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(122, 122, 122, .7);
    z-index: 8889;
    display: none;
}
.equipment-page .discount-price{
    font-size: 16px;
    color:#d75a48;
    font-weight: 600;
}
.equipment-page .del{
    text-decoration: line-through;
    text-decoration-color: #6e6e6e;
    color: #6e6e6e;
    margin-left: 2px;
}
.equipment-page .f10{
    font-size: 10px;
}
.equipment-page .mg-l-4{
    margin-left: 4px;
}
.equipment-page .mg-t-5{
    margin-top: -5px;
}
.equipment-page .width-50{
    width: 50%;
}
.equipment-page .cart-icon{
    width: 32px;
    margin-top: 8px;
    margin-right: 16px;
}
.equipment-page .link-box{
    right: 5%;
    top: -36px;
}
.equipment-page .link-box a{
    text-decoration: underline;
    color: #be6835;
}
.c-coffee {
  color: #be6835;
}
.equipment-page .f-weight{
    font-weight: 600;
}
.equipment-page .mgLoadingWarp{
    display: block;
}
.equipment-page .mgLoadingWarp i{
    margin-left: -54px;
}
.flex-direction-column{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}
</style>

<template>
    <div class="equipment-page">
        <div class="shelf-layer" @click="isShow"></div>
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @confirmCallback="gotoOrder"></HeaderBar>
        <div class="prompt-msg fixed">兑换码有效期15天，过期将自动退款</div>
        <div class="banner-box fixed">
            <img src="//img.aimoge.com/Fg8A6M9DPo25_t0iUtCQXpce6nsR" alt="qudian-baner">
        </div>
        <div class="h-184"></div>
        <div class="main  flex-g">
            <div class="left-box fixed">
                <div class="l-item f14 rel" v-for="(item,index) in categorys" :key="index" :class="{active:activeTab==index}" @click="switchTab(index)">
                    <div>{{item.name}}</div>
                    <div class="solid" v-show="activeTab!=index" :class="{done:categorys.length-1==index}"></div>
                </div>
            </div>
            <div class="right-box pd-46 flex-g flex-wrap">
                <div class="r-item flex-g" v-for="item in current_tradings" :key="item._id">
                    <div class="image">
                        <img :src="'//img.aimoge.com/'+item.image.substring(0,28)" alt="icon">
                    </div>
                    <div class="flex-g flex-pack-justify item-text flex-direction-column">
                        <div>
                            <span class="r-title">{{item.title}}</span>
                            <div v-if="item.price-item.discount_price!=0">
                                <span class="discount-price"><span class="f10 c-coffee">￥</span>{{item.discount_price/100}}</span>
                                <span :class="{del:item.discount_price}" class="f12">￥{{item.price/100}}</span>
                            </div>
                            <span  v-else class="c-coffee f-weight">￥{{(item.price)/100}}</span>
                        </div>
                        <div class="flex-g flex-pack-justify flex-align-center">
                            <div class="width-50 flex-g flex-pack-justify">
                                <span class="sub-btn" :class="{disabled:!item.cart_num}" @click="reduce(item)"></span>
                                <span>{{item.cart_num || 0}}</span>
                                <span class="add-btn" @click="add(item)"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mgLoadingWarp" class="mgLoadingWarp rel" v-show="scroll_load_end||scroll_load_loading">
                    <span><i class="icon ion-loading-c rel" v-if="scroll_load_loading"></i>{{load_msg}}</span>
                </div>
            </div>
        </div>

        <div class="footer-box fixed flex-g flex-pack-justify flex-align-center">
            <div class="abs link-box">
                <router-link to="/ncshop/equipment/coffee/extraction">
                    查看提取方式
                </router-link>
            </div>
            <div class="abs item-box">
                <div class="list-title" :class="{'title-solid':store_carts.length}">
                    已选择商品({{trade.num}})
                </div>
                <div class="f-item flex-g flex-pack-justify flex-align-center" v-for="item in store_carts" :key="item.id" v-if="item.cart_num!=0">
                    <span style="width:50%;font-weight:600">{{item.title}}</span>
                    <span style="width:24%" v-if="item.price-item.discount_price!=0">
                        <span class="discount-price"><span class="f10">￥</span>{{item.discount_price/100}}</span>
                        <span class="del f10 mg-l-4">￥{{item.price/100}}</span>
                    </span>
                    <span style="width:24%" v-else>￥{{item.price/100}}</span>
                    <span style="width:10%" class="sub-btn" :class="{disabled:item.cart_num==0}" @click="cart_reduce(item.trading_id)"></span>
                    <span style="width:6%;text-align:center;">{{item.cart_num || 0}}</span>
                    <span style="width:10%" class="add-btn" @click="cart_add(item.trading_id)"></span>
                </div>
            </div>
            <div class="text flex-g">
                <div class="cart-icon">
                    <img src="//img.aimoge.com/Frlu4PNQ0lX7m0zNuHEKtuyySGyo" alt="cart-icon">
                </div>
                <div style="margin-top:5px">
                    <p style="font-weight:600">合计:&nbsp&nbsp&nbsp{{(trade.total)/100}}&nbsp&nbsp元</p>
                    <!-- <p class="f12 mg-t-5" v-if="total-discount!=0">已优惠:&nbsp&nbsp{{(total-discount)/100}}&nbsp&nbsp元</p> -->
                </div>
            </div>
            <div class="arrow-u" @click="isShow" :class="{'arrow-d':show}"></div>
            <div class="payBtn" @click="goPay">去支付</div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../../components/Header'
export default {
    mixins: [require('../../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: '趣点咖啡商城',
            bodyBg: 'white',
            btnconfig: {
                isgoback: 0,
                isorder: 1
            },
            dot_id: '',
            activeTab: 0,
            scroll_load_loading: false,
            scroll_load_end: false,
            categorys:[],
            category_tradings:{},
            current_tradings: [],
            category_pages:{},
            trade:{
                num:0,
                total: 0,
                discount:0,
            },
            show: false,
            category_carts:{},
            store_carts:[],
            cart_loaded:false,
            category_loaded:false,
            load_msg:'加载中...'
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
        this.getInfo();
        $(document).on("scroll",this.handleScroll);
    },
    beforeRouteLeave: (to, from, next) => {
        $(document).off("scroll",this.handleScroll);
        next();
    },
    methods: {
        getInfo(){
            $('#sysLoading').show();
            this.dot_id=this.$route.query.dot_id;
            let data = JSON.parse(localStorage.getItem("ncstore_cart")) || {};
            if ((new Date()).getTime() - (data.ts || 0) <= 24 * 60 * 60 * 1000 && data.dot_id == this.dot_id) {
                this.store_carts = data.goodses || [];
                for (var i = 0; i < this.store_carts.length; i++) {
                    this.loadCart(this.store_carts[i]);
                }
            } else {
                localStorage.setItem("ncstore_cart", '{}');
            }
            if (!this.store_carts.length) {
                this.cart_loaded = true;
            }
            this.loadCategory();
        },
        loadCategory() {  //获取咖啡机商品分类
            let that = this;
            this.dot_id=this.$route.query.dot_id;
            axios.get('/ncshop/equipment/category?dot_id=2')
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.categorys = res.data.data.categorys;
                    }
                    that.category_loaded = true;
                    if (that.cart_loaded && that.category_loaded) {
                        that.loaded();
                    }
                }).catch(function(err) {
                    that.category_loaded = true;
                    if (that.cart_loaded && that.category_loaded) {
                        that.loaded();
                    }
                });  
        },
        loadGoodlist(category_id,load_next_page){//获取商品列表
            let that = this;
            if (that.category_tradings[category_id] && !load_next_page) {
                that.current_tradings = that.category_tradings[category_id];
                return;
            }
            if (that.scroll_load_loading) {
                return false;
            }
            if (that.scroll_load_end) {
                return false;
            }
            if (!that.category_pages[category_id]) {
                that.category_pages[category_id] = {
                    "current_page": '',
                    "pages": []
                };
            }

            let category_page = that.category_pages[category_id] || {};
            that.scroll_load_loading = true;
            axios.get('/ncshop/equipment/trading?dot_id='+that.dot_id+'&category_id='+category_id+"&cursor=" + (category_page["current_page"] || ''))
                .then(function(res) {
                    if (res.data.status == 0) {
                        that.scroll_load_loading = false;
                        let data=res.data.data;
                        if(!data.tradings.length&&category_page["pages"].length){
                            that.load_msg='没用更多了...'
                            that.scroll_load_end=true;
                        }
                        if (category_page["pages"].indexOf(category_page["current_page"] || '') >= 0) {
                            return;
                        }
                        category_page["pages"].push(category_page["current_page"] || '');
                        category_page["current_page"] = data.next_cursor;
                        if (!that.category_tradings[category_id]) {
                            that.category_tradings[category_id] = [];
                            that.category_carts[category_id] = {};
                        }
                        that.category_tradings[category_id]=that.category_tradings[category_id].concat(data.tradings);
                        that.current_tradings=that.category_tradings[category_id];
                        for (var i = 0; i < that.current_tradings.length; i++) {
                            for (var j = 0; j < that.store_carts.length; j++) {
                                if (that.store_carts[j].trading_id == that.current_tradings[i]._id) {
                                    that.current_tradings[i].cart_num = that.store_carts[j].cart_num;
                                    that.category_carts[category_id][that.current_tradings[i]._id] = that.current_tradings[i];
                                }
                            }
                        }
                    }
                }).catch(function(err) {
                    console.log(err);
                    that.scroll_load_loading = false;
                    _util.showErrorTip('您的网络可能出了点问题:(');                 
                });
        },
        loadCart(item) {//获取购物车的商品
            let that = this;
            function check() {
                for (var i = 0; i < that.store_carts.length; i++) {
                    if (!that.store_carts[i].loaded) {
                        return
                    }
                }
                that.cart_loaded = true;
                var store_carts = [];
                for (var i = 0; i < that.store_carts.length; i++) {
                    if (that.store_carts[i].loaded && that.store_carts[i].trading) {
                        store_carts.push(that.store_carts[i]);
                    }
                }
                that.store_carts = store_carts;

                if (that.cart_loaded && that.category_loaded) {
                    that.loaded();
                }
            }

            axios.get(window.config.API + '/ncshop/equipment/trading/' + item.trading_id + '?dot_id=' + that.dot_id)
                .then(function(res) {
                    if (res.data.status == 0) {
                        let data=res.data.data.trading;
                        item.title = data.title;
                        item.price = data.price;
                        item.discount_price=data.discount_price;
                        item.trading = data;
                    }
                    item.loaded = true;
                    check();
                }).catch(function(err) {
                    item.loaded = true;
                    check();
                });
        },
        update_trading_cart_num(trading, cart_num){
            for (var fi = 0; fi < this.categorys.length; fi++) {
                var current_tradings = this.category_tradings[this.categorys[fi]['_id']] || [];
                for (var i = 0; i < current_tradings.length; i++) {
                    if (current_tradings[i]._id == trading._id) {
                        current_tradings[i].cart_num = (current_tradings[i].cart_num || 0) + cart_num;
                    }
                }
            }
        },
        loaded() {
            this.getTotal();
            this.setLocalData();
            this.switchTab(0);
            $('#sysLoading').hide();
        },
        switchTab(index) {
            this.activeTab = index;
            this.clearData();
            this.loadGoodlist(this.categorys[index]._id);
        },
        getTotal() {
            this.trade.total = 0;
            this.trade.num = 0;
            this.trade.discount=0;
            for (var i = 0; i < this.store_carts.length; i++) {
                this.trade.total += this.store_carts[i].cart_num * this.store_carts[i].price;
                this.trade.num += this.store_carts[i].cart_num;
                this.trade.discount+=this.store_carts[i].cart_num * this.store_carts[i].discount_price;
            }
        },
        add(item) {
            var cart = null;
            for (var i = 0; i < this.store_carts.length; i++) {
                if (this.store_carts[i].trading_id == item._id) {
                    cart = this.store_carts[i];
                    break;
                }
            }

            if (item._id) {
                this.update_trading_cart_num(item, 1);
                if (cart) {
                    cart.cart_num++;
                }
                else {
                    this.store_carts.push({
                        "trading_id": item._id,
                        "cart_num": 1,
                        "price": item.price,
                        "discount_price":item.discount_price,
                        'title': item.title,
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
            var cart = null;
            for (var i = 0; i < this.store_carts.length; i++) {
                if (this.store_carts[i].trading_id == item._id) {
                    cart = this.store_carts[i];
                    break;
                }
            }
            if (cart) {
                this.update_trading_cart_num(item, -1);
                if (cart.cart_num == 1) {
                    var store_carts = [];
                    for (var i = 0; i < this.store_carts.length; i++) {
                        if (this.store_carts[i].trading_id != item._id) {
                            store_carts.push(this.store_carts[i]);
                        }
                    }
                    this.store_carts = store_carts;
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
            for (var i = 0; i < this.store_carts.length; i++) {
                if (this.store_carts[i].trading_id == trading_id && this.store_carts[i].trading) {
                    this.add(this.store_carts[i].trading);
                }
            }
        },
        cart_reduce(trading_id) {
            for (var i = 0; i < this.store_carts.length; i++) {
                if (this.store_carts[i].trading_id == trading_id && this.store_carts[i].trading) {
                    this.reduce(this.store_carts[i].trading);
                }
            }
        },
        setLocalData() {
            let goodses = [];
            for (var i = 0; i < this.store_carts.length; i++) {
                goodses.push({
                    "trading_id": this.store_carts[i].trading_id,
                    "cart_num": this.store_carts[i].cart_num,
                    "price": this.store_carts[i].price,
                    "discount_price":this.store_carts[i].discount_price
                });
            }
            let data = {
                'dot_id': this.dot_id,
                'total': this.trade.total,
                'goodses': goodses,
                'ts': (new Date()).getTime()
            };
            localStorage.setItem("ncstore_cart", JSON.stringify(data));
        },
        handleScroll() {
            if (this.$route.path == ('/ncshop/equipment')&&this.current_tradings.length>4) {
                if (($(document).scrollTop()+ window.innerHeight) >= document.body.scrollHeight - 1) {
                    let category_id = this.categorys[this.activeTab]._id,
                        load_next_page = this.category_pages[category_id];
                    this.loadGoodlist(category_id, load_next_page);
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
        goPay() {
            this.setLocalData();
            if (!this.store_carts.length) {
                _util.showErrorTip('请选择商品');
                return false;
            } else {
                this.url('/ncshop/equipmentCoffeePay');   
            }
        },
        gotoOrder() {
            this.url('/ncshop/equipment/coffee/order');
        },
        clearData() {
            this.scroll_load_loading = false;
            this.scroll_load_end = false;
        },
    }
}
</script>