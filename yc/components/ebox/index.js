// components/ebox/index.js

var app = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        community: {
            type: Object,
            value: null
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        items: [],
        canpoy_info: null
    },
    attached: function() {
        this.getCommunityCanopy();
        this.getCommunityCanopyTradings();
    },
    /**
     * 组件的方法列表
     */
    methods: {
        getCommunityCanopy: function() {
            app.ajax('GET', '/terminal/community/canopy?community_id=' + this.data.community._id, null, (res) => {
                if (res.statusCode == 200) {
                    if (res.data.status == 0) {
                        let canpoy_info = res.data.data.canopys[0];
                        this.setData({
                            canpoy_info: canpoy_info
                        })
                    }
                }
            })
        },
        getCommunityCanopyTradings: function() {
            app.ajax('GET', '/terminal/community/canopy/trading?community_id=' + this.data.community._id, null, (res) => {
                if (res.statusCode == 200) {
                    if (res.data.status == 0) {
                        let items = res.data.data.skus,
                            tradings = [];
                        for (let i = 0; i < items.length; i++) {
                            items[i].trading.remnant_num =this.countNum(items[i].ebox_skus);
                            items[i].trading.price = items[i].price;
                            items[i].trading.discount_price = items[i].discount_price;
                            items[i].trading.vip_price = items[i].vip_price;
                            if (items[i].trading.images.length) {
                                items[i].trading.image_src = 'https://img.aimoge.com/' + items[i].trading.images[0].substring(0, 28);
                            } else {
                                items[i].trading.image_src ='https://img.aimoge.com/FhuKquE41_VdEbgu9ZkjYBMUVqwn';
                            }
                            tradings.push(items[i].trading)
                        }

                        this.setData({
                            items: tradings
                        })
                    }
                }
            })
        },
        countNum: function(data) {
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                sum += data[i].num
            }
            return sum;
        }
    }
})