<!--
<template lang="jade">
    h1 设备信息
</template>
-->
<template>
    <div class="main">
        <div class="title">箱柜列表</div>
        <ul>
            <li v-for='a in bins'>
                <p >{{a.position}}</p>
                <p class="gray_2">{{a.asset_num}}</p>
                <div class="li"></div>
            </li>
        </ul>
        <div class="device">
           <div class="title">其他设备</div>
        <ul>
            <li v-for='a in other'>
                <p>{{a.name}}</p>
                <p class="gray_2">未填写</p>
                <div class="li"></div>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                bins: [{
                    'asset_num': 'S011403181-0007',
                    'position': '右一'
                }, {
                    'asset_num': 'S011403181-0008',
                    'position': '左一'
                }],
                other:[],
                footerconfig: {
                    isequipment: true
                },
            }
        },
        mounted() {
            let that = this;
            axios.get(ajaxUrls.basic + localStorage.terminal_id + '?info=device')
                .then(function(rsp) {
                    console.log(rsp.data.data);
                    //                    that.bins = rsp.data.data.bins;
                    that.other=rsp.data.data.other
                  
                })
        },

    }

</script>

<style lang="sass" scoped>
    $color: #f00;
    .gray_2{
        color: #e3e3e3;
    }
    .main {
        .title {
            height: 32px;
            line-height: 32px;
            color: #747474;
            padding: 0 16px;
        }
        ul li {
            background-color: #fff;
            color: #4d4d4d;
            font-size: 13px;
            overflow: hidden;
            padding: 10px 16px;
            width: 100%;
            left: 0;
            z-index: 300;
            position: relative;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
        }
        ul li:nth-child(1):before {
            height: 0;
        }
        ul li:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            width: 100%;
            height: 1px;
            background-color: #979797;
            transform: scale(1, .5);
            p {
                text-align: left;
            }
        }
        .li:after {
            content: '';
            background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;
            background-size: 100% auto;
            display: block;
            height: 28px;
            width: 28px;
            position: absolute;
            right: 12px;
            top: 50%;
            margin-top: -14px;
        }
        .device {
           position: absolute;
            width: 100%;
            bottom: 51px;
            ul{
            height: 30vh;
           overflow: auto;
            li p:nth-child(2){
                width: 75%;
            }
        }
        }
    }

</style>
