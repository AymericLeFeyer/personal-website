<template>
  <div class="home">
    <h1>Aymeric <span class="lastname">Le Feyer</span></h1>
    <span class="content__icon"
      ><custom-icon icon="emojis/aymeric" size="100"
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
      <page-link route="/now" icon="emojis/hand" name="Now" class="home-item" />
      <page-link
        route="/portfolio"
        icon="emojis/rocket"
        name="Portfolio"
        class="home-item"
      />
      <page-link
        route="/resume"
        icon="emojis/paper"
        name="Resume"
        class="home-item"
      />
      <page-link
        href="http://blog.aymeric.lefeyer.fr/"
        icon="emojis/pencil"
        name="Blog"
        class="home-item"
      />
      <page-link
        route="/hobbies"
        icon="emojis/dice"
        name="Hobbies"
        class="home-item"
      />
      <page-link
        route="/contact"
        icon="emojis/call"
        name="Contact"
        class="home-item"
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
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.home-item {
  width: 25%;

  @media (max-width: 600px) {
    width: 40%;
  }
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
