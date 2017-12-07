<template lang="jade">
	div.equip_box_type
		HeaderBar(
		:title="pageTitle",
		:btnconfig="btnconfig",
		@batchBtnCallback="batchHandle"
		)
		div.content.mt44
			NoNetwork(v-show="isNoNetwork && !scroll_load_loading",@fetchDataCallBack="fetchData")
			div(v-show="!isNoNetwork")
				template(v-if="!gridList.length && !scroll_load_loading")
					div.empty
						img.empty-img( src="//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp")
						p.empty-info 暂无记录
				template(v-if="gridList.length")
					div.item(v-for="(item,index) in gridList",:key="item.id")
						div.flex.flex-align-center.rel.item_ctx
							div.item_gird.col(@click="goToDeposit($event,item.id)") {{item.code}}
							div.item_size.col {{item.typeZh}}
							div.item_type.col.flexmodel  {{item.BoxStateZh}}/{{item.BoxUseStateZh}}/{{item.BoxUserStateZh}}/{{item.orderTypeName}}
							div.item_btn.col(@click="showOperator($event,item,index)")
								span {{ isShowOperator&&(current_index == index) ? "取消" : "操作" }}
						div.flex.flex-align-center.operate(:class="{'active': isShowOperator &&(current_index == index)}")
							div.operate_cancel.col.flexmodel(@click="openComfirm(item,'lockBox',$event)") {{item.BoxUserState?"解除锁定":"故障锁定"}}
							div.operate_abandon.col.flexmodel(@click="openComfirm(item,'abandonBox',$event)") 废弃格口
							div.operate_open.col.flexmodel(@click="openComfirm(item,'openEmptyBox',$event)") 打开格口
			DataLoading(ref="loading")
			ModalDialog(ref="confirmModal", @confirmCallback="confirmOperate")

			
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
                pageTitle: '箱柜状态',
                isNoNetwork: false,
                isShowOperator:false,
                gridList: [],
                current_index: null,
                current_item: null,
                current_type: '',
                terminal_id: this.$route.params.code,
                rack_id: this.$route.params.rackid,
                scroll_load_loading: false

			}
		},
		components: {
			HeaderBar,
			DataLoading,
			ModalDialog,
			NoNetwork
		},
		created(){
			this.fetchData();
		},
		methods: {
			showLoading() { //显示正在加载数据状态
			    this.scroll_load_loading = true;
			    this.$refs.loading && this.$refs.loading.showLoading();
			},
			hideLoading() { //隐藏正在加载数据状态
			    this.scroll_load_loading = false;
			    this.$refs.loading && this.$refs.loading.hideLoading();

			},
			fetchData() {
			    let that = this;
			    that.showLoading();
		        getAjaxRequest("terminal_cache",ajaxUrls.basic + that.$route.params.rackid + '/getRackList',that.version,1000,6*60*60*1000,
		            function (response) {
		                that.hideLoading();
		                that.isNoNetwork = false;
		                if (response.status == 0) {
		                   that.gridList = response.data.concat();
		                }else {
		                    if (response.msg) _util.showErrorTip(response.msg);
		                }
		            },
		            function (error) {
		                that.hideLoading();
		                that.isNoNetwork = true;
		            })
			},
			showOperator(e,_item,_index){
				if (this.current_index != _index) {
					this.isShowOperator = true;
				}else{
			    	this.isShowOperator = !this.isShowOperator;
				}
				this.current_index = _index;
			},
			openComfirm(_item,type,e){
			    let info = "",that = this;
			    that.chooseOperateType = type;
			    that.current_item = _item;
			    that.current_type = type;
			    switch (type) {
			        case "lockBox":
			            {
			                info = _item.BoxUserState ? "解除锁定" : "故障锁定";
			            }
			            break;
			        case "abandonBox":
			            {
			                info = "废弃格口";
			            }
			            break;
			        case "openEmptyBox":
			            {
			                info = "打开格口";
			            }
			            break;
			        default:
			            break;
			    }
			    that.$refs.confirmModal.showModal({
			        hideTitle: true,
			        text: '确认是否执行 '+info+' 操作？',
			    });
			},
			confirmOperate(){
			    let that = this;
			    switch (that.current_type) {
			        case "lockBox":
			            {
			                that.opreateGrid();
			            }
			            break;
			        case "abandonBox":
			            {
			                that.abandonGrid();
			            }
			            break;
			        case "openEmptyBox":
			            {
			                that.opreateGrid();
			            }
			            break;
			        default:
			            break;
			    }
			},
			abandonGrid(){
				let that = this,
					item = that.current_item;
				_util.showSysLoading();
				axios.post(ajaxUrls.basic+item.id+"/abandonBox", null, {
				    withCredentials: true
				}).then(function(rsp) {
				    _util.hideSysLoading();
				    if (rsp.data.status == 0) {
				        let data = rsp.data.data;
				        _util.showSuccessTip(rsp.data.msg);
				        if (data) {
				        	let item = that.gridList[that.current_index];
				        	    item = data;
				        	that.gridList.splice(that.current_index,1,item);
				        }
				    } else {
				        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
				    }
				}).catch(function(error) {
				    _util.hideSysLoading();
				    _util.showErrorTip('您的网络可能出了点问题:(');
				});
			},
			opreateGrid(){
				let that = this,
					item = that.current_item,
					type = that.current_type;
				let postData = {"action":type,"data": {"box_id":item.id}};
				if (type == "lockBox"){
					if (item.BoxUserState) { //0表示正常状态，需要进行故障锁定操作，非0表示锁定状态，需要进行解除锁定操作
						postData.data.box_user_state=0;//解除锁定
					}else{
						postData.data.box_user_state=2;//故障锁定
					}
				}
				_util.showSysLoading();
				axios.post(ajaxUrls.basic+this.$route.params.code+"/operation", postData, {
				    withCredentials: true
				}).then(function(rsp) {
				    _util.hideSysLoading();
				    if (rsp.data.status == 0) {
				        let data = rsp.data.data;
				        _util.showSuccessTip(rsp.data.msg);
				        if (data) {
				        	let item = that.gridList[that.current_index];
				        	    item = data;
				        	that.gridList.splice(that.current_index,1,item);
				        }

				    } else {
				        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
				    }
				}).catch(function(error) {
				    _util.hideSysLoading();
				    _util.showErrorTip('您的网络可能出了点问题:(');
				});
			},
			goToDeposit(e,_key){
				this.url("/deposit",{"key":_key})
			}
		}
	}

</script>

<style lang="sass" scoped>
	$green: #07689f;
	.equip_box_type{
		.item{
			overflow: hidden;
			.item_ctx{
				padding: 16px;
				background-color: #fff;
				.col{
					text-align: center;
				}
				.item_gird{
					width: 50px;
					color: $green;
				}
				.item_size{
					width: 40px;
				}
				
				.item_btn{
					width: 24%;
					font-size: 14px;
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
			.operate{
				line-height: 32px;
				height: 0;
				color: #6e6e6e;
				text-align: center;
    			transition: all 0.5s ease-in-out;
    			-webkit-transition: all 0.5s ease-in-out;
    			-moz-transition: all 0.5s ease-in-out;
				.col{
					background-color: #eee;
					border-right: 1px solid #fff;
					&:last-child{
						border-right: none;
					}
				}
				&.active{
					height: 32px;
				}
			}
		}
	}

</style>
