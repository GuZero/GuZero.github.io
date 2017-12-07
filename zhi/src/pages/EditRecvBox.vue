<template lang="jade">
    div.edit-recv-box
        HeaderBar(
            :title="pageTitle",
            :btnconfig="btnconfig",
            @finishBtnCallback="goToFinish"
        )
        div.mt44
            div.input.rel
                input(placeholder="请输入快递柜信息", v-model="boxInfo" type="text" v-focus)
                label.clear-btn(@click.stop.prevent ='clearInput') 清空
</template>

<script>
    import HeaderBar from '../components/common/Header'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '输入快递柜信息',
                bodyBg: 'gray',
                btnconfig: {
                    isgoback: 1,
                    isfinish: 1
                },
                boxInfo: ''
            }
        },
        directives: {
          focus: {
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
          }
        },
        created() {
            window.canGoBack = true;
        },
        components: {
            HeaderBar
        },
        methods: {
            goToFinish() {
                let that = this;
                let finishUrl = '';
                let boxInfos = store.get('RecvBoxInfo')||[];
                if (boxInfos.indexOf(that.boxInfo) == -1) {
                    boxInfos.push(that.boxInfo);
                    store.set('RecvBoxInfo',boxInfos);   
                    that.$router.go(-1);
                }else{
                    _util.showErrorTip('此编码已经存在，请勿重复输入！');
                }
            },
            clearInput() {
                this.boxInfo = '';
            }
        }
    }

</script>

<style lang="sass" scoped>
    .input {
        font-size: 14px;
        padding: 16px;
        background: #fff;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        input {
            border: none;
            font-size: 14px;
            width: 100%;
            height: 20px;
            line-height: 20px;
        }
        .clear-btn{
            position: absolute;
            top: 0;
            right: 16px;
            height: 52px;
            line-height: 52px;
        }
    }

</style>
