<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44 fixed",
            placeholder='搜索姓名（如输入"何"）',
            v-model="username",
            @changeCallback="searchByKey"
        )
        div.mt44.pt50.pb60
            div.empty.f16.rel(v-if="!result.length") 无搜索结果
            div.item.rel(v-if="result.length", v-for="item in result")
                div.box.f16.rel {{ item.name }}
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import Search from '../components/common/Search'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '转发',
                username: '',
                result: []
            }
        },
        components: {
            HeaderBar,
            Search
        },
        mounted() {},
        methods: {
            searchByKey() {
                if (!this.username) {
                    this.result = [];
                } else {
                    // this.result = [{
                    //         _id: '00001',
                    //         username: 'jerry'
                    //     },
                    //     {
                    //         _id: '00002',
                    //         username: 'jsonay'
                    //     },
                    //     {
                    //         _id: '00003',
                    //         username: 'Linda'
                    //     }
                    // ];
                    let that=this;
                    axios.get(ajaxUrls.user+that.username).then(function(rsp){
                      that.result=rsp.data.data;
                      console.log(that.result);
                    })
                }
            }
        }
    }

</script>
<style lang="sass" scoped>
    .empty {
        padding: 16px;
        color: #4d4d4d;
    }

    .item {
        padding: 0 0 0 16px;
        color: #4d4d4d;
        &:active {
            background-color: #eee;
        }
        .box {
            padding: 16px 0;
            border-bottom: 1px #cfcfcf solid;
        }
    }

</style>
