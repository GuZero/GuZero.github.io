<template lang="jade">
    div.submits.center.fixed(
        @click="$emit('submitCallback')",
        :class="theme"
    ) {{ text }}
</template>

<script>
    export default {
        props: ["theme", "text"]
    }

</script>

<style lang="sass" scoped>
    .submits {
        border-top: 1px #cfcfcf solid;
        background-color: #f9f9f9;
        color: #323232;
        display: block;
        width: 100%;
        height: 51px;
        line-height: 51px;
        color: #333;
        font-size: 16px;
        left: 0;
        bottom: 0;
        z-index: 9000;
        &.white {
            background-color: #fff;
            color: #07689f;
        }
        &:active {
            background-color: #eee;
        }
    }

</style>
