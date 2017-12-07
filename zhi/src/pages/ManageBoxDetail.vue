<template lang="jade">
	div.manage_box
		HeaderBar(
		:title="pageTitle",
		:btnconfig="btnconfig",
		@batchBtnCallback="batchHandle"
		)
		template(v-if="isNoNetwork")
			NoNetwork(@fetchDataCallBack="fetchData")
		template(v-if="!isNoNetwork")
			div.content.mt44.pb80
					div.flex.flex-align-center.flex-wrap
						div.item.rel(v-for="(item,index) in gridList")
							p 1号
							p 关闭(已存)
							div.item_btn.active(@click="confirmOpenSignal(item,index,$event)") 开门
			div.fixed.open_box
				div.open_btn(@click="confirmOpenAll") 全部开门
		ModalDialog(ref="confirmModal1", @confirmCallback="OpenSignal")
		ModalDialog(ref="confirmModal", @confirmCallback="OpenAll")
</template>

<script>
	import HeaderBar from '../components/common/Header'
    import DataLoading from '../components/common/DataLoading'
    import ModalDialog from '../components/elements/ModalDialog'
    import NoNetwork from '../components/elements/NoNetwork';

	export default {
        mixins: [require('../components/mixin/BodyBg')],
		data() {
			return {
                btnconfig: {
                    isback: 1
                },
                pageTitle: '箱门状态',
                isNoNetwork: false,
                gridList: ['22','11','33','55'],
                current_index: null
			}
		},
		components: {
			HeaderBar,
			DataLoading,
			ModalDialog,
			NoNetwork
		},
		methods: {
			confirmOpenSignal(_item,_index,e){
				this.$refs.confirmModal1.showModal({
					hideTitle: true,
                    text: '确定开门？'
				})
			},
			confirmOpenAll(){
				this.$refs.confirmModal.showModal({
					hideTitle: true,
                    text: '即将打开所有格口，是否确定？'
				})
			},
			OpenSignal(){

			},
			OpenAll(){

			}
		}
	}

</script>

<style lang="sass" scoped>
	$green: #07689f;
	.pb80{
		padding-bottom: 80px;
	}
	.manage_box{
		.item{
			text-align: center;
			padding: 16px 0;
			width: 33.3%;
			.item_btn{
				line-height: 32px;
				width: 64px;
				height: 32px;
				border: 1px solid #6e6e6e;
				color: #6e6e6e;
				border-radius: 4px;
				font-size: 14px;
				text-align: center;
				margin: 0 auto;
				&.active{
					border: 1px solid $green;
					color: $green;
				}
			}
			&:after{
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 1px;
				background-color: #cfcfcf;
				transform: scale(1, .5);
			}
			&:before{
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				width: 1px;
				height: 100%;
				background-color: #cfcfcf;
				transform: scale(0.5, 1);
			}
			&:nth-child(3n){
				&:before{
					content: '';
					width: 0px;
				}
			}
		}
		.open_box{
			bottom: 0;
			left: 0;
			width: 100%;
			height: 68px;
			background-color: #fff;
			z-index: 2;
			.open_btn{
				width: 240px;
				height: 32px;
				line-height: 32px;
				margin: 0 auto;
				border: 1px solid $green;
				border-radius: 4px;
				text-align: center;
				color: $green;
			}
		}
	}

</style>
