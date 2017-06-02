<template lang="jade">
    div.create-order
        HeaderBar(
        :title="pageTitle",
        origin="terminal"
        )
        div.mt44
            router-view
        TransmitFooter(:footerconfig="footerconfig",:terminal_id="terminal_id")
        ModalDialog(ref="aboutModal")

</template>

<script>
    import HeaderBar from '../components/common/Header'
    import TransmitFooter from '../components/common/TransmitFooter'
    import ModalDialog from '../components/elements/ModalDialog'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bodyBg: 'gray',
                pageTitle: '终端详情',
                footerconfig: {
                    isorder: true
                },
                terminal_id: this.$route.params.code
            }
        },
        components: {
            HeaderBar,
            TransmitFooter,
            ModalDialog
        },
        watch: {
          '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                let that = this;
                this.terminal_id = this.$route.params.code;
            }
        }
    }
    //$route.params.code

</script>

<style lang="sass" scoped>

</style>
