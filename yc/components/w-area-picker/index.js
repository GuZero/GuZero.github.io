let app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: { //控制area_select显示隐藏
            type: Boolean,
            value: false
        },
        maskShow: { //是否显示蒙层
            type: Boolean,
            value: true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        provinces: null,
        citys: null,
        areas: null,
        current_city: [{
            name: "市辖区",
            pid: 11,
            province: "北京市",
            type: 1,
            _id: 1101
        }],
        city_id: 1101,
        current_area: [],
        value: [0, 0, 0],
        province: '北京市',
        city: '北京市',
        area: '东城区'
    },
    attached: function() {
        this.getProvince();
        this.getCity();
        this.getDistrict(this.data.city_id);
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleAreaChange: function(e) {
            let value = e.detail.value,
                current_area = [],
                current_city = [];
            current_city = this.data.citys.filter(item => {
                return this.data.provinces[value[0]]._id === item.pid;
            })
            if (current_city.length < 1) {
                current_area.push(this.data.provinces[value[0]]);
                current_city.push(this.data.provinces[value[0]]);
                this.setData({
                    current_city: current_city,
                    current_area: current_area
                })
            } else {
                this.setData({
                    current_city: current_city,
                    value: value
                })
                this.getDistrict(this.data.current_city[value[1]]._id);
            }
            /**
             * 滚动的是省
             * 省改变 市、区都不变
             */
        },
        /**
         * 确定按钮的点击事件
         */
        handleAreaSelect: function(e) {
            let myEventDetail = e; // detail对象，提供给事件监听函数
            let myEventOption = {}; // 触发事件的选项
            this.triggerEvent('sureSelectArea', myEventDetail, myEventOption)
        },
        /**
         * 取消按钮的点击事件
         */
        handleAreaCancle: function(e) {
            this.setData({
                show: false
            })
        },
        getProvince: function(e) { //省份
            app.ajax('GET', '/province', null, (res) => {
                if (res.data.status == 0) {
                    this.setData({
                        provinces: res.data.data.provinces
                    })
                }
            }, (err) => {
                app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
            })
        },
        getCity: function(e) { //城市
            app.ajax('GET', '/city', null, (res) => {
                if (res.data.status == 0) {
                    this.setData({
                        citys: res.data.data.citys
                    })
                }
            }, (err) => {
                app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
            })
        },
        getDistrict: function(cid) { //地区
            app.ajax('GET', '/district?cid=' + cid, null, (res) => {
                if (res.data.status == 0) {
                    let districts = res.data.data.districts;
                    this.setData({
                        current_area: districts
                    })
                }
            }, (err) => {
                app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
            })
        }
    }
})