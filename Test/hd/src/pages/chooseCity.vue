<template>
    <div class="city" style="padding-top: 8%">
        <div class="mui-content-padded">
            <div class="mui-row mui-text-center color_w">
                <div class="mui-col-xs-4 mui-text-right">朕要包下全</div>
                <div class="mui-col-xs-5 mui-h2">{{city_name}}</div>
                <div class="mui-col-xs-3 mui-text-left">格格货栈</div>
            </div>
            <div class="show margin8">
                <ul id="cityList">
                    <li class="mui-table-view-cell" v-for="i in citys" :key="i.city_id" @click="chooseCity(i)">{{i.city_name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            citys: [],
            city_name: '南京',
        }
    },
    created() {
        let arry = [{
            city_id: '1101',
            city_name: '北京市'
        }, {
            city_id: '1201',
            city_name: '天津市'
        }, {
            city_id: '1301',
            city_name: '石家庄市'
        }, {
            city_id: '1401',
            city_name: '太原市'
        }, {
            city_id: '3101',
            city_name: '上海市'
        }, {
            city_id: '3201',
            city_name: '南京市'
        }, {
            city_id: '3202',
            city_name: '无锡市'
        }, {
            city_id: '3205',
            city_name: '苏州市'
        }, {
            city_id: '3301',
            city_name: '杭州市'
        }, {
            city_id: '3401',
            city_name: '合肥市'
        }, {
            city_id: '3501',
            city_name: '福州市'
        }, {
            city_id: '3502',
            city_name: '厦门市'
        }, {
            city_id: '4201',
            city_name: '武汉市'
        }, {
            city_id: '4301',
            city_name: '长沙市'
        }, {
            city_id: '4401',
            city_name: '广州市'
        }, {
            city_id: '4301',
            city_name: '深圳市'
        }, {
            city_id: '4404',
            city_name: '珠海市'
        }, {
            city_id: '4406',
            city_name: '佛山市'
        }, {
            city_id: '4419',
            city_name: '东莞市'
        }, {
            city_id: '5001',
            city_name: '重庆市'
        }, {
            city_id: '5101',
            city_name: '成都市'
        }];
        this.citys=arry;
        if(localStorage._id){
            localStorage._id='';
             localStorage._name='';
             
        }else{
            window.localStorage.setItem("_id","");
            window.localStorage.setItem("_name","");
        }
    },
    methods: {
        chooseCity(d){
            this.city_name=d.city_name;
            localStorage._id=d.city_id;
            localStorage._name=d.city_name;
            this.url('./make')
        }
    }
}
</script>
