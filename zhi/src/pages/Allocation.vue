<template lang="jade">
    div.edit-equipment
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            ref="searchBar",
            class="top44 fixed",
            placeholder="请输入管理员姓名",
            v-model="operator_name",
            @changeCallback="searchOperator(1)",
            v-focus
        )
        div.content.mt90
            template(v-if="nameList.length <= 0 && !isSearch")
                p.rel.item 无搜索结果
            template(v-else)
                ul.rel(v-for="item in nameList",:key="item.user_id")
                    li.rel.item(@click.stop.prevent="chooseOperator(item.user_id,item.name)") {{item.name}} 
                        label(v-if="item.mobile") （{{item.mobile}}）
            DataLoading(ref="loading")
        ModalDialog(ref="confirmModal", @confirmCallback="confirmChoose")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import Search from '../components/common/Search'
    import ModalDialog from '../components/elements/ModalDialog'
    import DataLoading from '../components/common/DataLoading'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '分配',
                btnconfig: {
                    isgoback: 1,
                    isfinish: 1
                },
                version: '1',
                operator_name: '',
                old_userid: this.$route.query.old_userid,
                operator: this.$route.query.operator,
                userid: '',
                nameList: [],
                isSearch: false
            }
        },
        directives: {
          focus: {
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
          }
        },
        components: {
            HeaderBar,
            Search,
            DataLoading,
            ModalDialog
        },
        mounted() {
            this.hideLoading();
            window.canGoBack = true;
            window.origin = null;

        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
          '$route': function (route) {
                this.old_userid = this.$route.query.old_userid;
                this.operator = this.$route.query.operator;
                this.operator_name = '';
                this.nameList = [];
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
            showLoadEnd() { //显示没有更多数据状态
                this.hideLoading();
                this.$refs.loading && this.$refs.loading.showEnd();
            },
            searchOperator() {
                let that = this,
                    name = that.operator_name.replace(/(^\s*)|(\s*$)/g, "");
                if (!name) {
                    return false;
                }
                if (that.isSearch) {
                    return false;
                }
                that.showLoading();
                that.isSearch = true;
                that.nameList = [];
                setTimeout(function () {
                    getAjaxRequest("terminal_cache",ajaxUrls.users + '?name='+name,that.version,2*60*1000,6*60*60*1000,
                        function (response) {
                            that.hideLoading();
                            that.isSearch = false;
                            if (response.status == 0) {
                               that.nameList = response.data;                 
                            }else {
                                if (response.msg) _util.showErrorTip(response.msg);
                            }
                        },
                        function (error) {
                            that.isSearch = false;
                            that.hideLoading();
                            _util.showErrorTip("您的网络可能出了点问题:(");
                        })
                },150);
            },
            chooseOperator(user_id,user_name) {
                let type = '';
                this.userid = user_id;
                if (this.operator == '1') {
                    type = '运维';
                }else if (this.operator == '2') {
                    type = '运营';
                }
                this.$refs.confirmModal.showModal({
                    text: '确认是否选择'+user_name+'为'+type+'管理员？'
                });
            },
            confirmChoose() {
                let that = this;
                that.old_userid = that.$route.query.old_userid;
                that.operator = that.$route.query.operator;
                if (_util.getById('sysLoading').style.display == 'block') return false;
                _util.showSysLoading();
                axios.post( ajaxUrls.basic +  that.$route.params.code + '/assign', {
                    old_userid: that.old_userid,
                    operator: that.operator,
                    userid: that.userid
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        that.url('/terminal/'+that.$route.params.code);
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
    .mt90{
        margin-top: 90px;
    }
    .content{
        padding-left: 16px;
    }
    .item{
        padding: 16px 0;
        font-size:16px;
        color: #4d4d4d;
        margin: 0;
    }
    .item:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        transform: scale(1, .5);
    }
</style>
