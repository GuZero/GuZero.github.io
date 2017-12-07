<template lang="jade">
    div.basicinfo.pb60
        HeaderBar(
        :title="pageTitle",
        :btnconfig="btnconfig",
        @moreBtnCallback="showMore"
        )                    
        div.mt44.edition
            p 基本信息 
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div
                    p.gray  手机号
                    p.black 13951658944
                div
                    a(href="tel").tel   
             div.item.pd5
                p.gray  姓名
                p.black 201707061520      
            div.item.pd5
                p.gray  快递公司
                p.black 申通
            div.item.pd5
                p.gray  注册时间
                p.black 2017-07-06 15:20:41
            div.item.pd5
                p.gray  网点
                p.black 魔格
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div   
                    p.gray 状态
                    p.black 正常
                div                
                    div.btn(@click.stop.prevent="showImg" ) 锁定              
            div.item.pd5
                p.gray  余额
                p.black 0
            div.item.pd5
                p.gray  优惠余额
                p.black 0
            div.item.pd5
                p.gray  余件
                p.black 0    
        div.edition
            p 审核信息
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div   
                    p.gray 身份证
                div                
                    div.btn(@click.stop.prevent="showImg" ) 查看
            div.item.pd5.flex-g.flex-justify-between.flex-align-center
                div   
                    p.gray 注册照片
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
                    isgoback: 1
                },
                terminal_name: '',
                terminal_code: '',
                pageTitle: '快递员详情',
                status_desc:'',//状态                
                bodyBg: 'gray',
                version: '1',
                show_img:false
            }
        },
        created() {
            window.canGoBack = true;
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
