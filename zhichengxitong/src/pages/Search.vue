<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44 fixed",
            placeholder="搜索手机号",
            v-model="terminalName",
            @changeCallback="searchByKey"
        )
        div.mt44.pt50.pb60
           div.pd_16
                div.item 搜索结果：共
                    span.c_b &nbsp{{num}} 
                    条 
                div.img(v-if="flag")
                 img( src="//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp" width="100%" height="100%")
                 p.c_g(style="text-align: center") 暂无搜索结果
                div.list(v-for="d in result" v-if="!flag")
                    div
                       label.c_g1 订单状态：
                       lable {{d.state}}
                    div
                       label.c_g1 存件时间：
                       lable {{d.delivery_at}}
                    div
                       label.c_g1 取件时间：
                       lable {{d.fetch_at}}
                    div
                       label.c_g1 用户手机：
                       lable {{d.fetch_at}}          
                    div.num
                        span(style="font-size:10px") 
                            label.c_g1 箱门号编码： 
                            lable 11111
                        span(style="font-size:10px")    
                            label.c_g1 取件编码：
                            lable 1111    
            //DataLoading(ref="loading")
        
</template>
<!--FooterBar(:footerconfig="footerconfig")-->
<script>
    import HeaderBar from '../components/common/Header'
    //    import FooterBar from '../components/common/Footer'
    import Search from '../components/common/Search'
    import DataLoading from '../components/common/DataLoading'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                //                bodyBg: 'gray',
                pageTitle: '运营支撑系统',
                footerconfig: {
                    isterminal: true
                },
                terminalName: '',
                flag: true,
                num: '0',
                result: [],


            }
        },
        components: {
            HeaderBar,
            //            FooterBar,
            Search,
            DataLoading
        },
        created() {
            this.result = [{
                order_id: "201704251805210250200013", // 单号
                state: "用户取出", // 收件状态
                delivery_at: "2017-04-25 18:05:21", // 派件时间
                fetch_at: "2017-04-26 16:05:37", // 取件时间
                operator_telephone: "18001587683", // 快递员手机号码
                box: "国家广告产业园格格货栈-4组05号门" // 终端格口
            }]
        },
        methods: {
            searchByKey() {
                let that = this;
                let _key = this.terminalName;
                if (this.terminalName == "") {
                    that.flag = true;
                } else {
                    axios.get(ajaxUrls.search + 'search=' + _key.trim())
                        .then(function(rsp) {
                            let d = rsp.data;
                            if (d.status == "0") {
                                that.flag = false;
                                that.num = d.data.length;

                            } else {
                                that.flag = !that.flag;
                            }
                            //                        console.log(rsp.data);
                            //that.hideLoading();
                        });
                }


                console.log(this.terminalName);
            }
        }
    }

</script>
<style lang="sass" scoped>
    .c_b {
        color: #07689f;
    }
    
    .c_g {
        color: #a3a3a3;
    }
    
    .c_g1 {
        color: #908d8d;
    }
    
    .pd_16 {
        padding: 0 16px;
        div.img {
            width: 125px;
            height: 125px;
            padding-top: 70px;
            margin: 0 auto;
        }
    }
    
    .empty {
        padding: 16px;
        color: #4d4d4d;
    }
    
    .item {
        position: relative;
        line-height: 35px;
        height: 35px;
        color: #a3a3a3;
    }
    
    .item:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #f4f4f4;
        transform: scale(1, .5);
    }
    
    .list {
        padding-top: 20px;
        padding-bottom: 18px;
        position: relative;
        div {
            font-size: 12px;
            height: 22px;
            line-height: 22px;
        }
        .num {
            margin-top: 5px;
            display: flex;
            justify-content: space-between;
        }
    }
    
    .list:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #f4f4f4;
        transform: scale(1, .5);
    }

</style>
