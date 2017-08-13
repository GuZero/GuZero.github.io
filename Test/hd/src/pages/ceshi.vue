<template>
    <div class="test">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
         <DateTime :start_date="start_date" :end_date="end_date"></DateTime> 
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
import DateTime from '../components/DateTime'
export default {
    data() {
        return {
            pageTitle: '测试',
            btnconfig: {
                isgoback: 1,
                // ismsg: 1
            },
            _id: '',
            start_date:'开始日期',
            end_date:'结束日期'
        }
    },
    components: {
        HeaderBar,
        DateTime
    },
    created() {
        
    },
    methods: {
      
    }
}
</script>
