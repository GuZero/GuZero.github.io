// pages/inquire/index.js
let app = getApp();
Page({
    data: {
        animOfNoneNetWork: {},
        animMsg: '',
        key: '',
        scrollHeight: 0,
        numPerPage: 16,
        items: [],
        pageList: [],
        page: '',
        scroll_load_loading: false,
        scroll_load_end: false,
        noNetWork: false,
        isShowEmpty: false,
        current_community: null,
        current_community_id: '',
        default_community: null,
        aNearby: [],
        nearby_page: '',
        nearbyPageList: [],
        aAll: [],
        all_page: '',
        allPageList: [],
        all_scroll_load_end: false,
        latitude: '',
        longitude: '',
        isShowSearch: false

    },
    onLoad: function () {
        let that = this;
        that.getNetworkType();
        wx.getSystemInfo({
            success: function (res) {
                that.setData({ scrollHeight: res.windowHeight })
            },
        })

        let community_id = wx.getStorageSync('community_id') || '';
        if (community_id) {
            this.setData({
                current_community_id: community_id || ''
            })
            this.loadCurrentCommunity();
        }

        wx.getLocation({
            success: function (data) {
                let latitude = data.latitude,
                    longitude = data.longitude;
                that.setData({
                    latitude: latitude,
                    longitude: longitude
                })
                that.getNearbyCommunity(latitude, longitude);
            }
        });
    },
    onPullDownRefresh: function () {
        this.resetData();
        this.onLoad()
        wx.stopPullDownRefresh()
    },
    onReachBottom: function () {//页面相关事件处理函数--监听用户下拉动作
        this.scrollAll();
    },
    getNetworkType: function () {
        let that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    that.setData({ scroll_load_loading: false });
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    if (that.data.items.length <= 0) {
                        that.setData({ noNetWork: true });
                    }
                    return false;
                }
                return true;
            },
            fail: function () {
                that.setData({ scroll_load_loading: false });
                if (that.data.items.length <= 0) {
                    that.setData({ noNetWork: true });
                }
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    gotoIndex: function (e) {
        let community_id = e.currentTarget.dataset.id;

        wx.setStorageSync("community_id", community_id);
        wx.navigateBack({
            delta: 1
        })
    },
    load: function () {
        let that = this, page = '';
        if (!that.getNetworkType()) {
            return false;
        }
        if (that.data.scroll_load_loading) {
            return false;
        }
        if (that.data.scroll_load_end) {
            return false;
        }
        that.setData({
            scroll_load_loading: true
        });
        page = that.data.page;
        app.ajax('GET', '/community/search?keyword=' + that.data.key + '&cursor=' + page, null, function (d) {
            that.setData({
                scroll_load_loading: false
            });
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    let data = d.data.data;
                    if (data.communities && data.communities.length) {
                        that.setData({
                            items: that.data.items.concat(d.data.data.communities),
                            page: d.data.data.next_cursor || 0,
                            pageList: that.data.pageList.concat([page])
                        });
                        if (data.communities && data.communities.length < that.data.numPerPage) {
                            that.setData({
                                scroll_load_end: true
                            });
                        }
                    } else {
                        that.setData({
                            isShowEmpty: true,
                            scroll_load_end: true
                        });
                    }
                } else {
                    app.showErrorTip(that, d.data.msg);
                }
                that.setData({ noNetWork: false });
            } else {
                if (that.data.items.length <= 0) {
                    that.setData({ noNetWork: true });
                }
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        }, function (err) {
            that.setData({
                scroll_load_loading: false
            });
            if (that.data.items.length <= 0) {
                that.setData({ noNetWork: true });
            }
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    isSearch: function () {
        this.setData({
            page: "",
            pageList: [],
            items: [],
            scroll_load_end: false,
            scroll_load_loading: false
        })
        if (!this.data.key) {
            app.showErrorTip(this, '请输入小区名称');
            return false;
        }
        this.setData({
            isShowSearch: true
        })
        this.load();
    },
    change: function (e) {
        this.setData({ key: e.detail.value });
    },
    clearInput: function () {
        this.setData({ key: '', isShowSearch:false});
    },
    reload: function () {
        this.load();
    },
    scrolltolower: function (e) {
        if (this.data.scroll_load_end) {
            return false;
        } else {
            if (this.data.key) {
                this.load();
            }
        }
    },
    loadCurrentCommunity: function () {
        app.ajax('GET', '/community/detail/' + this.data.current_community_id, null, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    this.setData({
                        current_community: res.data.data.community
                    });
                    return;
                }
            }

            if (this.data.aNearby.length) {
                this.setData({
                    current_community: this.data.aNearby[0],
                })
            } else if (this.data.default_community) {
                this.setData({
                    current_community: this.data.default_community,
                })
            } else {
                this.setData({
                    current_community_id: '',
                })
            }
        });
    },
    getNearbyCommunity: function (lat, log) {
        let that = this, page = '';
        if (that.data.scroll_load_end) {
            return false;
        }
        page = that.data.nearby_page;
        app.ajax('GET', '/community/nearby?limit=3&longitude=' + log + '&latitude=' + lat + '&distance=1000&cursor=' + page, null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    let data = d.data.data;
                    if (data.communities.length) {
                        if (!that.data.current_community_id) {
                            that.setData({
                                current_community: data.communities[0],
                            });
                        }
                        that.setData({
                            default_community: data.default_community,
                            aNearby: that.data.aNearby.concat(data.communities),
                            nearby_page: data.next_cursor || 0,
                            nearbyPageList: that.data.nearbyPageList.concat([page])
                        })
                        if (data.communities && data.communities < that.data.numPerPage) {
                            that.setData({
                                scroll_load_end: true
                            });
                        }
                    } else {
                        if (!that.data.current_community_id) {
                            that.setData({
                                current_community: data.default_community,
                            });
                        }

                        that.setData({
                            default_community: data.default_community,
                        })
                    }
                } else {
                    if (d.data.msg) app.showErrorTip(that, d.data.msg);
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！')
            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    scrollNearby: function () {
        if (this.data.scroll_load_end) {
            return false;
        } else {
            this.getNearbyCommunity(this.latitude, this.longitude);
        }
    },
    getAllCommunity: function () {
        let that = this, page = '';
        if (that.data.all_scroll_load_end) {
            return false;
        }
        page = that.data.all_page;
        if (that.data.allPageList.indexOf(page) > -1) {
            return false;
        }
        app.ajax('GET', '/community/list?cursor=' + page, null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    let data = d.data.data;
                    if (data.communities.length) {
                        that.setData({
                            aAll: that.data.aAll.concat(data.communities),
                            all_page: data.next_cursor || 0,
                            allPageList: that.data.allPageList.concat([page])
                        })
                        if (data.communities && data.communities.length < 16) {
                            that.setData({
                                all_scroll_load_end: true
                            });
                        }
                    }
                } else {
                    if (d.data.msg) app.showErrorTip(that, d.data.msg);
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！')
            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    scrollAll: function () {
        if (this.data.all_scroll_load_end) {
            return false;
        } else {
            this.getAllCommunity(this.latitude, this.longitude);
        }
    },
    resetData: function () {
        this.setData({
            aNearby: [],
            nearby_page: '',
            nearbyPageList: [],
            aAll: [],
            all_page: '',
            allPageList: [],
            all_scroll_load_end: false,
        })
    }
})