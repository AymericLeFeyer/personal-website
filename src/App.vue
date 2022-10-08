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
@import "@/styles/variables.scss";
.content {
  transition: 1s ease all;
  background-color: var(--tile-background-color);
  width: 750px;
  border-radius: 20px;
  position: relative;
  padding: 40px 80px 20px 80px;
  margin-top: 30px;
  text-align: left;
  overflow-wrap: break-word;

  h1 {
    transition: 1s ease all;
    position: absolute;
    top: -35px;
    left: 80px;
    font-size: 40px;
    font-weight: 700;
    width: 70%;
  }

  @media (max-width: $breakpoint-large) {
    width: 100%;
    border-radius: 0px;
    padding: 40px 40px 20px 40px;

    .content__icon {
      right: 20px;
    }

    h1 {
      left: 20px;
      font-size: 35px;
      margin-top: 10px;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 60px;

  @media (max-width: $breakpoint-large) {
    margin-bottom: 0px;
    margin-top: 100px;
  }
}
</style>
