<template lang="jade">
div.message
  HeaderBar(
    :title="pageTitle",
  )
  div.nav.top44.fixed
    div.left.tab.rel(:class="{active: activeTab == 0}", @click="fetchData(0)")
      div
        label 所有任务
        label
    div.left.tab.rel(:class="{active: activeTab == 1}", @click="fetchData(1)")
      div
        label 我创建的
        label
    div.left.tab.rel(:class="{active: activeTab == 2}", @click="fetchData(2)")
      div
        label 我的待办
        label ({{num}})
    div.left.tab.rel(:class="{active: activeTab == 3}", @click="fetchData(3)")
      div
        label 我的已办
        label
</template>

<script>
    import HeaderBar from '../components/common/Header'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bodyBg: 'gray',
                pageTitle: '消息中心',
                activeTab: 2
            }
        },
        components: {
            HeaderBar
        },
        methods:{
          fetchData(index) {
              index > -1 ? this.activeTab = index : void 0;
              //getDataByTabIndex post ajax
              let that = this;
              that.page = 1;
              that.list = [];
              that.$refs.loading && that.$refs.loading.showLoading();
          },
        }
    }

</script>

<style lang="sass" scoped>
  $tabactive: #07689f;
  $cf: #cfcfcf;
  .nav {
      background-color: #fff;
      border-bottom: 1px $cf solid;
      width: 100%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      .tab {
          width: 25%;
          height: 42px;
          line-height: 42px;
          text-align: center;
          &:active {
              background-color: #eee;
          }
          &.active {
              color: $tabactive;
              &:after {
                  content: '';
                  display: block;
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  border: 1px $tabactive solid;
                  width: 40px;
                  margin-left: -20px;
              }
          }
      }
  }
</style>
