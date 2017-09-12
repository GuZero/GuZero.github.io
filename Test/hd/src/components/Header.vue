<template>
	<div class="gege-header fixed">
		<div class="title center ellipsis f16 abs">{{title}}</div>
		<a  class="icgoback" v-if="hideGoback?false:true"  @click="goback(origin)" style="left: 0;"></a>
		<a  class="icgoback" v-if="hasConfig? btnconfig.isback:false"  @click.prevent.stop="$emit('callback')" style="left: 0;"></a>
		<a  class="icshare"  v-if="hasConfig? btnconfig.isshare: false" @click.prevent.stop="$emit('shareBtnCallback')"></a>
		<a class="icclock" v-if="hasConfig? btnconfig.ismsg: false" @click.prevent.stop="$emit('msgBtnCallback')"> </a>
		<a v-if="hasConfig?btnconfig.isconfirm:false" @click.prevent.stop="$emit('confirmCallback')" style="color:#fff;right:0">确认</a>
	</div>
</template>
<script>
	export default {
		data(){
			let configs = this.$props.btnconfig,
                hasConfig = configs && Object.keys(configs).length,
                hideGoback = hasConfig && (configs.isgoback === false || configs.isgoback <= 0);
            let ismsg = hasConfig && configs.ismsg ? configs.ismsg:null;
			return {
                hasConfig: hasConfig,
                version: '1',
                hideGoback: hideGoback,
                ismsg : ismsg
            };
		},
		props: ["title", "btnconfig"]
	}
</script>