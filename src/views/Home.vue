<template>
  <div class="home">
    <h1>Aymeric Le Feyer</h1>
    <span class="content__icon">🥸</span>
    <p>
      🇫🇷 French Web & Mobile developer. Currently collaborate with
      <a href="https://www.pit.fr" target="_blank" class="link">Pit</a> the day,
      and as a
      <a
        href="https://www.societe.com/societe/monsieur-aymeric-le-feyer-901600254.html"
        target="_blank"
        class="link"
        >freelancer</a
      >
      at night. Graduate of E-Services Master at
      <a href="https://www.univ-lille.fr/" target="_blank" class="link"
        >Université de Lille</a
      >.
    </p>
    <br />
    <div class="divider"></div>
    <div class="actions">
      <page-link route="/now" icon="👋" name="Now" />
      <page-link route="/portfolio" icon="🚀" name="Portfolio" />
      <page-link href="http://blog.aymeric.lefeyer.fr/" icon="✏️" name="Blog" />
      <page-link route="/resume" icon="📜" name="Resume" />
      <page-link route="/contact" icon="📞" name="Contact" />
    </div>
    <div class="divider"></div>
    <br />
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
