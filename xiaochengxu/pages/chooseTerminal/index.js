//company.js
var app = getApp()
Page({
    data: {
        animOfNoneNetWork: {},
        animMsg: '',
        word: '',
        lastestItem: {
            terminal_name: '',
            terminal_code: '',
            distance: 0
        },
        options: {},
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
    onLoad: function (options) {
        var that = this;
        that.getNetworkType();
        if (options) {
            that.setData({
                options: options
            })
        }
        var terminal_code = options && options.terminal_code ? options.terminal_code : '';
        var terminal_name = options && options.terminal_name ? options.terminal_name : '';
        var distance = options && options.distance ? options.distance : 'none';
        wx.getSystemInfo({
            success: function (res) {
                that.setData({ scrollHeight: res.windowHeight })
                that.getUserLocation();
                if (distance && distance != 'none' && terminal_code && terminal_name) {
                    that.setData({
                        lastestItem: {
                            terminal_code: terminal_code,
                            terminal_name: terminal_name,
                            distance: distance
                        }
                    })
                } else {
                    that.loadHistory();
                }
            }
        });
    },
    onShareAppMessage: function () {
        var terminal_code = this.data.terminal_code;
        var terminal_name = this.data.terminal_name;
        var distance = this.data.distance;
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/pages/chooseTerminal/index'
        }
    },
    onPullDownRefresh: function () {
        this.onLoad(this.data.options);
        wx.stopPullDownRefresh();
    },        

    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    that.setData({
                        scroll_load_loading: false
                    });
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    return false;
                }
                return true;
            },
            fail: function () {
                that.setData({
                    scroll_load_loading: false
                });
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
        app.ajax('GET', "/ultrabox/storage/terminal/near?longitude=" + that.data.longitude + "&latitude=" + that.data.latitude + "&word=" + encodeURIComponent(that.data.word) + "&cursor=" + page, null, function (d) {
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
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
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
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    scrolltolower: function (e) {
        this.load();
    },
    clearInput: function () {
        this.setData({ word: '' });
    },
    bindKeyInput: function (e) {
        this.setData({ word: e.detail.value });
    },
    search: function () {
        this.setData({
            page: "",
            pageList: [],
            items: [],
            scroll_load_end: false,
            scroll_load_loading: false
        })
        this.load();

    },

    chooseTerminal: function (e) {
        var item = e.currentTarget.dataset.item;
        wx.redirectTo({
            url: '../depositOrder/index?terminal_code=' + (item.terminal_code || item.code) + '&terminal_name=' + item.terminal_name + '&distance=' + item.distance
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
    Reposition:function(){
        var that = this;
        if(wx.openSetting){
            wx.openSetting({
                complete: function (res) {
                    that.getUserLocation();
                }
            })
        }else{
            wx.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            })
        }
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
