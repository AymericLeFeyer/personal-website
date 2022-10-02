<template>
  <breadcrumb />
  <div class="center">
    <router-view class="content" />
  </div>
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

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
