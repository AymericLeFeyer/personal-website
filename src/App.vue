<template>
  <breadcrumb />
  <router-view />
</template>

<script>
import Breadcrumb from "./components/Breadcrumb.vue";
export default {
  name: "App",
  components: {
    Breadcrumb,
  },
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>
