<template>
  <span class="tooltip" v-if="tooltip"
    ><img :src="path" :alt="alt" :style="heigth" />
    <span class="tooltiptext">{{ tooltip }}</span>
  </span>
  <img v-else :src="path" :alt="alt" :style="heigth" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    tooltip: {
      type: String,
    },
  },
  computed: {
    path() {
      return require(`@/assets/icons/${this.icon}.png`);
    },
    alt() {
      return `Icon for ${this.icon}`;
    },
    heigth() {
      if (this.size) {
        return `height: ${this.size}px;`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
img {
  height: 30px;
}

.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  position: absolute;
  visibility: hidden;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
  top: 30px;
  width: auto;
  min-width: 100px;
  left: 0;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
