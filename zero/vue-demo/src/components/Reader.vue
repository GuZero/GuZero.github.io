<template>
    <div id="reader">
        <top-nav></top-nav>
        <div class="read-container" :bg="bg_color" :night="bg_night" ref="fz_size">
            <h4>{{title}}</h4>
            <div class="chapterContent" v-show="!loading">
                <p v-for="(c,i) in content" :key="i">{{c}}</p>
            </div>
            <div class="btn-bar" v-show="!loading">
                <ul class="btn-tab">
                    <li class="prev-btn" @click="prevChapter">上一章</li>
                    <li class="next-btn" @click="nextChapter">下一章</li>
                </ul>
            </div>
        </div>
        <div class="page-up" @click="pageUp()"></div>
        <div class="click-mask" @click="clickBar"></div>
        <div class="page-down" @click="pageDown()"></div>
        <div class="top-nav-pannel-bk font-container" v-show="font_panel"></div>
        <font-nav></font-nav>
        <bottom-nav></bottom-nav>
        <cover :class="{hide:!list_panel}"></cover>
        <list-panel :class="{show:list_panel}" :bookId="$route.params.id"></list-panel>
        <loading v-show="loading"></loading>
    </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import axios from "axios";
import localEvent from "../store/local";
import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav.vue";
import FontNav from "./FontNav/FontNav.vue";
import ListPanel from "./ListPanel/ListPanel.vue";
import Cover from "./Cover.vue";
import Loading from "./Loading/Loading.vue";
export default {
  data() {
    return {
      bar: false,
      timer: null,
      title: "",
      content: [],
      loading: false,
      showList: false,
      booksReadInfo: {}
    };
  },
  components: {
    TopNav,
    BottomNav,
    FontNav,
    ListPanel,
    Cover,
    Loading
  },
  created(){
      if(localEvent.StorageGetter('fz_size')){
          this.$store.state.fz_size=localEvent.StorageGetter('fz_size')
      }
  }
};
</script>
