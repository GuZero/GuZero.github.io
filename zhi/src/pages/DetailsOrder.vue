<template lang="jade">
    div.basicinfo.pb60
        HeaderBar(
        :title="pageTitle",
        :btnconfig="btnconfig",
        @moreBtnCallback="showMore"
        )
        div.fixed.more-box.box-triangle(v-if="isShowMore")
            ul
                li.rel(@click="moreOperator('open_cabinet')") 开柜
                li.rel(@click="moreOperator('user_renewal')") 用户续期
                li.rel(@click="moreOperator('admin_get_back')") 管理员取回                           
        div.mt44.edition
            p 基本信息 
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div
                    p.gray  订单状态
                    p.black 代取件
                div.status
                    label.rel.s2 已超期   
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div
                    p.gray  用户手机号
                    p.black 13951658944
                div
                    a(href="tel").tel   
             div.item.pd5
                p.gray  快递单号
                p.black 201707061520   
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div
                    p.gray  快递员手机号
                    p.black 13951667596
                div
                   a(href="tel").tel     
            div.item.pd5
                p.gray  快递公司
                p.black 申通
            div.item.pd5
                p.gray  存件时间
                p.black 2017-07-06 15:20:41
            div.item.pd5
                p.gray  取件时间
                p.black 2017-07-06 15:20:41
            div.item.pd5
                p.gray  取件方式
                p.black 扫码开柜              
        div.edition
            p 终端信息
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div   
                    p.gray  终端名称
                    p.black 国家广告产业园格格货栈
                div                
                    label 终端状态
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div   
                    p.gray  终端code
                    p.black 0025020001
                div                
                    div.btn(@click.stop.prevent="" ) 查看
            div.item.pd5
                p.gray  区域
                p.black 江苏省-南京市-建邺区
             div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div   
                    p.gray  格口
                    p.black M0102 
                div                
                    label 格口状态
        div.edition
            p 监控信息
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div   
                    p.gray 存件图
                div                
                    div.btn(@click.stop.prevent="showImg" ) 查看
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div   
                    p.gray 取件图
                div                
                    div.btn(@click.stop.prevent="showImg" ) 查看                                 
        ModalDialog(ref="confirmModal", @confirmCallback="confirmOperate")
        div.layer.img-layer(@click.shop.prevent="showImg",v-if="show_img")
            div.show-img
                img(src="//img.aimoge.com/FkrKfvgsSJhDqg7uaI7BLBSLoJcT")
</template>
<script>
    import HeaderBar from '../components/common/Header'
    import ModalDialog from '../components/elements/ModalDialog'
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                //终端详情信息
                btnconfig: {
                    isgoback: 1,
                    ismore: 1
                },
                terminal_name: '',
                terminal_code: '',
                pageTitle: '订单详情',
                status_desc:'',//状态                
                bodyBg: 'gray',
                version: '1',
                isActive: false,
                isShowMore: false,//是否弹出更多操作选项
                show_img:false
            }
        },
        created() {
            window.canGoBack = true;
            // window.origin = "terminal";

        },
        mounted(){
        },
        components: {
            HeaderBar,
            ModalDialog,
        },

        methods: {
            showLoading() { //显示正在加载数据状态
                this.scroll_load_loading = true;
                this.$refs.loading && this.$refs.loading.showLoading();
            },
            hideLoading() { //隐藏正在加载数据状态
                this.scroll_load_loading = false;
                this.$refs.loading && this.$refs.loading.hideLoading();
            },
            showMore(){
                this.isShowMore = !this.isShowMore;
            },
            moreOperator(type){
                let info = "";
                if (type === "open_cabinet") {
                    info = "开柜";
                }
                switch (type) {
                    case "open_cabinet":
                        {
                            info = "开柜";
                        }
                        break;
                    case "user_renewal":
                        {
                            info = "用户续期";
                        }
                        break;
                    case "admin_get_back":
                        {
                            info = "管理员取回";
                        }
                        break;
                    default:
                        break;
                }
                this.$refs.confirmModal.showModal({
                    text: '确认是否执行 '+info+' 操作？'
                });
            },
            showImg(){
                this.show_img=!this.show_img;
            }
        }
    }

</script>

<style lang="sass" scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform:  translate(-50%,-50%) scale(0);
  }

  100% {
    transform:  translate(-50%,-50%) scale(1);
  }
}
    .black {
        color: #323232;
    }
    
    .active {
        color: #07689f;
    }
    
    .gray {
        color: #c9c6c9;
    }
    .item_map{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .box-triangle:before{
        left: 70%;
    }
    .more-box{
        right: 0;
        top: 7%;
        background-color: #666;
        z-index: 8888;
        li{
            padding: 8px 20px;
            text-align: center;
            border-bottom: 1px solid #fff;
            color: #fff;
        }
        select {
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: none;
            color: transparent;
            border: none;
            outline: none;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            z-index: 301;
            option {
                color: #333;
            }
        }
    }
    .content {
        border: 1px #cfcfcf solid;
        .nav {
            background-color: #fff;
            color: #4d4d4d;
            font-size: 16px;
            padding: 16px 0px;
            width: 100%;
            .title {
                font-size: 18px;
                text-align: center;
                color: #323232;
            }
        }
    }
    
    .item:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 90%;
        height: 1px;
        background-color: #eee;
        transform: scale(1, .5);
    }
    
    .item {
        background-color: #fff;
        color: #4d4d4d;
        font-size: 14px;
        overflow: hidden;
        padding: 10px 16px;
        width: 100%;
        left: 0;
        z-index: 300;
        position: relative;
        box-sizing: border-box;
        p a {
            color: #07689f;
            font-size: 14px;
        }
    }
    
    .item_btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .btn {
        padding: 4px 8px;
        border-radius: 4px;
        color: #07689f;
        border: 1px solid #07689f;
        font-size: 14px;
        width: 66px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        height: 30px;
    }

    .manage {
        margin-top: 8px;
        position: relative;
        bottom: 0px;
        background: #fff;
        overflow: auto;
        .item.info {
            padding: 10px 16px;
            color: #6e6e6e;
            font-size: 12px;
        }
    }
    .pd5{
        padding: 5px 16px;
        p{
            margin: 3px 0px;
        }
    }

    .edition>p{
     margin-left: 16px;
    }
    .status{
         .s2 {
                display: inline-block;
                text-indent: 20px;
                color: #d75a48;
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-position: 0 center;
                    background-image: url(//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15);
                    width: 15px;
                    height: 15px;
                }
            }
    }
    .tel{
       width:32px;
       height:32px;
       display:block;
       background:url('//img.aimoge.com/Fg-j0yvFhn8lsFVCZv0EqIGXuWhL') no-repeat center center;
       background-size:70% 70%;
    }
    .img-layer{
        z-index:9999;
        .show-img{
            position:absolute;
            top:20%;
        }
    }
</style>
