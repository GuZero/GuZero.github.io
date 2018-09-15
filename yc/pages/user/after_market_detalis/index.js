// pages/after_market_detalis/index.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderStatus: [{
                current: true,
                done: true,
                text: '提交申请',
                desc: ''
            },
            {
                done: false,
                current: false,
                text: '审核中',
                desc: ''
            },
            {
                done: false,
                current: false,
                text: '退款',
                desc: ''
            },
            {
                done: false,
                current: false,
                text: '完成',
                desc: ''
            }
        ],
        order_id: '',
        order_info: null,
        afterMarkets_detalis: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            order_id: options.order_id || ''
        })
        app.authenticated(() => {
            this.getAftermarketDetails();
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },
    getAftermarketDetails: function() {
        app.ajax('GET', '/trading/order/' + this.data.order_id + '/aftermarket', null, (res) => {
            if (res.data.status == 0) {
                let data = res.data.data;
                for (let i = 0; i < data.aftermarkets.length; i++) {
                    data.aftermarkets[i].image_info = [];
                    for (let j = 0; j < data.aftermarkets[i].images.length; j++) {
                        let obj = {
                            image_src: 'https://img.aimoge.com/' + data.aftermarkets[i].images[j].substring(0, 28)
                        }
                        data.aftermarkets[i].image_info.push(obj)
                    }
                }
                this.setData({
                    afterMarkets_detalis: data.aftermarkets
                })
                this.getOrderDetalis();
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    getOrderDetalis: function() {
        app.ajax('GET', '/trading/order/' + this.data.order_id + '?order_type=community_groupbuy', null, (res) => {
            if (res.data.status == 0) {
                this.setData({
                    order_info: res.data.data.order
                })
                if (this.data.afterMarkets_detalis.length) this.setOrderStatus();
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    setOrderStatus: function() {
        let data = null,
            aftermarket_status = this.data.afterMarkets_detalis[0].status,
            status = this.data.order_info.status;
        if (aftermarket_status == 4) {
            //审核未通过
            data = this.setShipStatus(2);
            data = data.splice(0, 2)
            data[1].text = '审核未通过';
            data[1].desc = (new Date(this.data.afterMarkets_detalis[0].close_at).format('yyyy-MM-dd hh:mm'));
        }
        if (aftermarket_status == 0) {
            //已提交
            data = this.setShipStatus(2)
        }
        if (aftermarket_status == 1) {
            //审核完成
            data = this.setShipStatus(2);
            data[1].text = '审核完成';
            data[1].desc = (new Date(this.data.afterMarkets_detalis[0].review_at).format('yyyy-MM-dd hh:mm'));
            if ([4801, 4802].indexOf(status) > -1) {
                //退款中
                data = this.setShipStatus(3);
                data[2].text = '退款中';
                data[2].desc = (new Date(this.data.order_info.cancel_at).format('yyyy-MM-dd hh:mm'));
            }
            if ([4901, 4910].indexOf(status) > -1) {
                //退款成功
                data = this.setShipStatus(4);
                data[2].text = '退款到帐';
                data[2].desc = (new Date(this.data.afterMarkets_detalis[0].refund_at).format('yyyy-MM-dd hh:mm'));
            }
            if ([4902, 4911].indexOf(status) > -1) {
                //退款失败
                data = this.setShipStatus(3);
                data[2].text = '退款失败';
            }
        }
        this.setData({
            orderStatus: data
        })
    },
    setShipStatus: function(index) {
        let data = this.data.orderStatus
        for (let i = 0; i < index; i++) {
            data[i].current = true;
            data[i].done = true;
        }
        data[0].desc = (new Date(this.data.afterMarkets_detalis[0].apply_at).format('yyyy-MM-dd hh:mm'));
        data[1].desc = (new Date(this.data.afterMarkets_detalis[0].apply_at).format('yyyy-MM-dd hh:mm'));
        return data;
    },
})