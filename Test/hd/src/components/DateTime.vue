<template>
    <div class="dateTime">
        <div class="mui-row">
            <input type="text" readonly id="start_date" v-model="start_date" :value="value" class="input mui-col-xs-5 mui-text-center" placeholder="开始时间" @input="$emit('changeCallback1')">
            <!-- <div class="mui-col-xs-5 mui-text-center" id="start_date" >开始时间</div>  -->
            <span class="mui-col-xs-2 mui-text-center">----</span>
            <!-- <div class="mui-col-xs-5 mui-text-center" id="end_date">结束时间</div>  -->
            <input type="text" readonly id="end_date" v-model="end_date" :value="value" class="input mui-col-xs-5 mui-text-center" placeholder="结束时间" @input="$emit('changeCallback2')">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            start_date: '',
            end_date: '',
        };
    },
    created() {

    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let m = new Date().getMonth() + 1,
                d = new Date().getDate() + 1,
                time = new Date().getHours(),
                that = this;
            if (time > 17 || time == 17) {
                d = d + 1;
            }
            var startDate = new LCalendar();
            startDate.init({
                'trigger': '#start_date', //标签id
                'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
                'minDate': (new Date().getFullYear()) + '-' + m + '-' + d, //最小日期
                'maxDate': (new Date().getFullYear()) + '-' + 12 + '-' + 31,//最大日期
            });
            var endDate = new LCalendar();
            // that.end_date=endDate.val;
            endDate.init({
                'trigger': '#end_date', //标签id
                'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
                'minDate': (new Date().getFullYear()) + '-' + m + '-' + d, //最小日期
                'maxDate': (new Date().getFullYear()) + '-' + 12 + '-' + 31 //最大日期
            });
        }
    },
    props: ["start_date", "end_date", "value"]
}
</script>
<style scoped>
.input{
    border:none;
    font-size: 14px;
    width: 40%;
    padding: 0px;
    height: 25px;
    margin-bottom: 0px;
}
</style>


