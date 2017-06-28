//company.js
var app = getApp()
Page({
    data: {
        animOfNoneNetWork: {},
        animMsg: '',
        key: '',
        lastestItem: {
            terminal_name: '',
            terminal_code: '',
            distance: 0
        },
        latitude: 32.015198941158,
        longitude: 118.79287282351,
        locatinfo: "定位中...",
        isLocation: true,
        scrollHeight: 0,
        numPerPage: 16,
        items: [],
        pageList: [],
        page: '',
        scroll_load_loading: false,
        scroll_load_end: false
    },
    choose: function (e) {
        var data = e.currentTarget.dataset
        data.code = this.data.code
        var pages = getCurrentPages();
        pages[pages.length - 2].setCompany(data);
        wx.navigateBack({ "delta": 1 });
    },

    onLoad: function () {
        var that = this
        that.getNetworkType();
        wx.getSystemInfo({
            success: function (res) {
                that.setData({ scrollHeight: res.windowHeight })
                that.getUserLocation();
                that.loadHistory();
            }
        });
    },
    onPullDownRefresh: function () {
        wx.getSystemInfo({
            success: function (res) {
                that.setData({ scrollHeight: res.windowHeight })
                that.getUserLocation();
                that.loadHistory();
                wx.stopPullDownRefresh()
            }
        });
    },
    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    return false;
                }
                return true;
            },
            fail: function () {
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    getRad: function (d) {
        var PI = Math.PI;
        return d * Math.PI / 180.0;
    },
    getFlatternDistance: function (lat1, lng1, lat2, lng2) {
        var that = this;
        var PI = Math.PI;
        var radLat1 = that.getRad(lat1);
        var radLat2 = that.getRad(lat2);
        var a = radLat1 - radLat2;
        var b = that.getRad(lng1) - that.getRad(lng2);
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378.137;// EARTH_RADIUS;
        s = Math.round(s * 1000) / 1000;
        return s;


        return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
    },
    setDataStatus: function () {
        var that = this;
        var item = null, tempItems = [];
        for (var i = 0, len = that.data.items.length; i < len; i++) {
            item = that.data.items[i];
            item.distance = that.getFlatternDistance(that.data.latitude, that.data.longitude, item.geo[1], item.geo[0]);
            tempItems.push(item);
        }
        that.setData({
            items: tempItems
        })
    },
    load: function (isFirst) {
        var that = this, page = ''
        if (!that.getNetworkType()) {
            return false
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
        app.ajax('GET', "/ultrabox/storage/terminal/near?longitude=" + that.data.longitude + "&latitude=" + that.data.latitude + "&word=" + that.data.key + "&cursor=" + page, null, function (d) {
            that.setData({
                scroll_load_loading: false
            });
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    if (d.data.data.terminals && d.data.data.terminals.length > 0) {
                        if (that.data.pageList.indexOf(page) >= 0) return false;
                        that.data.pageList.push(page);
                        var item = that.data.items.concat(d.data.data.terminals);
                        that.setData({
                            page: d.data.data.next_cursor || '',
                            items: item
                        });
                        that.setDataStatus();
                    }
                    if (d.data.data.terminals && d.data.data.terminals.length < that.data.numPerPage) {
                        that.setData({ scroll_load_end: true })
                    }
                } else {
                    app.showErrorTip(that, d.data.msg);
                    that.setData({ scroll_load_end: true })
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                that.setData({ scroll_load_end: true })
            }
        })
    },
    loadHistory: function () {
        var that = this;
        app.ajax('GET', "/ultrabox/storage/terminal", null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    var item = d.data.data;
                    if (item && item.geo && item.geo.length == 2) {
                        var distance = that.getFlatternDistance(that.data.latitude, that.data.longitude, item.geo[1], item.geo[0]);
                    }
                    if (item && item.terminal_name && item.code) {
                        that.setData({
                            lastestItem: {
                                terminal_name: item.terminal_name || '',
                                terminal_code: item.code || '',
                                distance: distance
                            },
                        })
                    }
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        })
    },
    scrolltolower: function (e) {
        this.load();
    },
    loadByKey: function () {

        this.setData({
            page: "",
            pageList: [],
            items: []
        })
        this.load();
    },

    change: function (e) {
        this.setData({ key: e.detail.value })
        // this.search()
    },
    search: function () {
        if (this.data.key == '') {
            this.load()
        } else {
            this.loadByKey()
        }
    },
    clearInput: function () {
        this.setData({ key: '' })
    },
    chooseTerminal: function (e) {
        var item = e.currentTarget.dataset.item;
        wx.redirectTo({
            url: '../depositOrder/index?terminal_code=' + (item.terminal_code || item.code) + '&&terminal_name=' + item.terminal_name
        })
    },
    gcj02tobd09: function (lng, lat) {
        var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
        var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
        var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
        var bd_lng = z * Math.cos(theta) + 0.0065;
        var bd_lat = z * Math.sin(theta) + 0.006;
        return [bd_lng, bd_lat]
    },
    getUserLocation: function () {
        var that = this;
        wx.getLocation({
            type: 'gcj02',
            success: function (res) {
                if (res.latitude == 0 && res.longitude == 0) {
                    that.setData({
                        latitude: 32.015198941158,
                        longitude: 118.79287282351,
                        isLocation: false
                    })
                } else {
                    var geo = that.gcj02tobd09(res.longitude, res.latitude);
                    that.setData({
                        latitude: geo[1],
                        longitude: geo[0],
                        isLocation: false
                    })
                }
                that.load(true);
            },
            fail: function (res) {
                app.showErrorTip(that, '定位失败，请确认是否授权获取您的地理位置...');
                that.setData({
                    locatinfo: '定位失败'
                })
            }
        })
    }
})
