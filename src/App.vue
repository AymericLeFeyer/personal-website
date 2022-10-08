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
  mounted() {
    this.setTheme();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        this.setTheme();
      });
  },

  methods: {
    setTheme() {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //dark theme
        document
          .querySelector('meta[name="theme-color"]')
          .setAttribute("content", "#20211F");
      } else {
        //light theme
        document
          .querySelector('meta[name="theme-color"]')
          .setAttribute("content", "#f3f3f3");
      }
    },
  },
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>
