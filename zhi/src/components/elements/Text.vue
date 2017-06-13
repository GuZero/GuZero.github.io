<template lang="jade">
    div.text.rel
        div.tag.abs {{ tag }}
        div.box.rel(:style="marginleftstyle") {{ text }}
</template>

<script>
    export default {
        data() {
            let mrl = this.$props.marginleft;

            return {
                marginleftstyle: !mrl ? {
                    marginLeft: '75px'
                } : {
                    marginLeft: mrl + 'px'
                }
            };
        },
        props: ["tag", "text", "marginleft"]
    }

</script>

<style lang="sass" scoped>
    .text {
        .tag {
            color: #6e6e6e;
            left: 0;
            top: 0;
        }
    }

</style>
