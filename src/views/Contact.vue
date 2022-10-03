<template>
  <div>
    <h1>Contact</h1>
    <span class="content__icon"><custom-icon :icon="icon" size="70" /></span>
  </div>
</template>

<script>
import CustomIcon from "../components/Icon.vue";
export default {
  components: {
    CustomIcon,
  },
  computed: {
    icon() {
      return this.$route.meta.breadcrumb[1].icon;
    },
  },
};
</script>

<style lang="scss" scoped></style>
