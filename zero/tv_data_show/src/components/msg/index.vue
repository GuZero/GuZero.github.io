<template>
  <div class="scroll-wrap">
   <vue-seamless-scroll :data="prizeList" :class-option="classOption">
     <ul class="item">
       <li v-for="(item, index) in prizeList" :key="index">{{item.name}}</li>
     </ul>
   </vue-seamless-scroll>
</div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  data() {
    return {
      prizeList: [
        { name: "秦淮去区雨花门地铁站001号柜139****0219 消费￥29.6" },
        { name: "秦淮去区雨花门地铁站002号柜156****0219 消费￥29.6" },
        { name: "秦淮去区雨花门地铁站003号柜151****0219 消费￥29.6" },
		{ name: "秦淮去区雨花门地铁站004号柜139****1462 消费￥29.6" },
		{ name: "秦淮去区雨花门地铁站001号柜139****0219 消费￥29.6" },
      ]
    };
  },
  components: {
    vueSeamlessScroll
  },
  computed: {
    classOption: function() {
      return {
        step: 0.5,
		limitMoveNum: 5,
		hoverStop:false
      };
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.scroll-wrap {
  height: 100%;
  width: 100%;
}
.warp ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
.warp li {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
</style>
