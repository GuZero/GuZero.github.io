<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44 fixed",
            placeholder='搜索姓名（如输入"何"）',
            v-model="username",
            @searchInfo="searchByKey"
        )
        div.mt44.pt50.pb60
            div.empty.f16.rel(v-if="!result.length") 无搜索结果
            div.item.rel(v-if="result.length", v-for="item in result")
                div.box.f16.rel(@click.stop.prevent="goInfo(item)") {{ item.name }}
        ModalDialog(ref="confirmModal", @confirmCallback="deal")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import Search from '../components/common/Search'
    import ModalDialog from '../components/elements/ModalDialog'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '选择姓名',
                username: '',
                result: [],
                userID: '',
                name: ''
            }
        },
        created() {
            window.canGoBack = true;
            window.origin = null;
            let that = this;
            getAjaxRequest("order_cache", ajaxUrls.user + '', that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function(response) {
                that.result = response.data;
            }, function(error) {
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        components: {
            HeaderBar,
            Search,
            ModalDialog,
        },
        directives: {
            focus: {
                inserted: function(el) {
                    // 聚焦元素
                    el.focus()
                }
            }
        },
        methods: {
            searchByKey() {
                if (!this.username) {
                    this.result = [];
                } else {
                    let that = this;
                    getAjaxRequest("order_cache", ajaxUrls.user + that.username, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function(response) {
                        that.result = response.data;
                    }, function(error) {
                        _util.showErrorTip('您的网络可能出了点问题:(');
                    });
                }
            },
            deal() {
                let user_id = this.userID,
                    action = 'forward',
                    that = this;
                axios.post(ajaxUrls.orderinfo + that.$route.query._id + '/deal', {
                    user_id: user_id,
                    action: action
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                        that.url('/');
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');

                })
            },
            showAlert(item) {
                this.userID = item.user_id;
                this.name = item.name;
                this.$refs.confirmModal.showModal({
                    text: '确认是否转发给' + item.name + '为处理？'
                });
            },
            goInfo(item) {
              localStorage.user_Name =item.name;
              localStorage.user_ID = item.user_id;
              this.$router.go(-1);
            },

        }
    }

</script>
<style lang="sass" scoped>
    .empty {
        padding: 16px;
        color: #4d4d4d;
    }

    .item {
        padding: 0 0 0 16px;
        color: #4d4d4d;
        &:active {
            background-color: #eee;
        }
        .box {
            padding: 16px 0;
            border-bottom: 1px #cfcfcf solid;
        }
    }

</style>
