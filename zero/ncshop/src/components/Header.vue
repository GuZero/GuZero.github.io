<template>
	<div class="gege-header fixed">
		<div class="title center ellipsis f16 abs">{{title}}</div>
		<a  class="icgoback" v-if="hideGoback?false:true"  @click="goback(origin)"></a>
		<!-- <a  class="icshare"  v-if="hasConfig? btnconfig.isshare: false" @click.prevent.stop="$emit('shareBtnCallback')"></a>
		<a class="icclock" v-if="hasConfig? btnconfig.ismsg: false" @click.prevent.stop="$emit('msgBtnCallback')"> </a> -->
		<a v-if="hasConfig?btnconfig.isconfirm:false" @click.prevent.stop="$emit('confirmCallback')" style="right:10px;top:50%;margin-top:-22px;">完成</a>
		<a v-if="hasConfig?btnconfig.isorder:false" @click.prevent.stop="$emit('confirmCallback')" style="right:10px;top:50%;margin-top:-22px;">订单</a>
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