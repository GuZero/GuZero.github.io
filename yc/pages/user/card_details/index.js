// pages/user/card_details/index.js
var app = getApp();
var Tracking = require('../../../utils/tracking.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        order_id: '',
        user_id: '',
        order_info: null,
        loaded: false,
        is_self: true,
        is_pick_up: false
    },
    onLoad: function(options) {
        let order_id = options.order_id || '',
            user_id = options.uid || '';
        Tracking.loadAndUserTrackings(options._tk || '');
        app.authenticated(() => {
            let user_info = app.getUser(),
                is_self = user_info._id == user_id;
            this.setData({
                order_id: order_id,
                user_id: user_id,
                user_info: user_info,
                is_self: is_self
            });
            if (!this.data.is_self) {
                this.receiveCard();
            } else {
                this.getOrderDetails()
            }
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
    getOrderDetails: function() {
        wx.showLoading({
            title: '加载中',
        })
        app.ajax('GET', '/trading/gift/card/000000000000000000000000/order/' + this.data.order_id, null, (res) => {
            wx.hideLoading();
            if (res.data.status == 0) {
                let order = res.data.data.order;
                let is_self = order.uid == this.data.user_info._id;
                let goods = order.order.goods;
                if (is_self) {
                    if (order.receiver_uid != '000000000000000000000000') {
                        order.status_zh = '已赠送';
                    } else {
                        order.status_zh = order.status == 500 ? '已提货' : '未提货';
                    }
                } else {
                    order.status_zh = order.status == 500 ? '已提货' : '未提货';
                }
                order.expried_time_zh = (new Date(order.expried_time)).format('yyyy-MM-dd hh:mm');
                for (let i = 0; i < goods.length; i++) {
                    if (goods[i].trading.images.length) {
                        goods[i].image_src = "https://img.aimoge.com/" + goods[i].trading.images[0].substring(0, 28);
                    } else {
                        goods[i].image_src = "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz";
                    }
                }
                this.setData({
                    loaded: true,
                    order_info: order,
                    is_self: is_self
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            wx.hideLoading();
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    receiveCard: function() {
        let data = {
            card_uid: this.data.user_id
        }
        app.ajax('POST', '/trading/gift/card/000000000000000000000000/order/' + this.data.order_id, data, (res) => {
            if (res.data.status == 0) {
                this.getOrderDetails();
            } else if (res.data.status == 310) {
                this.getOrderDetails();
            } else if (res.data.status == 311) {
                this.setData({
                    is_pick_up: true
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    setStatusZh: function(order) {
        let str = '';
        switch (order.status) {
            case 300:
                str = '未提货';
                break;
            case 400:
                if (order.receiver_uid != "000000000000000000000000")
                    str = '已赠送';
                break;
            case 500:
                str = '已提货';
                break;
            default:
                break;
        }

        return str;
    },
    callMobile: function() {
        wx.makePhoneCall({
            phoneNumber: '18626495865',
        })
    }
})