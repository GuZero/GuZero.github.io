<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44 fixed",
            placeholder='搜索姓名（如输入"何"）',
            v-model="username",
            @changeCallback="searchByKey"
        )
        div.mt44.pt50.pb60
            div.empty.f16.rel(v-if="!result.length") 无搜索结果
            div.item.rel(v-if="result.length", v-for="item in result")
                div.box.f16.rel(@click="deal(item)") {{ item.name }}
        ModalDialog(ref="showalert", @confirmCallback="deal")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import Search from '../components/common/Search'
    import ModalDialog from '../components/elements/ModalDialog'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '转发',
                username: '',
                result: [],
                userID: '',
                name:''
            }
        },
        components: {
            HeaderBar,
            Search,
            ModalDialog,
        },
        methods: {
            searchByKey() {
                if (!this.username) {
                    this.result = [];
                } else {
                    let that = this;
                    axios.get(ajaxUrls.user + that.username).then(function(rsp) {
                        that.result = rsp.data.data;
                    })
                }
            },
            deal(item) {
                this.userID = item.user_id;
                this.name=item.name;
                let user_id = this.userID,
                    action = 'forward',
                    task_id = localStorage.task_id,
                    that = this;
                axios.post(ajaxUrls.orderinfo + task_id + '/deal', {
                    user_id:user_id,
                    action:action
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                        that.goInfo(task_id);
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                })
            },
            showAlert(item){
              this.$refs.showalert.showModal({
                  title: item.name,
                  hideText: true
              });
            },
            goInfo(_id) {
                this.url('/order/' + _id);
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
