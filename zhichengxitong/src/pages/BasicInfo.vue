<!-- //- <template lang="jade"> -->
<!-- //-   div.div
//- 	  div.nav
//- 		    h3.title {{terminal_name}}
//- 	  div.item
//- 		    p {{code}}
//- 		    p {{terminal_code}}
//- </template> -->
<template>
  <div class="div">
    <div class="nav">
      <h3 class="title">{{terminal_name}}</h3>
    </div>
    <div class="item">
      <p>{{code}}</p>
      <p>{{terminal_code}}</p>
    </div>
    <div class="item">
      <p>{{code}}</p>
      <p>{{terminal_code}}</p>
    </div>
    <div class="item item_btn">
        <div>
            <p>{{code}}</p>
            <p><a href="#">位置浏览</a></p>
        </div>
        <div class="btn">采集</div>
    </div>
    <div class="manage">
        <div class="title">
            管理员
        </div>
        <div class="item item_btn">
            <div>
                <p class="gray_1">运维管理员</p>
                <p class="black">高乔乔（15910239327）</p>
            </div>
            <div class="btn">分配</div>
        </div>
        <div class="item item_btn">
            <div>
                <p class="gray_1">运维管理员</p>
                <p>高乔乔（15910239327）</p>
            </div>
            <div class="btn">分配</div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                terminal_name: '',
                code: '终端 code',
                terminal_code: "0010080074",
                footerconfig: {
                    isflag: true,
                },
            }
        },
        created() {
            let that = this;
            // window.addEventListener('scroll', that.handleScroll);
            axios.get(ajaxUrls.basic + localStorage.terminal_id + '?info=basic&mack='+Math.random())
                .then(function(rsp) {
                    console.log(rsp.data.data);
                    that.terminal_name = rsp.data.data.terminal_name;
                })
        },

    }

</script>

<style lang="sass" scoped>
    .black {
        color: #6a6a6a;
    }

    .gray_1 {
        color: #aaaaaa;
    }

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
            font-weight: 700;
        }
    }

    .item:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 90%;
        height: 1px;
        background-color: #979797;
        transform: scale(1, .5);
    }

    .item {
        background-color: #fff;
        color: #4d4d4d;
        font-size: 16px;
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
        height: 30vh;
        position: relative;
        bottom: 0px;
        background: #fff;
        overflow: auto;
        padding: 0 16px;
        .title {
            padding: 8px 0;
            color: #6e6e6e;
            font-size: 12px;
            position: relative;
        }
        .title:before {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #979797;
            transform: scale(1, .5);
        }
        .item {
            padding: 8px 0px;
            p{
                font-size: 12px;
            }
        }
        .item:before {
            height: 0px;
        }
        .item:after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #979797;
            transform: scale(1, .5);
        }
    }

</style>
