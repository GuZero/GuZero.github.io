<template>
   <div class="container">
       <nav class="nav-header">
           <header>
               <a href="/" class="brand">移动书城</a>
               <a href="/" class="avatar"></a>
           </header>
           <div class="swipe">
               <mt-swipe :auto="5000">
                   <mt-swipe-item>
                       <img src="../assets/images/1.jpg" alt="">
                   </mt-swipe-item>
                    <mt-swipe-item>
                       <img src="../assets/images/2.jpg" alt="">
                   </mt-swipe-item>
                    <mt-swipe-item>
                       <img src="../assets/images/3.jpg" alt="">
                   </mt-swipe-item>
                    <mt-swipe-item>
                       <img src="../assets/images/4.jpg" alt="">
                   </mt-swipe-item>
                    <mt-swipe-item>
                       <img src="../assets/images/5.jpg" alt="">
                   </mt-swipe-item>
               </mt-swipe>
           </div>
       </nav>
       <nav class="home-nav">
           <router-link class="guide-nav-div" v-for="(item,index) in type" :key="item.num" to="{path:'category',query:{type:item.num}}"
           @click="openBookCategory(item.num)">
           <i class="icon icon-sort"></i>
           <h4 class="guide-nav-h">{{item.word}}</h4>
           </router-link>
       </nav>
       <div v-if="!loading">
           <recommend :booklist="booklist|hot" title="热门小说"></recommend>
           <recommend :booklist="booklist|top" title=""
       </div>
   </div>  
</template>
