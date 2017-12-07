<template lang="jade">
    div.no-network.rel
        img.no-network-img(src='//img.aimoge.com/Fm6Kur5_5IsfnlIiRR2nErPqZkwE')
        div.no-network-info 暂无网络
        div.reload(@click.stop.prevent="$emit('fetchDataCallBack')") 重新加载
</template>

<script>
    export default {
        data(){
            return {
                
            }
        }
    }

</script>

<style lang="sass" scoped>
    .no-network {
        padding-top: 25%;
        text-align: center;
        .no-network-img {
            width: 122px;
            height: 122px;
            margin: 0 auto 16px;
        }
        .no-network-info {
            font-size: 14px;
            color: #6e6e6e;
            text-align: center;
        }
        .reload{
            margin: 42px auto 0;
            background: #07689f;
            height: 40px;
            line-height: 40px;
            width: 160px;
            color: #fff;
            font-size: 16px;
            text-align: center;
            border-radius: 24px;
        }
    }
</style>
