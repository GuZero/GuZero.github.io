<template lang="jade">
	div.clean_terminal
		HeaderBar(
		:title="pageTitle",
		:btnconfig="btnconfig",
		@batchBtnCallback="batchHandle"
		)
		div.content.mt44.pb90
			NoNetwork(v-show="isNoNetwork && !scroll_load_loading",@fetchDataCallBack="fetchData")
			div(v-show="!isNoNetwork")
				template(v-if="!list.length && !scroll_load_loading")
					div.empty
						img.empty-img( src="//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp")
						p.empty-info 暂无记录
				template(v-if="list.length")
					div.item.flex.flex-align-center.flex-justify-between.rel(v-for="(item,index) in list",:class="{'selected':item.isSelected}",@click.stop.prevent="selectToggle($event,item,index)")
						div.select_icon.col(v-if="isBatch")
						div.item_gird.col {{item.code}}
						div.item_size.col {{item.type}}
						div.item_type.col {{item.usertype}}
						div.item_info.col.flexmodel(v-if="item.orderInfo&&item.orderInfo.organization_name")
							div.item_orname {{item.orderInfo.organization_name}}
							div.item_ormoblie {{item.orderInfo.operator}}
						div.item_btn.col(@click="showSelectHandle($event,item,index)",v-if="!isBatch")
								span 清柜
					div.fixed.complete_box(v-if="isBatch")
						div.complete_btn.active(@click="showSelectHandle($event)",v-if="selectList.length") 完成
						div.complete_btn(v-else) 完成
			DataLoading(ref="loading")
		SelectBox(ref="selectBox",:selectList="handleList",itemInfo="text",selectTitle="请选择处理方式",@selectCallback="selectHandle")
</template>

<script>
	import HeaderBar from '../components/common/Header'
    import DataLoading from '../components/common/DataLoading'
    import ModalDialog from '../components/elements/ModalDialog'
    import SelectBox from '../components/elements/SelectBox'
    import NoNetwork from '../components/elements/NoNetwork'

	export default {
        mixins: [require('../components/mixin/BodyBg')],
		data() {
			return {
                btnconfig: {
                    isback: 1,
                    isbatch:1
                },
                pageTitle: '清理终端',
                isNoNetwork: false,
                handleList:[{'text':"放在物业",'id':'1'},{'text':"还给快递员",'id':'2'},{'text':"送给收件人",'id':'3'}],
                isShowSelectBox: false,
                selectList: [],
                list: [],
                boxIds:[],
                isBatch: false,
                currentItem: null,
                scroll_load_loading: false
			}
		},
		components: {
			HeaderBar,
			DataLoading,
			ModalDialog,
			SelectBox,
			NoNetwork
		},
		created() {
		    window.canGoBack = true;
		},
		mounted() {
	    	let reasonStore = store.get('clearTerminalReasonStore') || null;
		    window.canGoBack = true;
	        if (!reasonStore || reasonStore.terminal_id != this.$route.params.code) {
	        	_util.showErrorTip("请先选择清空终端原因！");
	        	this.goback();
	        	// setTimeout(this.goback(),350);
		    }else{
		    	this.fetchData();
		    }
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
		        getAjaxRequest("terminal_cache",ajaxUrls.basic + that.$route.params.code + '/boxHaveSomething',that.version,30*1000,6*60*60*1000,
		            function (response) {
		                that.hideLoading();
		                that.isNoNetwork = false;
		                if (response.status == 0) {
		                   that.list = response.data.concat();
		                }else {
		                    if (response.msg) _util.showErrorTip(response.msg);
		                }
		            },
		            function (error) {
		                that.hideLoading();
		                that.isNoNetwork = true;
		            })
			},
			batchHandle(){
				if (!this.list.length) {
					return false;
				}
				this.btnconfig = {
				    isback: 1,
				    isbatch:0
				}
				this.isBatch = true;
			},
			selectToggle(e,_item,_index){
				if (!this.isBatch) {
					return false;
				}
				let item = this.list[_index],select_index = this.selectList.indexOf(item);
				item.isSelected = !item.isSelected;
				this.list.splice(_index,1,item);
				if (select_index < 0 && item.isSelected ) {//如果是选中（原先未选中）且selectList里不存在
					this.selectList.push(item);
					this.boxIds.push(item.box_id);
				}
				if (select_index >= 0 && !item.isSelected ) {//如果是取消选中（原先选中）且selectList里存在
					this.selectList.splice(select_index,1);
					this.boxIds.splice(select_index,1);
				}
			},
			showSelectHandle(e,_item,_index){
			    //1.弹窗选择本次清柜处理方式；
			    let that = this;
			    that.isShowSelectBox = true;
			    that.$refs.selectBox.isShowSelectBox = true;
			    that.$refs.selectBox.checkIndex = null;
			    if (_item) {
			    	that.selectList = [];
			    	that.boxIds = [];
			    	that.currentItem = _item;
			    }else{
			    	that.currentItem = null;
			    }

			},
			selectHandle(_reason){
				//不管是批量清柜还是单个清，都走批量清柜的做法，传数组。
				let that = this,data={};
				let reasonStore = store.get('clearTerminalReasonStore');
                that.$refs.selectBox.isShowSelectBox = false;
                if (that.currentItem) {
					that.boxIds.push(that.currentItem.box_id);
                	that.selectList.push(that.currentItem);
                }
                data.cause = _reason.id;
                data.clear_cause = reasonStore.id;
                data.boxs = that.boxIds;
                console.log(that.selectList);
                console.log(that.boxIds);
                _util.showSysLoading();
                axios.post(ajaxUrls.basic+this.$route.params.code+"/clearTerminals", data, {
                    withCredentials: true
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showSuccessTip("清柜成功！");
						that.$router.go(0);
                    } else {
                        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });				
			}
		}
	}

</script>

<style lang="sass" scoped>
	$green: #07689f;
	.pb80{
		padding-bottom: 80px;
	}
	.clean_terminal{
		.item{
			overflow: hidden;
			padding: 16px 4%;
			background-color: #fff;
			.col{
				text-align: center;
			}
			.select_icon{
				width: 48px;
				height: 32px;
				background-image: url('//img.aimoge.com/Fo9Gm9SCLkeLkNbQoRSC7z3RG0XG');
				background-repeat: no-repeat;
				background-position: left center;
				background-size: 16px 16px;
			}
			&.selected{
				background-color: #f5fbff;
			}
			&.selected .select_icon{
				background-image: url('//img.aimoge.com/FvAS6cUxfEFkKtxr7Yzvj5Nipx5-');
				background-size: 21px 16px;
			}
			.item_gird{
				width: 50px;
			}
			.item_size,.item_type{
				width: 45px;
			}
			.item_info{
				margin-right: 10px;
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
		.complete_box{
			bottom: 0;
			left: 0;
			width: 100%;
			padding-top: 16px;
			height: 68px;
			background-color: #fff;
			z-index: 2;
			.complete_btn{
				width: 240px;
				height: 32px;
				line-height: 32px;
				margin: 0 auto;
				border: 1px solid #6e6e6e;
				border-radius: 4px;
				text-align: center;
				background-color: #fff;
				color: #6e6e6e;
				&.active{
					color: #fff;
					background-color: $green;
					border: none;
				}
			}
		}
	}

</style>
