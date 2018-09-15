// pages/terminal/open_result/index.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isSuccess: false,
        terminal_code: '',
        order_id: '',
        error_msg: '',
        orders: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let status = options.status || '',
            terminal_code = options.terminal_code || '',
            order_id = options.order_id || '',
            error_msg = options.error_msg || '';

        this.setData({
            isSuccess: parseInt(status),
            terminal_code: terminal_code,
            order_id: order_id,
            error_msg: error_msg
        })
        app.authenticated(() => {
            app.loadUser(() => {
                if (this.data.terminal_code && this.data.order_id && this.data.isSuccess) this.hasClosedoor();
            });
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },
    hasClosedoor: function() {
        let that = this;
        let start_time = (new Date()).getTime();

        function getData() {
            app.ajax('GET', '/terminal/open/door?terminal_code=' + that.data.terminal_code + '&order_id=' + that.data.order_id, null, (res) => {
                if (res.statusCode == 200 && res.data.status == 0) {
                    console.log(res.data.data)
                    if (res.data.data.pickup_orders && res.data.data.pickup_orders.length > 0) {
                        that.checkDeliveryPickupData(res.data.data.pickup_orders, res.data.data.order)
                    } else {
                        that.checkPickup(res.data.data.order)
                    }
                    return
                }

                if ((new Date()).getTime() - start_time < 5 * 60 * 1000) {
                    getData()
                }
            }, (err) => {
                console.log(err);
                getData();
            })
        }

        getData();
    },
    checkPickup: function(data) {
        if (data && data.order_id) {
            if (data.status == 3901) {
                wx.redirectTo({
                    url: '../../user/order_result/index?status=1&order_id=' + data.order_id,
                })
            } else {
                wx.redirectTo({
                    url: '../../user/order_result/index?status=0&order_id=' + (data.order_id || ''),
                })
            }
        } else {
            wx.redirectTo({
                url: '../pickup_goods_result/index?status=1&wait_count=0'
            })
        }
    },
    checkDeliveryPickupData: function(data, order) {
        let wait_count = 0,
            status = 1,
            put_count = 0,
            take_count = 0;

        for (let i = 0; i < data.length; i++) {
            switch (data[i].status) {
                case 400: //取货完成没有订单
                    take_count++
                    break;
                case 300: //取货完成还有订单
                    if (data[i].uid == app.globalData.userInfo._id || data[i].mobile == app.globalData.username) {
                        wait_count++
                    } else {
                        put_count++
                    }
                    break;
                case 401: //订单误取
                    status = 2;
                    break;
            }
        }

        if (status == 1 && wait_count == 0 && take_count == 0 && put_count >= 0 && order && order.status == 3901) {
            this.checkPickup(order)
        } else {
            wx.redirectTo({
                url: '../pickup_goods_result/index?status=' + status + '&wait_count=' + wait_count
            })
        }
    },
    linkIndex: function() {
        wx.redirectTo({
            url: '../../index/index',
        })
    },
    scanCode: function(){
        wx.scanCode({
            
        })
    }
})