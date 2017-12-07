<template lang="jade">
    div.select_box
        transition(name="fade")
            div.select_layer.fixed(@click="isShowSelectBox=false",v-if="isShowSelectBox")
        transition(name="bounce")
            ul.select_list.fixed(v-if="isShowSelectBox")
                li.rel.select_title(v-if="selectTitle") {{selectTitle}}
                li.select_item.rel( v-for="(item,index) in selectList",:key="index",@click="selectItem(item,index)") 
                    i.select_icon.active(v-if="checkIndex == index")
                    i.select_icon(v-else)
                    span {{ item[itemInfo] }}
</template>

<script>
    export default {
        props: [
            "selectList",
            "selectTitle",
            "itemInfo"          
        ],
        data(){
            return {
                isShowSelectBox: false,
                checkIndex : null,
            }
        },
        methods: {
            selectItem(_reason,_index){
                var that = this;
                this.checkIndex = _index;
                setTimeout(function(){
                    that.$emit('selectCallback',_reason);
                },30)
            }
        }
    }

</script>

<style lang="sass" scoped>
    
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter,.fade-leave-to/* .fade-leave-active in below version 2.1.8 */ {
      opacity: 0;
    }
    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform:  translate(-50%,-50%) scale(0);
      }

      100% {
        transform:  translate(-50%,-50%) scale(1);
      }
    }
    .select_box{
        .select_layer {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .6);
            z-index: 9001;
        }
        .select_list{
            top: 50%;
            left: 50%;
            background-color: #fff;
            width: 84%;
            transform: translate(-50%,-50%) scale(1);
            -webkit-transform: translate(-50%,-50%) scale(1);
            -moz-transform: translate(-50%,-50%) scale(1);
            z-index: 9001;
            max-height: 70%;
            overflow: auto;
            .select_title{
                padding: 12px 12px;
                text-align: center;
                font-size: 16px;
            }
            .select_item{
                padding: 12px 12px 12px 50px;
                font-size: 15px;
                .select_icon{
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    display: block;
                    width: 24px;
                    height: 24px;
                    margin-top: -12px;
                    background: url('//img.aimoge.com/FryjUrJu11Aj7grI6Sa_mWO-WlE0') no-repeat;
                    background-size: 100%;
                    &.active{
                        background-image: url('//img.aimoge.com/Fv5qFfelGJMd7qzXX7ssH95Ktrz6');
                    }
                }
            }
        }
    }

</style>
