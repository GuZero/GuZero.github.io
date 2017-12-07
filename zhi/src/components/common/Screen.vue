<template lang="jade">
    div.screen 
        div.info-box.flex-g(v-if="!show")
            div.item(@click.prevent.stop="$emit('isSearch')")
                span.search-icon 搜索
            div.item(@click.prevent.stop="$emit('isScreen')")
                span.screen-icon 筛选
        div.search(v-else)
            div.input.rel
                input.rel(
                    type="text",
                    :placeholder="placeholder",
                    :value="value",
                    @input="setParentVar($event.target.value)",
                )
            div.btn(@click="$emit('searchFun')" v-if="value") 搜索
            div.btn(@click.prevent.stop="$emit('cancelFun')" v-else) 取消     
</template>

<script>
    export default {
        props: {
            placeholder: String,
            value: String,
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            setParentVar(value) {
                this.$emit("input", value);
            }
        }
    };

</script>
<style scoped>
    .item {
        width: 50%;
        text-align: center;
        height: 36px;
        line-height: 36px;
        border-bottom: 1px solid #ccc;
        background: #fff;
    }
    
    .item span {
        padding-left: 18px;
    }
    
    .item .search-icon {
        background: url("//img.aimoge.com/FhtEY0_t6E4z-SrYiBg5Uv72tlnq")no-repeat left center;
    }
    
    .item .screen-icon {
        background: url("//img.aimoge.com/FoiHCoW7Du3rylAemhxH1gJd1F04")no-repeat left center;
    }
    
    .search {
        background-color: #cfcfcf;
        height: 46px;
        width: 100%;
        padding: 10px 16px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 5px;
        padding: 0 9px;
    }
    
    .input {
        background-color: #fff;
        border-radius: 22px;
        top: 0;
        padding: 0 30px 0 30px;
        width: 60%;
    }
    
    .input::before {
        content: "";
        display: block;
        position: absolute;
        background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;
        background-size: 100% auto;
        width: 14px;
        height: 14px;
        top: 6px;
        left: 22px;
    }
    
    .input input {
        font-family: "Microsoft Yahei";
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

</style>
