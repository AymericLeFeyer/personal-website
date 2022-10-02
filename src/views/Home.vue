<template>
  <div class="home">
    <h1>Aymeric</h1>
    <hr />
    <div id="home__routes">
      <link-page-vue route="/portfolio" name="Portfolio" icon="🗂" />
    </div>
    <hr />
  </div>
</template>

<script>
import LinkPageVue from "../components/LinkPage.vue";
export default {
  name: "Home",
  components: {
    LinkPageVue,
  },
};
</script>
