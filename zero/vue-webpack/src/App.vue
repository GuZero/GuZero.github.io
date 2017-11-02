<template>
  <div id="app">
   <p>{{count}}</p>
   <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
   </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      count:0
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
