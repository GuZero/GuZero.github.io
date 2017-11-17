<template>
  <div>
      <div id="goods">
          <div class="menu-wrapper" ref="menuWrapper">
              <ul>
                  <li v-for="(item,index) in goods" :key="index" class="menu-item menu-item-hook" :class="{'current':currentIndex==index}"></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
