<template lang="jade">
    div.message
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60
            div 消息中心
</template>

<script>
    import HeaderBar from '../components/common/Header'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bodyBg: 'gray',
                pageTitle: '消息中心'
            }
        },
        components: {
            HeaderBar
        }
    }

</script>

<style lang="sass" scoped>
    .message {}

</style>
