<template>
  <div class="home">
    <h1>Aymeric <span class="lastname">Le Feyer</span></h1>
    <span class="content__icon"><custom-icon icon="aymeric" size="100" /></span>
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
      <page-link route="/now" icon="hand" name="Now" />
      <page-link route="/portfolio" icon="rocket" name="Portfolio" />
      <page-link
        href="http://blog.aymeric.lefeyer.fr/"
        icon="pencil"
        name="Blog"
      />
      <page-link route="/resume" icon="paper" name="Resume" />
      <page-link route="/hobbies" icon="dice" name="Hobbies" />
      <page-link route="/contact" icon="call" name="Contact" />
    </div>
    <div class="divider"></div>
    <br />
    <custom-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import PageLink from "../components/PageLink.vue";
import CustomIcon from "../components/Icon.vue";
import CustomFooter from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    PageLink,
    CustomIcon,
    CustomFooter,
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

.content__icon {
  margin-top: -15px;
}

.lastname {
  transition: 1s ease all;
}

@media (max-width: 500px) {
  .lastname {
    opacity: 0;
  }
}
</style>
