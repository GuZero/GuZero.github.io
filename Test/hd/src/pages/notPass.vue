<template>
    <div class="home">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="mui-content-padded">
            <div id="is">
                <div class="mui-text-center">
                    <div style="width: 110px;height: 80px;display: inline-block;">
                        <img src="//img.aimoge.com/Fs6naO0nMxyik9ojsi_TB77VR5GY" alt="" width="100%" height="100%">
                    </div>
                </div>
                <div class="mui-text-center margin16">
                    <p class="mui-h4 mui-ellipsis color_w line_h30">
                        居然有人比您的作品有趣
                    </p>
                    <p class="mui-h4 mui-ellipsis color_w line_h30">
                        一丢丢...
                    </p>
                </div>
                <div class="mui-table-view weixi pd18 pd_lr">
                    <div class="mui-row mui-text-center font_20 black">
                        上屏通过小技巧
                    </div>
                    <div class="mui-row mui-text-left font-14 line_h30 margin20">
                        1.天仙照！非主流扛霸自拍
                    </div>
                    <div class="mui-row mui-text-left font-14 line_h30">
                        2.有趣有槽点
                    </div>
                    <div class="mui-row mui-text-left font-14 line_h30">
                        3.结合城市、人文等风采
                    </div>
                    <div class="mui-row mui-text-left font-14 line_h30">
                        4.放飞自我
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '未通过',
            btnconfig: {
                isgoback: 1,
                // ismsg: 1
            },
            _id: ''
        }
    },
    components: {
        HeaderBar
    },
    created() {
        
    },
    methods: {
      
    }
}
</script>
