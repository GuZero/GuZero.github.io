// pages/order_list/index.js
let app = getApp();
Page({
    data: {
        tabIndex: 0,
        aOrder: [],
        loaded: false,
        order_type: 'community_groupbuy',
        scroll_load_loading: false
    },
    onLoad: function(options) {
        let order_type = options.order_type || '';
        app.authenticated(() => {
            if (order_type) this.setData({
                order_type: order_type
            });
            this.load();
        });
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        app.authenticated(() => {
            this.load();
        });
    },
    load: function() {
        wx.showNavigationBarLoading()
        this.getOrder();
    },
    getOrder: function() {
        if (this.data.scroll_load_loading) {
            return false;
        }
        this.setData({
            scroll_load_loading: true
        });
        app.ajax('GET', '/trading/order?order_type=' + this.data.order_type, null, (res) => {
            this.setData({
                scroll_load_loading: false
            });
            if (res.data.status == 0) {
                let orders = res.data.data.orders;
                for (let i = 0; i < orders.length; i++) {
                    orders[i].status_val = this.setStatus(orders[i].status);
                    orders[i].order_at = (new Date(orders[i].order_at)).format('yyyy-MM-dd hh:mm');
                    let goods = orders[i].goods;
                    for (let j = 0; j < goods.length; j++) {
                        if (goods[j].trading.images.length) {
                            goods[j].trading.image_src = "https://img.aimoge.com/" + goods[j].trading.images[0].substring(0, 28)
                        } else {
                            goods[j].trading.image_src = "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz";
                        }
                    }
                }
                this.setData({
                    loaded: true,
                    aOrder: orders
                })
                wx.hideNavigationBarLoading()
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    resetData: function() {
        this.setData({
            aOrder: []
        })
    },
    setStatus: function(status) {
        let str = '';
        if ([1901].indexOf(status) > -1) {
            str = '已取消';
        }
        if ([2001, 2101, 2501, 2502, 2901, 2902].indexOf(status) > -1) {
            str = '待支付';
        }
        if ([2801, 3001].indexOf(status) > -1) {
            str = '待发货';
        }
        if ([3010].indexOf(status) > -1) {
            str = '分拣中';
        }
        if ([3101].indexOf(status) > -1) {
            str = '配送中';
        }
        if ([3102].indexOf(status) > -1) {
            str = '到达代收点';
        }
        if ([3501, 3901].indexOf(status) > -1) {
            str = '配送完成';
        }
        if ([4801, 4802].indexOf(status) > -1) {
            str = '退款中';
        }
        if ([4901, 4910].indexOf(status) > -1) {
            str = '退款完成';
        }
        if ([4902, 4911].indexOf(status) > -1) {
            str = '退款失败';
        }
        return str;

    },
    linkOrderDetails: function(e) {
        let order_id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../order_details/index?order_id=' + order_id,
        })
    },
})