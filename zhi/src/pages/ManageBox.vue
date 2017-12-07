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
				div.item(v-for="(item,index) in boxList")
					div.flex.flex-align-center.rel.item_ctx
						div.col.flexmodel 01组
						div.col.flexmodel 正常
						div.col.flexmodel  22格
						div.item_btn.col(@click="goToDetail(item,index,$event)")
							span 进入
			div.fixed.open_box
				div.open_btn(@click="confirmOpen") 全部开门
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
                pageTitle: '箱体管理',
                isNoNetwork: false,
                boxList: ['22','11'],
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
			confirmOpen(){
				this.$refs.confirmModal.showModal({
					hideTitle: true,
                    text: '即将打开所有格口，是否确定？'
				})
			},
			goToDetail(item,_index,e){
				let id = item.id;
				this.url("/terminal/"+this.$route.params.code+"/manage/"+id);
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
			.item_ctx{
				padding: 16px;
				background-color: #fff;
				.col{
					// text-align: center;
				}
				.item_btn{
					width: 64px;
					font-size: 14px;
					text-align: center;
					span{
						display: block;
						line-height: 32px;
						width: 100%;
						height: 32px;
						border: 1px solid $green;
						border-radius: 4px;
						color: $green;
					}
				}
				&:after{
					content: '';
					position: absolute;
					bottom: 0;
					left: 50%;
					width: 92%;
					margin-left: -46%;
					height: 1px;
					background-color: #cfcfcf;
					transform: scale(1, .5);
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
