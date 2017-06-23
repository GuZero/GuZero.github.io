<template lang="jade">
    div.footer.flex
        router-link.flexmodel.order(to="/", :class="{ active: footerconfig.isorder }", replace) 工单
        router-link.flexmodel.terminal(to="/terminal", :class="{ active: footerconfig.isterminal }", replace) 终端
        router-link.flexmodel.mine(to="/mine", :class="{ active: footerconfig.ismine }", replace) 我的
</template>

<script>
    export default {
        props: ["footerconfig"]
    }

</script>
