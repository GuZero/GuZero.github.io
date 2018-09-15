// pages/user/card_list/index.js
var app = getApp();
var Tracking = require('../../../utils/tracking.js');

Page({
    data: {
        tabIndex: 1,
        aOrder: [],
        loaded: false,
        scroll_load_loading: false,
        user_info: null,
        receiver_type: 1
    },
    onLoad: function(options) {
        app.authenticated(() => {
            let user_info = app.getUser();
            this.setData({
                user_info: user_info
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
    onShareAppMessage: function(res) {
        if (res.from === 'button') {
            let _id = res.target.dataset.id,
                uid = res.target.dataset.uid;
            return {
                title: "【中秋蟹礼】中秋大蟹礼," + this.data.user_info.nickname + "携蟹卡大礼包祝您中秋快乐",
                desc: "中秋蟹礼",
                path: "/pages/activity/hairycrab/card_details/index?order_id=" + _id + "&uid=" + uid + "&_tk=" + Tracking.genAndUserTracking(),
                imageUrl: "https://img.aimoge.com/Fuka3WKE1X-h0wQlEcofmulxx3Zp"
            }
        }
    },
    load: function() {
        wx.showNavigationBarLoading()
        this.getCardList();
    },
    getCardList: function() {
        if (this.data.scroll_load_loading) {
            return false;
        }
        this.setData({
            scroll_load_loading: true
        });
        app.ajax('GET', '/trading/gift/card/000000000000000000000000/order?receiver_type=' + this.data.receiver_type, null, (res) => {
            this.setData({
                scroll_load_loading: false
            });
            if (res.data.status == 0) {
                let orders = res.data.data.orders;
                if (orders.length) {
                    for (let i = 0; i < orders.length; i++) {
                        orders[i].expried_time_zh = (new Date(orders[i].expried_time)).format('yyyy-MM-dd hh:mm');
                        switch (orders[i].status) {
                            case 300:
                                orders[i].status_zh = '未提货';
                                break;
                            case 500:
                                orders[i].status_zh = '已提货';
                                break;
                            default:
                                break;
                        }
                        if (orders[i].receiver_uid != "000000000000000000000000") orders[i].status_zh = '已赠送';
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
    switchTab: function(e) {
        let index = e.target.dataset.index;
        this.setData({
            tabIndex: index,
            receiver_type: index
        })
        this.resetData();
        this.getCardList();
    },
    resetData: function() {
        this.setData({
            aOrder: []
        })
    },
    linkOrderDetails: function(e) {
        let order_id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../order_details/index?order_id=' + order_id,
        })
    },
    linkIndex: function() {
        wx.navigateTo({
            url: '/pages/index/index',
        })
    },
    linkCardDetails: function(e) {
        let order_id=e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../card_details/index?order_id=' + order_id + '&uid=' + this.data.user_info._id,
        })
    },
    linkToPickUp: function(e) {
        let order_id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../pick_up/index?order_id=' + order_id + '&uid=' + this.data.user_info._id,
        })
    }
})