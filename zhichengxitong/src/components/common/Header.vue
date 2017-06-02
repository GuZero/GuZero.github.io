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
        a.iclogout(
            v-if="hasConfig? btnconfig.islogout: false",
            @click.prevent.stop="$emit('logoutBtnCallback')"
        ) 退出
</template>

<script>
    export default {
        data() {
            let configs = this.$props.btnconfig,
                hasConfig = configs && Object.keys(configs).length,
                hideGoback = hasConfig && (configs.isgoback === false || configs.isgoback <= 0);
            return {
                hasConfig: hasConfig,
                hideGoback: hideGoback
            };
        },
        props: ["title", "btnconfig", "noborder","origin"]
    }

</script>
