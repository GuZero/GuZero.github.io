<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44 fixed",
            placeholder="搜索手机号、终端名称",
            v-model="terminalName",
            @changeCallback="searchByKey"
        )
        div.mt44.pt50.pb60
            div 搜索
            //DataLoading(ref="loading")
        FooterBar(:footerconfig="footerconfig")
</template>

<script>
	import HeaderBar from '../components/common/Header'
	import FooterBar from '../components/common/Footer'
	import Search from '../components/common/Search'
  import DataLoading from '../components/common/DataLoading'

	export default {
		mixins: [require('../components/mixin/BodyBg')],
		data() {
			return {
				bodyBg: 'gray',
				pageTitle: '运营支撑系统',
				footerconfig: {
					isterminal: true
				},
				terminalName: '',
      

			}
		},
		components: {
			HeaderBar,
			FooterBar,
			Search,
      DataLoading
		},
		methods: {
			searchByKey() {
        let that=this;
        //that.showLoading();
        let _key=this.terminalName;
          axios.get(ajaxUrls.tasks+'?terminal_name=' + _key.trim())
            .then(function(rsp){
              console.log(rsp.data);
              //that.hideLoading();
            })
				console.log(this.terminalName);
			}
		}
	}

</script>
