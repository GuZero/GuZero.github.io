define(['dataServices', 'lCalendar', 'common', 'observer', 'iscroll', "layer", 'commonPay', 'swiper', 'cityData'], function(dataServices, lCalendar, common, observer, iscroll, layer, commonPay, swiper, cityData) {
    /*alert(JSON.stringify(cityData4.hot_city));*/
    //common日期
    common.dateFormat();
    var model = avalon.define({
        $id: 'orderSubmit',
        //网络状态
        net: {
            fail: 0
        },
        //接口状态码映射表
        ajaxCode: {
            nearOk: "0", //附近柜机接口请求OK
            ok: "030100000" //接口请求成功
        },
        //页面所需要的所有初始化数据
        initData: {
            nearFcBoxes: [], //所有附近柜机
            areaFcBox: [] //区域柜机选择
        },
        //已选城市列表
        selectCityList: [],
        isShowFirstTab: true, //默认附近柜机选择
        isShowSecondTab: false, //按城市选择柜机隐藏
        isShowCover: false,
        isComporateing: false,
        timerId: 0, //验证码timerId
        sendMessageText: "获取验证码",
        isSendClick: false, //是否已发送
        showShoppingDialog: false, //是否显示购物车
        showAreaShoppingDialog: false, //是否显示按城市选择购物车
        //当前所操作的按城市选择数据
        currAreaDate: {
            realPrice: 0, //实际价格
            totalPrice: 0, //总价
            isShowActivePrice: false, //是否显示活动价
            edCodeListLen: 0, //按城市选中柜机数量
            currAreaFcboxes: [] //当前选中的城市柜机
        },

        //当前所操作的数据
        currData: {
            isShowPhoneNumber: true, //是否显示手机号码及验证码
            userOrderType: 3, //是否新用户 2 = 是新用户  3=不是新用户
            currNearFcBoxes: [], //当前所选中的所有附近柜机
            edCodeListLen: 0, //后端所拉取的所有已选择柜机列表数量
            unitPrice: 0, //单价
            totalPrice: 0, //总价
            startTm: '0', //展示开始时间
            endTm: '0', //展示结束时间
            howDay: 0, //当前发布天数
            customerMobile: '', //手机号码
            verifyCode: '', //验证码
            //todo 以下参数从缓存中取得
            orderType: '', //广告的订单类型
            templateType: '', //广告的模板类型
            adText: '', //广告文字
            bigImgUrl: '', // 大屏图片url
            smallImgUrl: '', // 小屏图片url
            smallImgMd5: '', //小屏图片md5
            bigImgMd5: '', //大屏图片md5
            agreeProtocol: true, //默认同意
            isShowActivePrice: false,
            activityPrice: "0.00", //活动价格
            realPrice: "", //实际单价
            priceText: "", //活动名称
            limitBoxCount: "", //柜机限制
            limitDayCount: "", //上刊天数限制
            userType: "" //活动针对的用户类型 1、全部，2新用户，3老用户
        },

        //获取按展示时间配置的价格信息
        showActivity: [],
        //区域柜机每天价格
        showAreaPriceInfo: [],
        //区域柜机价格展示信息
        showAreaPriceMsg: [],
        //附近柜机每天价格
        showNearbyPriceInfo: [],
        //附近柜机价格展示信息
        showNearbyPriceMsg: [],

        //iscroll对象
        iscrollObj: {
            nearBoxObj: '',
            agreement: ""
        },

        //城市选择对象
        selectCity: {
            showCitySelect: false,
            cityDataAll: cityData4.normal_city, //普通城市数据
            hotCityArr: cityData4.hot_city, //热门城市数据
            selectProvince: [], //点击省份，对应省份数据
            bannerSwiper: "", //滑动组件
            selectProvinceName: "" //选中的省份
        },


        //获取每天的价格,及活动信息
        getDailyPrice: function(time, boxNum, days) {

            var priceInfoList = new Array(),
                obj = {};
            for (var i = 0; i < model.showActivity.length; i++) {
                var dataTime = model.showActivity[i].dateStr,
                    activityName = model.showActivity[i].priceText,
                    activityPrice = (model.showActivity[i].activityPrice / 100).toFixed(2),
                    limitBoxCount = model.showActivity[i].limitBoxCount,
                    userType = model.showActivity[i].userType;

                //符合按展示时间计价
                if (dataTime == time && (boxNum <= limitBoxCount || limitBoxCount == '') && (userType == model.currData.userOrderType || userType == 1)) {
                    obj.dataTime = time;
                    obj.activityPrice = activityPrice;
                    obj.activityName = activityName;
                    obj.base = false;
                    priceInfoList.push(obj);
                }
            }
            //如果没有按展示时间配置价格,价格配置默认/按下单时间
            if (priceInfoList.length == 0) {
                var boxFlag = boxNum <= model.currData.limitBoxCount || model.currData.limitBoxCount == '',
                    userTypeFlag = model.currData.userOrderType == model.currData.userType || model.currData.userType == 1,
                    datFlag = days <= model.currData.limitDayCount,
                    priceFlag = model.currData.activityPrice != "";
                //符合按下单时间配置价格
                if (boxFlag && userTypeFlag && datFlag && priceFlag) {
                    obj.dataTime = time;
                    obj.activityPrice = model.currData.activityPrice;
                    obj.activityName = model.currData.priceText;
                    obj.base = true;
                    priceInfoList.push(obj);
                } else {
                    //不符合按下单时间配置价格，走默认价格
                    obj.dataTime = time;
                    obj.activityPrice = model.currData.unitPrice;
                    obj.activityName = "原价";
                    obj.base = true;
                }

            }
            return obj;
        },

        //构造每天的价格数据
        getShowPriceInfo: function(list) {
            var maxLength = list.length,
                startTime = list[0].dataTime,
                endTime = "",
                showPriceInfo = [],
                baseName = "",
                basePrice = "";

            for (var i = 0; i < maxLength; i++) {
                if (list[i].base) {
                    basePrice = list[i].activityPrice;
                    baseName = list[i].activityName;
                }
                if (i < maxLength - 1) {
                    if (list[i].activityName == list[i + 1].activityName) {
                        endTime = list[i + 1].dataTime;
                    } else {
                        endTime = list[i].dataTime;
                        var msg = list[i].activityName + " ：" + list[i].activityPrice + "/元/台/天";
                        if (startTime == endTime) {
                            msg = startTime.substring(5) + "展示 " + msg
                        } else {
                            msg = startTime.substring(5) + "至" + endTime.substring(5) + "展示 　　" + msg;
                        }
                        if (!list[i].base) {
                            showPriceInfo.push(msg);
                        }
                        startTime = list[i + 1].dataTime;
                    }
                } else {
                    if (i == 0) {
                        var startTime = list[i].dataTime;
                        var msg = startTime.substring(5) + "展示 　　　" + list[i].activityName + " ：" + list[i].activityPrice + "/元/台/天";
                        if (!list[i].base) {
                            showPriceInfo.push(msg);
                        }
                    } else {
                        if (list[i].activityName != list[i - 1].activityName) {
                            var startTime = list[i].dataTime;
                            var msg = startTime.substring(5) + "展示 　　　" + list[i].activityName + " ：" + list[i].activityPrice + "/元/台/天";
                            if (!list[i].base) {
                                showPriceInfo.push(msg);
                            }
                        } else {
                            var endTime = list[i].dataTime;
                            var msg = startTime.substring(5) + "至" + endTime.substring(5) + "展示 　　" + list[i].activityName + " ：" + list[i].activityPrice + "/元/台/天";
                            if (!list[i].base) {
                                showPriceInfo.push(msg);
                            }
                        }
                    }

                }
            }

            if (basePrice != "") {
                var baseMsg = "";
                if (showPriceInfo.length == 0) {
                    baseMsg = baseName + "：" + basePrice + "/元/台/天";
                } else {
                    baseMsg = "其他展示日期   　　" + baseName + " ： " + basePrice + "/元/台/天";
                }
                showPriceInfo.push(baseMsg);
            }
            return showPriceInfo;
        },

        areaPrice: function() {
            model.showAreaPriceInfo = [];
            model.showAreaPriceMsg = [];
            var day = model.currData.howDay,
                boxNum = model.currAreaDate.edCodeListLen;

            var testList = model.getDayList();
            for (var i in testList) {
                var data = model.getDailyPrice(testList[i], boxNum, day);
                model.showAreaPriceInfo.push(data);
            }
            model.showAreaPriceMsg = model.getShowPriceInfo(model.showAreaPriceInfo);
            console.log(model.showAreaPriceMsg);
            model.currAreaDate.totalPrice = model.countTotalPrice(model.showAreaPriceInfo, boxNum);
        },

        nearbyPrice: function() {

            model.showNearbyPriceInfo = [];
            model.showNearbyPriceMsg = [];
            var day = model.currData.howDay,
                boxNum = model.currData.edCodeListLen;

            var testList = model.getDayList();
            for (var i in testList) {
                var data = model.getDailyPrice(testList[i], boxNum, day);
                model.showNearbyPriceInfo.push(data);
            }
            model.showNearbyPriceMsg = model.getShowPriceInfo(model.showNearbyPriceInfo);
            model.currData.totalPrice = model.countTotalPrice(model.showNearbyPriceInfo, boxNum);
        },

        getDayList: function() {
            var startTime = new Date(model.currData.startTm).getTime(),
                endTime = new Date(model.currData.endTm).getTime(),
                arrayList = new Array();
            var num = (endTime - startTime) / 86400000;
            for (var i = 0; i <= num; i++) {
                var dataTime = (new Date(startTime + i * 86400000)).format("yyyy-MM-dd");
                arrayList.push(dataTime);
            }
            return arrayList;
        },

        //计算总价
        countTotalPrice: function(priceInfo, boxNum) {
            var days = model.currData.howDay;
            var totalPrice = 0;
            for (var i = 0; i < days; i++) {
                var singlePrice = priceInfo[i].activityPrice;
                singlePrice = parseFloat(singlePrice);
                totalPrice = singlePrice * boxNum + totalPrice;
            }
            if (totalPrice > 10000) {
                totalPrice = Math.ceil(totalPrice);
                return totalPrice;
            } else {
                return totalPrice.toFixed(2);
            }

        },

        //tab切换 按附件选择柜机
        switchFirstTabs: function() {
            model.isShowFirstTab = true;
            model.isShowSecondTab = false;
        },

        //tab切换 按城市选择柜机
        switchSecondTabs: function() {
            model.isShowFirstTab = false;
            model.isShowSecondTab = true;
        },

        //页面跳转 添加快递柜
        goPage: function(pageName) {
            var machine = model.getPath();
            window.location.href = machine + '/staticResource/wechat/activity/advertisement/pages/nearbyBoxSelectView.html?v=' + (new Date().getTime());
        },

        //选择柜机
        select: function(el) {
            /*选中新增*/
            if (el.state == 0) {
                addEdcodeCache(el);
                /*未选中删除*/
            } else if (el.state == 3) {
                removeEdcodeCache(el);
            }
            //选中新增
            function addEdcodeCache(el) {
                if (model.isComporateing) {
                    return;
                }
                model.isComporateing = true;
                var param = [{
                    edcode: el.edcode,
                    throwAddress: el.throwAddress
                }];
                var data = JSON.stringify(param);
                dataServices.get('mallbackend').addEdcodeCache({
                    data: data
                }).done(function(resp) {
                    if (resp.errorCode == model.ajaxCode.ok) {
                        model.currData.currNearFcBoxes.ensure(el);
                        model.currData.edCodeListLen = model.currData.edCodeListLen + 1;
                        el.state = 3;

                        //计算价格
                        /*model.specailPrice();
                         model.calPrice();*/
                        model.areaPrice();
                        model.nearbyPrice();

                    } else {
                        common.showTips(resp.errorMsg)
                    }
                }).fail(function(resp) {

                }).always(function() {
                    model.isComporateing = false;
                });
            }
            //未选中删除
            function removeEdcodeCache(el) {
                if (model.isComporateing) {
                    return;
                }
                model.isComporateing = true;
                var param = [el.edcode];
                var data = JSON.stringify(param);
                dataServices.get('mallbackend').removeEdcodeCache({
                    data: data
                }).done(function(resp) {
                    if (resp.errorCode == model.ajaxCode.ok) {
                        model.currData.currNearFcBoxes.remove(el);
                        model.currData.edCodeListLen = model.currData.edCodeListLen - 1;
                        el.state = 0;
                        //如果删除所有  则购物车隐藏
                        if (model.currData.edCodeListLen <= 0) {
                            model.showShoppingDialog = false;
                        }
                        //计算价格
                        /*model.specailPrice();
                        model.calPrice();*/
                        model.areaPrice();
                        model.nearbyPrice();
                    } else {
                        common.showTips(resp.errorMsg)
                    }
                }).fail(function(resp) {

                }).always(function() {
                    model.isComporateing = false;
                });
            }
        },

        //附近柜机购物车切换
        switchShoppingDialog: function() {
            model.showShoppingDialog = !model.showShoppingDialog;
            if (model.currData.edCodeListLen <= 0) {
                model.showShoppingDialog = false;
            }
        },

        //城市选择柜机购物车切换
        switchAreaShoppingDialog: function() {
            model.showAreaShoppingDialog = !model.showAreaShoppingDialog;
            if (model.currAreaDate.edCodeListLen <= 0) {
                model.showAreaShoppingDialog = false;
            }
        },

        //获取附近柜机
        findNearbyFcBoxes: function() {
            //初始化地理定位
            function getPosition() {
                var map, geolocation;
                common.showLoading("正在获取柜机信息");
                //加载地图，调用浏览器定位服务
                map = new AMap.Map('container', {
                    resizeEnable: true
                });
                map.plugin('AMap.Geolocation', function() {
                    geolocation = new AMap.Geolocation({
                        enableHighAccuracy: true, //是否使用高精度定位，默认:true
                        timeout: 10000, //超过10秒后停止定位，默认：无穷大
                        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                        zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                        buttonPosition: 'RB'
                    });
                    map.addControl(geolocation);
                    geolocation.getCurrentPosition();
                    AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
                    AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
                });
            }
            //地理定位解析成功
            function onComplete(data) {
                convert(data.position.getLng(), data.position.getLat());

                var myPosition = data.position; //获取位置
                var MGeocoder;
                //加载地理编码插件
                AMap.service(["AMap.Geocoder"], function() {
                    MGeocoder = new AMap.Geocoder({
                        radius: 1000,
                        extensions: "all"
                    });
                    //逆地理编码
                    MGeocoder.getAddress(myPosition, function(status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            var addrCmpt = result.regeocode.addressComponent;
                            var province = addrCmpt.province;
                            var city = addrCmpt.city;
                            model.initAreaData(province, city);
                        } else {

                        }
                    });
                });
            }
            //地理定位解析错误
            function onError(msg) {
                var text = "";
                switch (msg) {
                    case "NOT_SUPPORTED":
                        text = "当前浏览器不支持定位功能";
                        break;
                    case "PERMISSION_DENIED":
                        text = "您关闭了地理定位功能，请手动打开";
                        break;
                    case "POSITION_UNAVAILABLE":
                        text = "无法获取当前位置";
                        break;
                    case "TIMEOUT":
                        text = "定位超时，请刷新重试";
                        break;
                    default:
                        text = "您关闭了地理定位功能，请手动打开";
                        break;
                }
                common.hideLoading();
                common.showTips(text);
            }
            //利用定位获取柜机列表
            function convert(lon, lat) {
                new AMap.convertFrom([lon, lat], "gps", function(status, result) {
                    if (status.toLowerCase() == "complete" && result.info.toLowerCase() == "ok") {
                        getList(result.locations[0].lng, result.locations[0].lat);
                    }
                });
            }
            //获取柜机列表具体方法
            function getList(lon, lat) {
                dataServices.get('mallbackend').findNearbyFcBoxes({
                    data: {
                        longTitude: lon,
                        latiTitude: lat,
                        pageNo: 1,
                        pageSize: 100,
                        random: new Date().getTime()
                    }
                }).done(function(resp) {
                    if (resp.errorCode != model.ajaxCode.ok) {
                        return false;
                    }
                    model.initData.nearFcBoxes = resp.data;
                    avalon.each(model.initData.nearFcBoxes, function(index, el) {
                        if (el.state == 3) {
                            model.currData.currNearFcBoxes.push(el);
                        }
                    });
                    model.getEdcodeList();
                }).fail(function(resp) {
                    common.showTips('网络异常');
                    model.getEdcodeList();
                }).always(function() {
                    common.hideLoading();
                });
            }
            getPosition();
        },

        //判断手机号是否有绑定
        getUserMobile: function() {
            dataServices.get('mallbackend').getUserMobile().done(function(resp) {
                //判断是否存在手机号
                if (resp.errorCode == model.ajaxCode.ok && (resp.data.userMoible).length > 0) {
                    model.currData.customerMobile = resp.data.userMoible;
                    model.currData.isShowPhoneNumber = false;
                }
                //判断是否新用户
                model.currData.userOrderType = resp.data.isNewOrder == 'true' ? 2 : 3;
            }).fail(function(resp) {

            });
        },

        //获取验证码
        getVerifyCode: function(phoneNum) {
            var cellPhoneReg = /^((\+?86)|(\(\+86\)))?(1[345678][0123456789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/; //手机号码
            var isPhoneOk = cellPhoneReg.test(phoneNum);
            if (phoneNum.length == 0) {
                common.showTips('请输手机号码');
                return false;
            }
            if (!isPhoneOk) {
                common.showTips('请输入正确的手机号码');
                return false;
            }
            if (model.isSendClick) {
                return;
            }
            dataServices.get('mallbackend').getVerifyCode({
                data: {
                    mobilePhone: phoneNum
                }
            }).done(function(resp) {

            }).fail(function(resp) {

            }).always(function(resp) {
                if (resp.responseText == "success") {
                    var timeCount = 90;
                    if (!model.timerId) {
                        var countTimmer = function() {
                            model.sendMessageText = "再次发送(" + (--timeCount) + ")";
                            if (!timeCount) {
                                model.timerId = 0;
                                model.isSendClick = false;
                                model.sendMessageText = "发送验证码";
                                clearInterval(model.timerId);
                                return;
                            }
                            model.timerId = setTimeout(countTimmer, 1000)
                        };
                        countTimmer();
                    }
                    model.isSendClick = true;
                } else {
                    common.showTips("请稍后重新获取验证码");
                }
            })
        },

        //初始化时间组件
        initDate: function() {
            //TODO 设置初始时间
            var currHour = new Date().getHours();
            var oneDay = 86400000; //定义一天的时长
            model.currData.startTm = (new Date(new Date().getTime() + (currHour >= 19 ? oneDay * 2 : oneDay))).format("yyyy-MM-dd");
            model.currData.endTm = (new Date(new Date(model.currData.startTm).getTime() + oneDay * 6)).format("yyyy-MM-dd");
            var calendarStart = new lCalendar(); //开始时间实例
            var calendarEnd = new lCalendar(); //结束时间实例
            var startTimeDom = $('#startTime'); //开始时间DOM
            var endTimeDom = $('#endTime'); //结束时间DOM
            //TODO 设置开始时间  设置时间跨度两个月
            var startTmMaxConfig = new Date(new Date().getFullYear() + 82 + '-12-31').getTime() - new Date().getTime(); //开始时间跨度为今年一年
            var startTmMin = (new Date(new Date().getTime() + (currHour >= 19 ? oneDay * 2 : oneDay))).format("yyyy-MM-dd"); //开始-起始时间
            var startTmMax = (new Date(new Date().getTime() + oneDay * 83)).format("yyyy-MM-dd"); //开始-结束时间
            //TODO 设置结束时间
            //根据当天判断向后多少天
            var numDate = oneDay; //默认增加一天
            //如果超过18点
            if (currHour >= 19) {
                numDate = oneDay * 2;
            }
            var endTmMin = (new Date(new Date(model.currData.startTm).getTime())).format("yyyy-MM-dd"); //结束-起始时间
            var endTmMax = (new Date(new Date(model.currData.startTm).getTime() + oneDay * 6)).format("yyyy-MM-dd"); //结束-结束时间
            //TODO 设置滑动回掉
            startTimeDom.attr('data-lcalendar', startTmMin + "," + startTmMax); //设置起始时间
            calendarStart.init({
                'trigger': '#startTime',
                'type': 'date',
                'callBack': function(_this, _curr) {
                    model.currData.startTm = _curr.yy + "-" + (_curr.mm < 10 ? '0' + _curr.mm : _curr.mm) + "-" + (_curr.dd < 10 ? '0' + _curr.dd : _curr.dd);
                    endTmMin = (new Date(new Date(model.currData.startTm).getTime())).format("yyyy-MM-dd"); //结束-起始时间
                    endTmMax = (new Date(new Date(model.currData.startTm).getTime() + oneDay * 6)).format("yyyy-MM-dd"); //结束-结束时间
                    model.currData.endTm = endTmMin;
                    endTimeDom.attr('data-lcalendar', endTmMin + ',' + endTmMax);
                    calendarEnd.init({
                        'trigger': '#endTime',
                        'type': 'date',
                        'callBack': function(_this, _curr) {
                            model.currData.endTm = _curr.yy + "-" + (_curr.mm < 10 ? '0' + _curr.mm : _curr.mm) + "-" + (_curr.dd < 10 ? '0' + _curr.dd : _curr.dd);
                        }
                    });
                }
            });
            endTimeDom.attr('data-lcalendar', endTmMin + "," + endTmMax);
            calendarEnd.init({
                'trigger': '#endTime',
                'type': 'date',
                'callBack': function(_this, _curr) {
                    model.currData.endTm = _curr.yy + "-" + (_curr.mm < 10 ? '0' + _curr.mm : _curr.mm) + "-" + (_curr.dd < 10 ? '0' + _curr.dd : _curr.dd);
                    //countDay(model.currData.startTm,model.currData.endTm);
                }
            });
            //TODO 计算天数
            countDay(model.currData.startTm, model.currData.endTm);

            function countDay(startTm, endTm) {
                var howTime = (new Date(endTm).getTime() - new Date(startTm).getTime()) + 86400000;
                model.currData.howDay = Math.round(howTime / 86400000);
                //model.calPrice();
                model.areaPrice();
                model.nearbyPrice();
            }
        },

        //点位价格查询及计算
        queryPrice: function() {
            dataServices.get('mallbackend').queryPrice({
                data: {
                    tempId: model.currData.templateType
                }
            }).done(function(resp) {
                //判断是否存在手机号
                if (resp.errorCode == model.ajaxCode.ok) {
                    model.currData.unitPrice = resp.data.defaultPrice / 100;
                    if (resp.data.activityPrice == null || resp.data.activityPrice == '') {
                        model.currData.activityPrice = '';
                    } else {
                        model.currData.activityPrice = resp.data.activityPrice / 100;
                    }
                    model.currData.priceText = resp.data.priceText;
                    model.currData.userType = resp.data.userType;
                    model.currData.limitDayCount = resp.data.limitDayCount; //散单天数限制
                    model.currData.limitBoxCount = resp.data.limitBoxCount; //散单柜机限制
                    if (resp.data.showTimePirce) {
                        model.showActivity = JSON.parse(resp.data.showTimePirce); //活动价格配置
                    }
                    model.findNearbyFcBoxes();
                    model.getEdcodeList();
                }
            }).fail(function(resp) {

            });
        },

        //获取已选柜机列表
        getEdcodeList: function() {
            dataServices.get('mallbackend').getEdcodeList().done(function(resp) {
                //model.specailPrice();
                model.areaPrice();
                //判断是否存在柜机
                if (resp.errorCode == model.ajaxCode.ok && (resp.data && (resp.data).length > 0)) {
                    model.currData.edCodeListLen = (resp.data).length;
                    //计算价格
                    //model.calPrice();
                    model.areaPrice();
                    model.nearbyPrice();
                }
            }).fail(function(resp) {
                //TODO 失败重选
                layer.open({
                    content: '小主网络开了小差，请重新选择……',
                    btn: '重新选择',
                    shadeClose: false,
                    yes: function() {
                        model.removeAllCache();
                        layer.closeAll();
                        window.location.reload();
                    }
                });
            });
        },

        //删除所有已选柜机
        removeAllCache: function() {

            dataServices.get('mallbackend').removeAllCache().done(function(resp) {
                //删除所有已选柜机成功
                if (resp.errorCode == model.ajaxCode.ok) {
                    var listLength = model.currData.currNearFcBoxes.length;
                    //改变已选柜机状态
                    for (var i = 0; i < listLength; i++) {
                        model.currData.currNearFcBoxes[i].state = 0;
                    }
                    //清空数组
                    model.currData.currNearFcBoxes.splice(0, listLength);
                    model.currData.edCodeListLen = 0;
                    //计算价格
                    /*model.specailPrice();
                    model.calPrice();*/
                    model.areaPrice();
                    model.nearbyPrice();
                    //如果删除所有  则购物车隐藏
                    if (model.currData.edCodeListLen <= 0) {
                        model.showShoppingDialog = false;
                    }
                }
            }).fail(function(resp) {

            });
        },

        //切换域名
        getPath: function() {
            switch (location.hostname) {
                //TODO 第一套测试环境
                case "fengchaobox.sit.sf-express.com":
                    return "http://fengchaobox.sit.sf-express.com/dropbox";
                    break;
                    //TODO 第二套测试环境
                case "internetweb-sit2.fcbox.com":
                    return "http://internetweb-sit2.fcbox.com/dropbox";
                    break;
                    //TODO 第三套测试环境
                case "testedms.fcbox.com":
                    return "http://testedms.fcbox.com";
                    break;
                    //TODO 生产环境
                case "edms.fcbox.com":
                    return "http://edms.fcbox.com";
                    break;
                    //TODO 默认本机
                default:
                    return 'http://' + location.hostname + ':' + location.port
            }
        },

        //判断是否可下单
        judgeOrder: function() {

            var dayLen = model.currData.howDay; //发布时长
            var agreeProtocol = model.currData.agreeProtocol; //是否同意协议
            var customerMobile = model.currData.customerMobile; //手机号码
            var verifyCode = model.currData.verifyCode; //验证码

            if (dayLen == 0) {
                common.showTips('请选择发布时间~');
                return false;
            }
            if (model.currData.isShowPhoneNumber) {
                var cellPhoneReg = /^((\+?86)|(\(\+86\)))?(1[345678][0123456789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/; //手机号码
                if (customerMobile.length == 0) {
                    common.showTips('请输入手机号码~');
                    return false;
                } else if (!cellPhoneReg.test(customerMobile)) {
                    common.showTips("手机号码不正确");
                    return false;
                }

                if (verifyCode.length == 0) {
                    common.showTips('请输入验证码');
                    return false;
                }
            }

            if (!agreeProtocol) {
                common.showTips('未同意发布协议');
                return false;
            }
            return true;
        },

        //创建订单(首先获取已选列表，然后再下单)
        advertisement: function() {
            var boxLen = (model.currData.currNearFcBoxes).length + model.currData.edCodeListLen; //已选柜机数量
            if (boxLen == 0) {
                common.showTips('请选择至少一个丰巢柜~');
                return false;
            }
            var flag = model.judgeOrder();
            if (!flag) {
                return false;
            }
            common.showLoading();
            //调用创建订单
            dataServices.get('mallbackend').advertisement({
                data: {
                    customerMobile: model.currData.customerMobile,
                    verifyCode: model.currData.verifyCode,
                    startTm: model.currData.startTm,
                    endTm: model.currData.endTm,
                    orderType: model.currData.orderType,
                    templateType: model.currData.templateType,
                    adText: model.currData.adText,
                    bigImgUrl: model.currData.bigImgUrl,
                    smallImgUrl: model.currData.smallImgUrl,
                    smallImgMd5: model.currData.smallImgMd5,
                    bigImgMd5: model.currData.bigImgMd5
                }
            }).done(function(resp) {
                //判断是否存在手机号
                common.hideLoading();
                var machine = model.getPath();
                if (resp.errorCode == model.ajaxCode.ok) {
                    localStorage.setItem('advertisement', JSON.stringify(resp.data));
                    var orderOk = (resp.data.selectedCount - resp.data.canPutCount);
                    var url = '';
                    switch (orderOk) {
                        //全部成功
                        case 0:
                            url = machine + "/hibox/weixinpay/wall_partLockFail.html?v=" + (new Date().getTime());
                            window.location.href = url;
                            break;
                        case resp.data.selectedCount:
                            url = machine + '/staticResource/wechat/activity/advertisement/pages/lockBoxFail.html'; //全部失败
                            window.location.href = url;
                            break;
                        default:
                            url = machine + "/hibox/weixinpay/wall_partLockFail.html?v=" + (new Date().getTime()); //部分成功
                            window.location.href = url;
                            break;
                    }

                } else if (resp.errorCode == "030200002") {
                    common.showTips("验证码错误");
                    return
                } else if (resp.errorCode == "030200003") {
                    common.showTips("验证码过期");
                    return
                } else {
                    window.location.href = machine + '/staticResource/wechat/activity/advertisement/pages/lockBoxFail.html';
                }
            }).fail(function() {
                common.showTips("网络异常")
            }).always(function() {});
        },

        //创建按批量城市订单
        createMultiOrder: function() {
            var boxLen = model.currAreaDate.edCodeListLen; //已选柜机数量
            if (boxLen == 0) {
                common.showTips('请选择至少一个丰巢柜~');
                return false;
            }
            var flag = model.judgeOrder();
            if (!flag) {
                return false;
            }
            common.showLoading();
            var data = {};
            data.customerMobile = model.currData.customerMobile;
            data.verifyCode = model.currData.verifyCode;
            data.startTm = model.currData.startTm;
            data.endTm = model.currData.endTm;
            data.orderType = model.currData.orderType;
            data.templateType = model.currData.templateType;
            data.adText = model.currData.adText;
            data.bigImgUrl = model.currData.bigImgUrl;
            data.smallImgUrl = model.currData.smallImgUrl;
            data.smallImgMd5 = model.currData.smallImgMd5;
            data.bigImgMd5 = model.currData.bigImgMd5;
            var dataObj = JSON.stringify(data);
            dataServices.get('mallbackend').createBatchOrder({
                data: dataObj
            }).done(function(resp) {
                common.hideLoading();
                var machine = model.getPath();
                if (resp.errorCode == model.ajaxCode.ok) {
                    localStorage.setItem('areaOrder', JSON.stringify(resp.data));
                    localStorage.setItem('advertisement', JSON.stringify(resp.data));
                    var url = '';
                    var orderResult = resp.data.orderResult;
                    switch (orderResult) {
                        //成功
                        case 1:
                            url = machine + "/hibox/weixinpay/wall_ordersubmit.html?v=" + (new Date().getTime()); //部分成功
                            //url = "http://10.118.164.191:9876/advertisement/pages/weixinpay/wall_ordersubmit.html";
                            window.location.href = url;
                            break;
                            //失败
                        case 2:
                            url = machine + '/staticResource/wechat/activity/advertisement/pages/lockBoxFail.html'; //全部失败
                            window.location.href = url;
                            break;
                    }
                } else {
                    common.showTips(resp.errorMsg);
                }
            }).fail(function() {
                common.showTips("网络异常");
            }).always(function() {});
        },

        //取缓存数据
        getLocalStorageParam: function() {
            //TODO 初始设置end
            model.currData.orderType = localStorage.getItem('orderType');
            model.currData.templateType = localStorage.getItem('templateType');
            model.currData.adText = localStorage.getItem('adText');
            model.currData.bigImgUrl = localStorage.getItem('bigImgUrl');
            model.currData.smallImgUrl = localStorage.getItem('smallImgUrl');
            model.currData.smallImgMd5 = localStorage.getItem('smallImgMd5');
            model.currData.bigImgMd5 = localStorage.getItem('bigImgMd5');

            //TODO 初始设置start
            localStorage.setItem('orderType', model.currData.orderType); // 广告的订单类型 1=祝福类，2=爱情类，3=商业类，4=弹幕
            localStorage.setItem('templateType', model.currData.templateType); // 模板类型 1=祝福1，2=祝福2，3=祝福3，4=爱情1，5=爱情2，6=爱情3
            localStorage.setItem('adText', model.currData.adText); //测试文字
            localStorage.setItem('bigImgUrl', model.currData.bigImgUrl); //大图
            localStorage.setItem('smallImaUrl', model.currData.smallImgUrl); //小图
            localStorage.setItem('smallImgMd5', model.currData.smallImgMd5);
            localStorage.setItem('bigImgMd5', model.currData.bigImgMd5);
        },

        //监听数据
        watchData: function() {},

        //iscroll实例化
        nearFcBoxesOK: function() {
            model.iscrollObj.nearBoxObj = new iscroll('#nearFcBoxesOK', {
                click: true,
                tap: true,
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true
            });
            model.iscrollObj.nearBoxObj.refresh();
        },

        //是否同意附近柜机
        agreeProtocol: function() {
            model.currData.agreeProtocol = !model.currData.agreeProtocol
        },

        //初始化
        init: function() {
            var type = getUrlParam('type');
            if (type) {
                model.isShowFirstTab = true; //默认附近柜机选择
                model.isShowSecondTab = false; //按城市选择柜机隐藏
            }
            $('.showDialog').removeClass("none");
            model.getLocalStorageParam();
            model.getEdcodeList();
            model.getUserMobile();
            model.queryPrice();
            model.initDate();
            model.initAgreementScroll();
        },

        //按城市选柜机列表touch事件
        touchStar: function(el) {
            var scrollTop = el.target.scrollTop;
            var scrollHeight = el.target.scrollHeight;
            var divHeight = this.clientHeight;
            if ((scrollTop + scrollHeight) >= divHeight) {
                el.preventDefault();
            }
        },

        //模拟滚动条
        initAgreementScroll: function() {
            model.iscrollObj.agreement = new iscroll('#agreement', {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true
            });
        },

        //模拟弹窗显示
        showCover: function() {
            model.isShowCover = true;
            setTimeout(function() {
                model.iscrollObj.agreement.refresh();
            }, 100)
        },

        //模拟弹窗隐藏
        hideCover: function() {
            model.isShowCover = false;
        },

        //区域选柜机相关操作
        //初始化区域选柜机相关操作
        initAreaData: function(province, city) {
            model.clearRegionPointCar(province, city); //清空按城市选择购物车
            model.initcitySwiper();
        },
        //查询区域柜机
        queryRegionPoints: function(province, city) {
            dataServices.get('mallbackend').queryRegionPoints({
                data: {
                    provinceName: province,
                    cityName: city
                }
            }).done(function(resp) {
                if (resp.errorCode != model.ajaxCode.ok) {
                    if (resp.errorCode == '030300003') {
                        common.showTips("你选择的地区没有快递柜哦");
                    }
                    return false;
                }
                //清空区域列表
                var areaFcBoxLength = model.initData.areaFcBox.length;
                model.initData.areaFcBox.splice(0, areaFcBoxLength);

                var resultList = resp.data;
                for (var j = 0; j < resultList.length; j++) {
                    var mainObj = {},
                        subArr = [];
                    mainObj.name = resultList[j].cityName;
                    mainObj.type = 1;
                    var resSubList = resultList[j].regionPoints,
                        count = 0;
                    for (var i = 0; i < resSubList.length; i++) {
                        var subObj = {};
                        subObj.type = 2;
                        subObj.province = resSubList[i].provinceName;
                        subObj.city = resSubList[i].cityName;
                        subObj.district = resSubList[i].districtName;
                        subObj.pointNum = resSubList[i].pointNum;
                        subObj.state = resSubList[i].state; //0未选中，1选中
                        subArr.push(subObj);
                    }
                    if (count == resSubList.length) {
                        mainObj.state = 1;
                    } else {
                        mainObj.state = 0;
                    }
                    mainObj.list = subArr;
                    model.initData.areaFcBox.push(mainObj);
                }
                //计算选中的柜机数
                model.getSelctNum();

            }).fail(function(resp) {

            }).always(function(resp) {

            })
        },

        //选择区域柜机
        selectArea: function(el, index) {
            var data = [];
            //区域批量新增
            if (el.type == 1) {
                var param = el.list;
                for (var i = 0; i < param.length; i++) {
                    var obj = {};
                    obj.provinceName = param[i].province;
                    obj.cityName = param[i].city;
                    obj.districtName = param[i].district;
                    obj.pointNum = param[i].pointNum;
                    data.push(obj);
                }
            }
            //新增
            if (el.type == 2) {
                var obj = {};
                obj.provinceName = el.province;
                obj.cityName = el.city;
                obj.districtName = el.district;
                obj.pointNum = el.pointNum;
                data.push(obj);
            }
            /*选中新增*/
            if (el.state == 0) {
                var cityArray = model.isOverFive();
                //添加城市限制
                if (cityArray.length == 5) {
                    var cityName = el.city;
                    if ((cityArray.indexOf(cityName)) == -1) {
                        common.showTips("最多只能投放5个城市哦");
                        return false;
                    }
                }
                if (cityArray.length > 5) {
                    common.showTips("最多只能投放5个城市哦");
                    return false;
                }

                addRegionPointCar(data);
                /*未选中删除*/
            } else if (el.state == 1) {
                removeAreaEdcodeCache(data);
            }

            //选中新增
            function addRegionPointCar(data) {

                if (model.isComporateing) {
                    return;
                }
                model.isComporateing = true;
                data = JSON.stringify(data);
                dataServices.get('mallbackend').addRegionPointCar({
                    data: data
                }).done(function(resp) {
                    if (resp.errorCode == model.ajaxCode.ok) {
                        el.state = 1; //选中标志

                        if (el.type == 1) {
                            var boxIndex = index;
                            var dataList = model.initData.areaFcBox[boxIndex];
                            for (var i = 0; i < dataList.list.length; i++) {
                                model.initData.areaFcBox[boxIndex].list[i].state = 1;
                            }
                        }
                        //计算选中的柜机数
                        model.getSelctNum();
                    } else {
                        common.showTips(resp.errorMsg)
                    }
                }).fail(function(resp) {

                }).always(function() {
                    model.isComporateing = false;
                });
            }

            //选中删除
            function removeAreaEdcodeCache(data) {
                if (model.isComporateing) {
                    return;
                }
                model.isComporateing = true;
                data = JSON.stringify(data);
                dataServices.get('mallbackend').removeRegionPointCar({
                    data: data
                }).done(function(resp) {
                    if (resp.errorCode == model.ajaxCode.ok) {
                        el.state = 0; //未选中标志
                        if (el.type == 1) {
                            var boxIndex = index;
                            var dataList = model.initData.areaFcBox[boxIndex];
                            for (var i = 0; i < dataList.list.length; i++) {
                                model.initData.areaFcBox[boxIndex].list[i].state = 0;
                            }
                        }
                        //计算选中的柜机数
                        model.getSelctNum();
                    } else {
                        common.showTips(resp.errorMsg)
                    }
                }).fail(function(resp) {

                }).always(function() {
                    model.isComporateing = false;
                });
            }
        },

        //获取选中的数据大小
        getSelctNum: function() {
            var dataList = model.initData.areaFcBox,
                count = 0,
                totalNum = 0;
            for (var i = 0; i < dataList.length; i++) {
                var subDataList = dataList[i].list;
                for (var j = 0; j < subDataList.length; j++) {
                    var el = subDataList[j];
                    if (el.state == 1) {
                        totalNum = totalNum + el.pointNum;
                        count++;
                    }
                }
            }
            //如果选中为0,隐藏购物车
            if (count == 0) {
                model.showAreaShoppingDialog = false;
            }
            //记录已选城市数组
            model.currAreaDate.edCodeListLen = totalNum;
            //model.configPrice();
            model.areaPrice();
        },

        //清空按城市选择购物车
        clearRegionPointCar: function(province, city) {
            if (model.isComporateing) {
                return;
            }
            model.isComporateing = true;
            dataServices.get('mallbackend').clearRegionPointCar({}).done(function(resp) {
                //删除所有已选柜机成功
                if (resp.errorCode == model.ajaxCode.ok) {

                    //改变当前柜机列表选中状态
                    var dataList = model.initData.areaFcBox;
                    for (var i = 0; i < dataList.length; i++) {
                        var subData = dataList[i].list;
                        dataList[i].state = 0;
                        for (var j = 0; j < subData.length; j++) {
                            subData[j].state = 0;
                        }
                    }
                    //隐藏购物车
                    model.currAreaDate.edCodeListLen = 0;
                    model.showAreaShoppingDialog = false;
                    //model.configPrice();
                    model.areaPrice();
                }
            }).fail(function(resp) {

            }).always(function() {
                model.isComporateing = false;
                model.queryRegionPoints(province, city); //查询按城市选择柜机
            });
        },

        //初始化城市选择
        initcitySwiper: function() {
            setTimeout(function() {
                // 创建swiper对象
                var bannerSwiper = new Swiper('.swiper-banner', {
                    speed: 400,
                    onlyExternal: true,
                    loop: false /*形成环路（即：可以从最后一张图跳转到第一张图*/
                });
                model.selectCity.bannerSwiper = bannerSwiper;
            }, 500);
        },

        //添加城市
        addCity: function() {
            model.selectCity.showCitySelect = true;
        },
        //判断是否大于5个城市
        isOverFive: function() {
            var dataList = model.initData.areaFcBox,
                count = 0,
                cityArray = [];
            for (var i = 0; i < dataList.length; i++) {
                var subDataList = dataList[i].list;
                for (var j = 0; j < subDataList.length; j++) {
                    var el = subDataList[j];
                    if (el.state == 1) {
                        if (cityArray.indexOf(el.city) == -1) {
                            cityArray.push(el.city);
                            count++;
                        }
                    }
                }
            }
            return cityArray;
        },

        //选中省份
        selectedProvince: function(name, el) {
            model.selectCity.selectProvinceName = name;
            var child = el.children;
            model.selectCity.selectProvince = child;
            model.selectCity.bannerSwiper.slideTo(1, 400, false);

        },

        closeCitySelect: function() {
            model.selectCity.showCitySelect = false;
        },

        //直接选热门城市
        selectedCity: function(el) {
            var province = el.province;
            var city = el.city;
            if (city == '北京' || city == '天津' || city == '重庆' || city == '上海') {
                city = city + "市";
            }
            model.selectCity.showCitySelect = false;
            model.queryRegionPoints(province, city);
        },

        //二级选城市
        selectNormalCity: function(name) {
            var province = model.selectCity.selectProvinceName;
            var city = name;
            if (city == '北京' || city == '天津' || city == '重庆' || city == '上海') {
                city = city + "市";
            }
            model.selectCity.showCitySelect = false;
            model.queryRegionPoints(province, city);
        },

        //返回上一级
        backToSlide: function() {
            model.selectCity.bannerSwiper.slideTo(0, 400, false);
        }

    });
    model.init();
    avalon.scan();

    //订阅时间控件点击确定事件
    observer('dateSure').subscribe(function() {
        //TODO 计算天数
        countDay(model.currData.startTm, model.currData.endTm);

        function countDay(startTm, endTm) {
            var howTime = (new Date(endTm).getTime() - new Date(startTm).getTime()) + 86400000;
            model.currData.howDay = Math.round(howTime / 86400000);
            /*//计算附近柜机价格
            model.specailPrice();
            //计算按城市选着柜机价格
            model.configPrice();
            model.calPrice();*/
            model.areaPrice();
            model.nearbyPrice();
        }
    });


    function onBridgeReady() {
        // 通过下面这个API禁止分享微信  QQ
        WeixinJSBridge.call('hideOptionMenu');
    };

    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }

    function getUrlParam(key) {
        var search = location.search.substring(1);
        if (search == "") { return search; }
        var object = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        return object[key] || "";
    }

});