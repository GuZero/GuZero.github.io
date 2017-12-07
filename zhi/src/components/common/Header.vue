<template lang="jade">
    div.gege-header.fixed(:class="{noborder: noborder}")
        div.title.center.ellipsis.f16.abs {{ title }}
        a.icgoback(
            v-if="hideGoback? false: true",
            @click="goback(origin)",
            style="left: 0;"
        )
        a.icclock(
            v-if="hasConfig? btnconfig.ismsg: false",
            :class="{active: unreadNum > 0}"
            @click.prevent.stop="$emit('msgBtnCallback')"
        )
        a.icsearch(
            v-if="hasConfig? btnconfig.issearch: false",
            @click.prevent.stop="$emit('searchBtnCallback')"
        )
        a.icadd(
            v-if="hasConfig? btnconfig.isadd: false",
            @click.prevent.stop="$emit('addBtnCallback')"
        )
        a.icedit(
            v-if="hasConfig? btnconfig.isedit: false",
            @click.prevent.stop="$emit('editBtnCallback')"
        )
        a.icfinish(
            v-if="hasConfig? btnconfig.isfinish: false",
            @click.prevent.stop="$emit('finishBtnCallback')",
            style="right: 0;"
        )
        a.icmore(
            v-if="hasConfig? btnconfig.ismore: false",
            @click.prevent.stop="$emit('moreBtnCallback')",
            style="right: 0;"
        )
        a.icset(
            v-if="hasConfig? btnconfig.isset: false",
            @click.prevent.stop="$emit('setBtnCallback')",
            style="right: 0;"
        )
        a.icbatch(
            v-if="hasConfig? btnconfig.isbatch: false",
            @click.prevent.stop="$emit('batchBtnCallback')",
            style="right: 0;"
        ) 批量清柜
        a.icend(
            v-if="hasConfig? btnconfig.isend: false",
            @click.prevent.stop="$emit('endBtnCallback')",
            style="right: 0;"
        ) 结束收货
        a.iclogout(
            v-if="hasConfig? btnconfig.islogout: false",
            @click.prevent.stop="$emit('logoutBtnCallback')"
        ) 退出
        a.text-more(
            v-if="hasConfig? btnconfig.is_more: false",
            @click.prevent.stop="$emit('moreBtnCallback')"
        ) 更多
</template>

<script>
    export default {
        data() {
            let configs = this.$props.btnconfig,
                hasConfig = configs && Object.keys(configs).length,
                hideGoback = hasConfig && (configs.isgoback === false || configs.isgoback <= 0);
            let ismsg = hasConfig && configs.ismsg ? configs.ismsg:null;
            return {
                hasConfig: hasConfig,
                version: '1',
                hideGoback: hideGoback,
                unreadNum: 0,
                ismsg : ismsg
            };
        },
        created() {
            document.title = this.title;
            if (this.ismsg) {
                this.fetchData();
            }
        },
        methods:{
            fetchData() {
                let that = this;
                getAjaxRequest("message_cache",ajaxUrls.messages + 'unread',that.version,20*1000,6*60*60*1000,
                    function (response) {
                        _util.hideSysLoading();
                        if (response.status == 0) {
                           that.unreadNum = response.data.numbers;
                        }else {
                            if (response.msg) _util.showErrorTip(response.msg);
                        }
                    },
                    function (error) {
                        
                    })
            },
        },
        props: ["title", "btnconfig", "noborder","origin"]
    }

</script>
