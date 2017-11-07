<template>
  <div class="book-detail">
      <loading v-show="loading"></loading>
      <div class="detail-content" v-if="bookDetail">
          <div class="detail-linear">
              <header class="detail-top">
                  <a @click="detail-title">
                      <i class="back"></i>
                      <h2 class="detail-title">{{bookDetail.name}}</h2>
                  </a>
                  <router-link to="/" class="home-btn">
                        <i class="iconfont icon-home"></i>
                  </router-link>
              </header>
              <div class="detail-con" v-if="!loading">
                  <div class="detail-img">
                      <img :src="bookDetail.images" alt="" @error="loadImage($event)">
                  </div>
                  <div class="detail-main">
                      <h3 class="name">{{bookDetail.name}}</h3>
                      <p class="author">作者：{{bookDetail.author}}</p>
                      <p class="type">分类：{{bookDetail.type}}</p>
                      <p class="word-count">{{bookDetail.wordcount}}</p>
                      <rate :score="bookDetail.ratings"></rate>
                  </div>
              </div>
              <div class="read-btn" v-if="!loading">
                  <div>
                      <button @click="openBook">
                          <router-link :to="{path:'/reader/'+bookDetail.id}"></router-link>
                      </button>
                  </div>
                  <div>
                      <button @click="openBook">
                          <router-link :to="{path:'/reader/'+bookDetail.id}"></router-link>
                      </button>
                  </div>
              </div>
          </div>
        <div v-if="!loading">
            <div class="detail-intro">
                <p :class="{show5:!showmore}" @click="showmore=!showmore">{{bookDetail.intro}}</p>
            </div>
            <div class="detail-tag">
                <h3 class="tag">类别标签</h3>
                <ul class="tag-btn clearfix">
                    <li>
                        {{bookDetail.type}}
                    </li>
                    <li>
                        东方玄幻
                    </li>
                </ul>
            </div>
            <div class="detail-like">
                <h3 class="like-title">喜欢本书的人也喜欢</h3>
                <ul v-for="(item,index) in likes" :key="index">
                    <similar :like="item" :key="index"></similar>
                </ul>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import axios from 'axios'
  import Similar from './Similar.vue'
  import defaultImage from '@/assets/js/utils.js'
  import Rate from '@/components/rate/rate'
  import Loading from './Loading/Loading.vue'
export default {
  data(){
      return{
          loading:false,
          content:null,
          bookDetail:{},
          likes:[],
          showmore:false
      }
  },
  created(){
      this.getBookDetail(this.$route.params.id)
  },
  methods: {
      getBookDetail(bookId){
          this.loading=true;
          axios.get(`${this.common.api}/booklist?id=${bookId}`)
                .then((res)=>{
                    this.loading=false;
                    this.showmore=false;
                    this.bookDetail=res.data;
                    this.likes=res.data.likes.split('-')
                })
      },
      openBook(){
          this.$store.state.bar=false
      },
      back(){
          this.$route.go(-1);
      },
      loadImage(e){
          this.common.defaultImage(e);
      }
  },
  computed: {
      ...mapState([
          'curBookDetailId'
      ])
  },
  components:{
      Similar,
      Rate,
      Loading
  },
  watch:{
      $route(to,from){
          this.getBookDetail(to.params.id)
      }
  }
}
</script>

