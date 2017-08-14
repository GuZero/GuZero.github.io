<template>
    <div class="allCity">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div style="height:44px;"></div>
        <div class="content">
            <div class="mui-row mui-text-center color_w">
                <div>爱要全城都听见</div>
            </div>
            <div class="show margin8">
                <ul id="cityList">
                    <li class="mui-table-view-cell" v-for="(item,index) in items" :key="item.id" @click="choiceCity(item,$event)">
                        <div class="items">
                            <div>{{item.city_name}}</div>
                            <div style="padding-right:18px;">{{item.price}}元/天
                                <i class="choice_icon" v-show="flag"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="btn_box">
                <button type="button" class="mui-btn btn_blue" @click="nextStep">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '制作中',
            btnconfig: {
                isgoback: 1
            },
            items: [],
            activeTab: '0',
            flag: false,
            c_id: new Set(),
            c_name:new Set()
        }
    },
    components: {
        HeaderBar
    },
    mounted() {
        this.setInfo();
    },
    watch: {
        '$route': function () {
            if (this.$route.path == ('/allcity')) {
                $(".choice_icon").hide();
                window.Data={};
            }
        }
    },
    methods: {
        msgAlert(type, msg) {//弹出窗口
            $('.msg_' + type).html(msg);
            $('.msg_' + type).animate({
                'top': 0
            }, 500);
            setTimeout(function () {
                $('.msg_' + type).animate({
                    'top': '-30px'
                }, 500)
            }, 2000);
        },
        setInfo() {//设置信息
            var htmlstyle = "<style>body{padding:0;margin:0;}.msg{color:#FFF;width:100%;height:30px;text-align:center;font-size:14px;line-height:30px;position:fixed;top: -30px;z-index:20;}" +
                ".msg_success{background-color:#1fcc6c;}" +
                ".msg_warning{background-color:#e94b35;}" +
                ".msg_primary{background-color:#337ab7;}" +
                ".msg_info{background-color:#5bc0de;}</style>";
            $('head').append(htmlstyle);
            $('body').prepend('<div class="msg msg_success"></div>' +
                '<div class="msg msg_warning"></div>' +
                '<div class="msg msg_primary"></div>' +
                '<div class="msg msg_info"></div>');
            this.items = [{
                city_id: '3201',
                city_name: '南京市', price: '399'
            }, {
                city_id: '1101',
                city_name: '北京市',
                price: '599'
            }, {
                city_id: '3101',
                city_name: '上海市',
                price: '499'
            }, {
                city_id: '4301',
                city_name: '深圳市',
                price: '499'
            }];

        },
        nextStep() {
            window.Data.c_id=this.c_id;
            window.Data.c_name=this.c_name;
            this.url('./submit');
        },
        choiceCity(item, ev) {
            let el = ev.currentTarget;
            let icon = $(el).children('.items').children().eq(1).children();
            if ($(icon).is(":hidden")) {
                $(icon).show();
                this.c_id.add(item.city_id);
                this.c_name.add(item.city_name);
            } else {
                $(icon).hide();
                this.c_id.delete(item.city_id);
                this.c_name.delete(item.city_name);
            }
        },
        showLoading() { //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading() { //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        },
    }
}
</script>
<style scoped>
.content {
    padding: 0 32px;
}

.items {
    display: flex;
    justify-content: space-between;
    height: 36px;
    align-items: center;
    width: 100%;
    position: relative;
    font-size: 16px;
}

.items i {
    margin-left: 5px;
    position: absolute;
    top: 50%;
    right: 0px;
    margin-top: -3px;
}

.choice_icon {
    width: 16px;
    height: 7px;
    border-bottom: 2px solid #4788f4;
    border-left: 2px solid #4788f4;
    transform: translateX(5px) translateY(-5px) rotate(-45deg);
}

.btn_blue {
    margin-top: 36px;
    border: 0.01px solid #4285f4;
    background-color: #4285f4;
    font-size: 15px;
    padding: 7px 0;
    width: 100%;
    color: #fff;
    border-radius: 4px;
}
</style>

