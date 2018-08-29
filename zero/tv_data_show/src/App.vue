<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  background: url("//img.aimoge.com/llxjn1k6oSSnCjlQUvQOi184SVoe") no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}
#app {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
