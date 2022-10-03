<template>
  <img :src="path" :alt="alt" :style="heigth" />
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
        return `height: ${this.size}px`;
      }
    },
  },
};
</script>

<style></style>
