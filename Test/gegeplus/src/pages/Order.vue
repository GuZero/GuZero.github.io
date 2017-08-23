<template>
    <div class="Pay">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="content-box">
           <div class="item">
               <div class="item-t">
                   <div>2017-07-23 13:00</div>
                   <div>26元</div>
               </div>
               <div class="item-c rel" @click="gotoList">
                   <div>
                       <div>订单编号：**************</div>
                       <div>购物网点：**************</div>
                   </div>
                   <div class="aw-r"></div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    data() {
        return {
            pageTitle: '订单列表',
            btnconfig: {
                isgoback: 1
            },
            items:[],
            _id:''
        }
    },
    components: {
        HeaderBar
    },
    created(){
        
    },
    mounted() {

    },
    methods: {
       gotoList(item){
           this.url('/order/list',{_id:item._id});
       } 
    }
}
</script>
<style scoped>
.c-blue {
    color: #008cff;
}

.c-gary {
    color: #afafaf;
}
.content-box{
    padding: 8px;
    padding-top:52px;
}
.aw-r::after {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-top: 2px #c7c7cc solid;
    border-right: 2px #c7c7cc solid;
    border-top-right-radius: 2px;
    transform: rotate(45deg);
}
.item{
    padding-left: 20px;
    background: #fff;
    box-sizing: border-box;
}
.item-t{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    font-size: #333;
    height: 36px;
    align-items: center;
    padding-right: 10px;
}
.item-c{
    display: flex;
    color: #a8a8a8;
    justify-content:space-between;
    padding:20px 0;
}
.aw-r {
    position: absolute;
    right: 26px;
    top: 36%;
    /* margin-top: -6px */
}
</style>



