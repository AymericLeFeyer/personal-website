<template>
  <div>
    <h1>{{ title }}</h1>
    <span class="content__icon"><custom-icon :icon="icon" size="70" /></span>
    <slot></slot>
    <custom-footer />
  </div>
</template>

<script>
import CustomIcon from "./Icon.vue";
import CustomFooter from "./Footer.vue";
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    CustomIcon,
    CustomFooter,
  },
};
</script>

<style></style>
