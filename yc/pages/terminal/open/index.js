// pages/terminal/open/index.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        contract_id: '',
        checked_count: 0,
        is_checking_contract: false,
        ishiddenLoading: true,
        terminal_code: '',
        is_new_user: false,
        orders: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let terminal_code = options.terminal_code || '';
        if (!terminal_code) {
            let q = decodeURIComponent(options.q || '');
            let r = new RegExp('^http[s]*?:\/\/.+?\/ebox\/door\/([0-9]{10})')
            let m = q.match(r)

            if (m && m.length >= 2) {
                terminal_code = m[1]
            }
        }

        this.setData({
            terminal_code: terminal_code || ''
        })
        wx.showNavigationBarLoading()

        app.authenticated(() => {
            this.hasUserContract(this.showNewUserTips);
        }, true)
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function(res) {
        if (!this.data.contract_id) {
            this.checkContract(() => {

            });
        }
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },
    showApplyTips: function() {
        let that = this;
        wx.showModal({
            content: '开通免密支付后才能进行开门，是否开通？',
            showCancel: false,
            success: function(res) {
                if (res.confirm) {
                    that.hasUserContract(() => {
                        that.getUserContract();
                    });
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    showNewUserTips: function() {
        this.setData({
            is_new_user: true
        })
    },
    checkContract: function(fail_callback) {
        let res = app.getCurrentShowOptions && app.getCurrentShowOptions();

        if (res.scene === 1038) { // 场景值1038：从被打开的小程序返回
            const {
                appId,
                extraData
            } = res.referrerInfo
            if (typeof extraData == 'undefined') {
                // if (extraData.return_code != 'SUCCESS') {
                //     return this.showApplyTips();
                // }
            }

            let that = this;

            function checking() {
                that.hasUserContract(() => {
                    if (that.data.checked_count < 3) {
                        setTimeout(checking, that.data.checked_count * 1000)
                    } else {
                        that.setData({
                            is_checking_contract: false
                        })
                    }
                });

                that.setData({
                    checked_count: that.data.checked_count + 1
                })
            }

            this.setData({
                is_checking_contract: true
            })
            checking();


            return;
        }
        fail_callback();
    },
    hasUserContract: function(fail_callback) {
        app.ajaxPay('GET', '/pay/weixinpay/pappayapply/contract?open_id=' + app.globalData.openid + '&weixin_id=' + app.globalData.wxid, null, (res) => {
            if (res.data.status == 0) {
                app.authenticated(() => {
                    wx.hideNavigationBarLoading();
                    this.setData({
                        contract_id: res.data.data.order_id
                    })
                    this.checkOrder();
                })
            } else {
                fail_callback();
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    getUserContract: function() {
        let data = {
            open_id: app.globalData.openid,
            weixin_id: app.globalData.wxid
        }
        app.ajaxPay('POST', '/pay/weixinpay/pappayapply/contract', data, (res) => {
            if (res.data.status == 0) {
                let data = res.data.data,
                    parameter = {
                        appId: 'wxbd687630cd02ce1d',
                        path: 'pages/index/index',
                        extraData: data
                    }
                wx.navigateToMiniProgram(parameter);
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    checkOrder: function() {
        app.ajax('GET', '/trading/order?order_type=ebox&status_type=1', null, (res) => {
            if (res.data.status == 0) {
                let orders = res.data.data.orders;
                if (orders.length) {
                    app.showErrorTip(this, '您还有订单未支付，请完成支付后再进行开门')
                    if (orders.length === 1) {
                        setTimeout(function() {
                            wx.redirectTo({
                                url: '../../user/order_details/index?order_id=' + orders[0].order_id,
                            })
                        }, 1500)
                    } else {
                        setTimeout(function() {
                            wx.redirectTo({
                                url: '../../user/order_list/index',
                            })
                        }, 1500)
                    }
                }
                this.setData({
                    orders: orders
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    openDoor: function(event) {
        let weixin_form_id = event.detail.formId;
        if (weixin_form_id == "the formId is a mock one") {
            weixin_form_id = '';
        }

        let data = {
            terminal_code: this.data.terminal_code,
            open_id: app.globalData.openid,
            weixin_id: app.globalData.wxid,
            weixin_form_id: weixin_form_id,
        }
        this.setData({
            ishiddenLoading: false,
        })

        app.ajax('POST', '/terminal/open/door', data, (res) => {
            this.setData({
                ishiddenLoading: true,
            })
            if (res.data.status == 0) {
                let data = res.data.data;
                wx.redirectTo({
                    url: '../open_result/index?status=1&terminal_code=' + this.data.terminal_code + '&order_id=' + data.order_id,
                })
            } else {
                let error_msg = '';
                if (res.data.status == 201) {
                    error_msg = res.data.msg;
                }
                
                wx.redirectTo({
                    url: '../open_result/index?status=0&error_msg=' + error_msg,
                })
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    }
})