<template lang="jade">
    div.search
        div.input.rel
            input.rel(
                type="text",
                :placeholder="placeholder",
                @input="setParentVar($event.target.value)",
                @keyup="$emit('changeCallback')"
                @focus="$emit('changeCallback1')"
                @blur="$emit('changeCallback2')"
            ) 
</template>

<script>
    export default {
        props: ["placeholder"],
        methods: {
            setParentVar(value) {
                this.$emit('input', value)
            }
        }
    }

</script>

<style lang="sass" scoped>
    .search {
        background-color: #cfcfcf;
        height: 46px;
        width: 100%;
        padding: 10px 16px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    
    .input {
        background-color: #fff;
        border-radius: 22px;
        top: 0;
        padding: 0 50px 0 50px;
        &:before {
            content: '';
            display: block;
            position: absolute;
            background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;
            background-size: 100% auto;
            width: 14px;
            height: 14px;
            top: 6px;
            left: 22px;
        }
        input {
            font-family: 'Microsoft Yahei';
            background-color: transparent;
            height: 26px;
            line-height: 26px;
            top: 0;
            font-size: 14px;
            color: #323232;
            border: none;
            width: 100%;
            text-align: center;
        }
    }

</style>
