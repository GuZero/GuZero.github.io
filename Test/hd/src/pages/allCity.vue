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
                    <li class="mui-table-view-cell" v-for="(item,index) in items" :key="item.id" @click="choiceCity(item,index)">
                        <div class="items flex flex-pack-justify flex-align-center">
                            <div>{{item.city_name}}</div>
                            <div style="padding-right:18px;">{{item.price}}元/天
                                <i class="choice_icon" v-show="activeTab==index"></i>
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
    mixins: [require('../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: '制作中',
            btnconfig: {
                isgoback: 1
            },
            items: [],
            activeTab:null,
            flag: false,
            city:{
                city_id:'',
                city_name:'',
                price:'',
            }
        }
    },
    components: {
        HeaderBar
    },
    beforeRouteEnter: (to, from, next) => {
            $('#sysLoading').hide();
            next();
    },
    mounted() {
        this.setInfo();
    },
    watch: {
        '$route': function () {
            if (this.$route.path == ('/allcity')) {
                window.Data={};
                this.city=[];
                this.activeTab=null;
            }
        }
    },
    methods: {
        setInfo() {//设置信息
            this.items = [{
                city_id: '3201',
                city_name: '南京市', price: 399
            }, {
                city_id: '1101',
                city_name: '北京市',
                price: 599
            }, {
                city_id: '3101',
                city_name: '上海市',
                price: 499
            }, {
                city_id: '4301',
                city_name: '深圳市',
                price: 499
            }];

        },
        nextStep() {
            window.Data.city=this.city;
            this.url('./submit');
        },
        choiceCity(item,index) {
            this.activeTab=index;
            this.city.city_id=item.city_id;
            this.city.city_name=item.city_name;
            this.city.price=item.price;
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
    height: 36px;
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
    -ms-transform: translateX(5px) translateY(-5px) rotate(-45deg);
    /* IE 9 */
    -moz-transform: translateX(5px) translateY(-5px) rotate(-45deg);
    /* Firefox */
    -webkit-transform: translateX(5px) translateY(-5px) rotate(-45deg);
    /* Safari 和 Chrome */
    -o-transform: translateX(5px) translateY(-5px) rotate(-45deg);
    /* Opera */
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

