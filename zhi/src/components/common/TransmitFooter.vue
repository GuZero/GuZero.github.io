<template lang="jade">
    div.footer.flex.fixed
        router-link.flexmodel.basic(:to="basic_url",:class="{ active: footerconfig.isbasic }", exact replace) 基本信息
        router-link.flexmodel.equipment(:to="equipment_url",:class="{ active: footerconfig.isequipment }", replace) 设备信息
        div.flexmodel.ad( @click="showTip()",:class="{ active: footerconfig.isad }",replace) 广告排期
        div.flexmodel.journal( @click="showTip()",:class="{ active: footerconfig.isjournal}",replace) 状态日志
</template>

<script>
    export default {
        props: ["footerconfig","terminal_id"],
        data() {
            let terminal_id = this.$props.terminal_id;
            return {
            	basic_url: '/terminal/'+this.$props.terminal_id,
            	equipment_url: '/terminal/'+this.$props.terminal_id+'/equipmentinfo'
            };
        },
        watch: {
          '$route': 'fetchData'
        },
        methods: {
        	showTip() {
        		_util.showErrorTip('敬请期待！');
        	},
            fetchData() {
                this.basic_url = '/terminal/'+this.$props.terminal_id;
                this.equipment_url = '/terminal/'+this.$props.terminal_id+'/equipmentinfo';
        }
    }
}
</script>
<style lang="sass" scoped>
	.footer{
		color: #8c8c8c;
	}
</style>

