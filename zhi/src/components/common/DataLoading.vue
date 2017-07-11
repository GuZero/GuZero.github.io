<template lang="jade">
    div.md-loading
        div.loadingArea
            div.mgLoadingWarp.rel.block(ref="loading")
                span.load
                    i.icon.ion-loading-c.rel
                    label 加载中...
            div.mgLoadingWarp.rel.none(ref="empty")
                span 没有更多数据了...
        div.empty-content.rel(ref="emptyBox")
            div.empty-img
            p {{ text || "暂无数据" }}
</template>

<script>
    export default {
        props: ["text"],
        methods: {
            showLoading() {
                let $loading = this.$refs.loading,
                    $empty = this.$refs.empty;
                $loading.removeClassName('none').addClassName('block');
                $empty.removeClassName('block').addClassName('none');
            },
            hideLoading() {
                let $loading = this.$refs.loading,
                    $empty = this.$refs.empty;
                $loading.removeClassName('block').addClassName('none');
                $empty.removeClassName('block').addClassName('none');
            },
            showEnd() {
                let $loading = this.$refs.loading,
                    $empty = this.$refs.empty;
                $loading.removeClassName('block').addClassName('none');
                $empty.removeClassName('none').addClassName('block');
            },
            isLoading() {
                let flag = false,
                    $loading = this.$refs.loading;
                if ($loading && $loading.style.display == 'block') flag = true;
                return flag;
            }
        }
    }

</script>

<style lang="sass" scoped>
    .loadingArea {
        height: auto;
        padding-top: 10px;
        .top0 {
            margin-top: 0;
            padding-top: 0;
        }
        .mgLoadingWarp {
            margin-top: 0;
        }
    }
    
    .mgLoadingWarp.block,
    .sysLoading.block {
        display: block;
    }
    
    .mgLoadingWarp.none,
    .sysLoading.none {
        display: none;
    }

</style>
