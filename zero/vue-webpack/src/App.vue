<template>
  <div id="app">
    <swipe class="my-swipe">
      <swipe-item v-for="item in swipeInfo" :key="item.id">
          <a :href="item.href">
              <img :src="item.imgSrc">
          </a>
      </swipe-item>
    </swipe>
  </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import {Swipe,SwipeItem} from 'vue-swipe'
export default {
  name: 'app',
  data(){
    return{
        show:true,
        swipeInfo:[{
            id:0,
            href:'//www.baidu.com',
            imgSrc:'//covteam.u.qiniudn.com/test21.jpg'
        },{
            id:1,
            href:'//www.baidu.com',
            imgSrc:'//covteam.u.qiniudn.com/test18.jpg'
        },{
            id:2,
            href:'//www.baidu.com',
            imgSrc:'//covteam.u.qiniudn.com/test19.jpg'
        }]
    }
  },
  components: {
      swipe:Swipe,
      swipeItem:SwipeItem
  },
  methods:{
    close(){
      this.show=false;
    },
    submit(){
      this.show=false;
    }
  }
}
</script>

<style>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  img{
      width: 100%;
      height: 100%;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>
