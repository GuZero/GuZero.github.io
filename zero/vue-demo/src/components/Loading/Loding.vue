<template>
    <div class="loading-component">
        <svg class="spinner" :style="loadingSize" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"></svg>
        <circle class="path" :style="lodingColor" fill="none" :stroke-width="stroke" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50
    },
    stroke: {
      type: Number,
      default: 3.5
    },
    color: {
      type: String,
      default: "#ed424b"
    }
  },
  computed: {
    loadingSize() {
      const newSize = this.size + "px";
      return {
        width: newSize,
        height: newSize
      };
    },
    loadingColor() {
      return {
        stroke: this.color
      };
    }
  }
};
</script>

<style lang="less" type="text/less">
.loading-component {
  display: inline-block;
  pointer-events: none;
  will-change: transform, opacity;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@offset: 187;
@duration: 1.4s;

.spinner {
  animation: rotator @duration linear infinite;
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: @offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash @duration ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: @offset;
  }
  50% {
    stroke-dashoffset: @offset/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: @offset;
    transform: rotate(450deg);
  }
}
</style>

