<template lang="jade">
    div.footer.flex.fixed
        router-link.flexmodel.basic(to="/terminal/foo",  active-class="active",  replace exact ) 基本信息
        router-link.flexmodel.equipment(to="/terminal/foo/equipmentinfo", active-class="active", replace) 设备信息
        router-link.flexmodel.ad( to="/terminal/foo/adinfo", active-class="active", replace) 广告排期
        router-link.flexmodel.journal( to="/terminal/foo/journal", active-class="active",  replace,) 状态日志
</template>

<script>
    export default {
        props: ["footerconfig"]


    }

</script>
