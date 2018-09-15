// pages/user/goods_list_order/index.js
let app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodses: null,
        tradings: [],
        load_tradings_count: 0,
        loaded: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            order_id: options.order_id||'',
            order_type:options.order_type||''
        })
        app.authenticated(() => {
            this.loadOrderDetalis();
        });
    },
    onLoaded: function() {
        this.setData({
            loaded: true,
        })
    },
    loadOrderDetalis: function() {
        app.ajax('GET', '/trading/order/' + this.data.order_id + '?order_type='+this.data.order_type, null, (res) => {
            if (res.data.status == 0) {
                    let data=res.data.data;
                    for (let i = 0; i <data.order.goods.length; i++) {
                        let trading =data.order.goods[i].trading;
                        if (trading.images.length) {
                            trading.image_src = "https://img.aimoge.com/" + trading.images[0].substring(0, 28);
                        } else {
                            trading.image_src = "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz";
                        }
                    }
                    this.setData({
                        tradings:data.order.goods
                    })
                    this.onLoaded();
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    loadTradings: function() {
        let goodses = this.data.goodses;
        console.log(goodses)
        this.setData({
            tradings: [],
            load_tradings_count: 0,
        })

        for (let i = 0; i < goodses.length; i++) {
            this.loadTrading(goodses.length, goodses[i].sku_id, goodses[i].num);
        }
    },
    loadTrading: function(count, sku_id, num) {
        app.ajax("GET", "/trading/detail/sku/" + sku_id, null, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    if (res.data.data.trading.images.length) {
                        res.data.data.trading.image_src = "https://img.aimoge.com/" + res.data.data.trading.images[0].substring(0, 28);
                    } else {
                        res.data.data.trading.image_src = "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz";
                    }
                    res.data.data.trading.cart_num = num;

                    this.data.tradings.push(res.data.data);
                    this.setData({
                        load_tradings_count: this.data.load_tradings_count + 1,
                        tradings: this.data.tradings,
                    });

                    if (this.data.load_tradings_count >= count) {
                        this.onLoaded();
                    }
                }
            }
        }, (res) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！');
        });
    },
})