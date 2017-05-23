<template lang="jade">
    div.create-order
        HeaderBar(
        :title="pageTitle"
        )
        div.mt44
            router-view
        TransmitFooter(:footerconfig="footerconfig")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import TransmitFooter from '../components/common/TransmitFooter'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bodyBg: 'gray',
                pageTitle: '终端详情',
                footerconfig: {
                    isorder: true
                },

            }
        },
        components: {
            HeaderBar,
            TransmitFooter
        },
        // created() {
        //        this.url('/terminal/foo');
        //  }
        methods: {}
    }
    //$route.params.code

</script>

<style lang="sass" scoped>


</style>
