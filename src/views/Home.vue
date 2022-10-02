<template>
  <div class="home">
    <h1>Aymeric</h1>
    <div class="actions">
      <page-link route="/now" icon="👋" name="Now" />
      <page-link route="/portfolio" icon="🚀" name="Portfolio" />
      <page-link href="http://blog.aymeric.lefeyer.fr/" icon="✏️" name="Blog" />
      <page-link route="/resume" icon="📜" name="Resume" />
      <page-link route="/contact" icon="📞" name="Contact" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PageLink from "../components/PageLink.vue";

export default {
  name: "Home",
  components: {
    PageLink,
  },
};
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
