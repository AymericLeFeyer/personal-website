<template>
  <div class="home">
    <h1>Aymeric <span class="lastname">Le Feyer</span></h1>
    <span class="content__icon"
      ><custom-icon :square="true" icon="emojis/aymeric" size="100"
    /></span>
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
      at night. Graduated of E-Services Master at
      <a href="https://www.univ-lille.fr/" target="_blank" class="link"
        >Université de Lille</a
      >.
    </p>
    <br />
    <div class="divider"></div>
    <div class="actions">
      <page-link
        route="/now"
        icon="emojis/hand"
        name="Now"
        class="home__item"
      />
      <page-link
        route="/portfolio"
        icon="emojis/rocket"
        name="Portfolio"
        class="home__item"
      />
      <page-link
        route="/resume"
        icon="emojis/paper"
        name="Resume"
        class="home__item"
      />
      <page-link
        route="/talks"
        icon="emojis/mic"
        name="Talks"
        class="home__item"
      />
      <page-link
        route="/hobbies"
        icon="emojis/heart"
        name="Hobbies"
        class="home__item"
      />
      <page-link
        route="/contact"
        icon="emojis/call"
        name="Contact"
        class="home__item"
      />
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
@import "@/styles/variables.scss";
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.home__item {
  width: 25%;

  @media (max-width: $breakpoint-medium) {
    width: 40%;
  }
}
.content__icon {
  margin-top: -15px;
}

.lastname {
  transition: 1s ease all;

  @media (max-width: $breakpoint-small) {
    opacity: 0;
  }
}
</style>
