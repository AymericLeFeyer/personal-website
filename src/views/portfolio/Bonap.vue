<template>
  <project
    title="Bonap"
    :showOrganization="false"
    icon="projects/bonap"
    :showCollaborators="true"
  >
    <template #result>
      <img
        src="@/assets/portfolio/bonap.png"
        class="portfolio-image"
        alt="screenshot of the mobile application bonap on the play store"
      />
    </template>
    <template #overview>
      <ul>
        <li>
          Bonap is a graduation project. The goal of this project was to develop
          an idea from scratch. No technology was imposed and imagination was at
          the heart of this project.
        </li>
        <li>
          We decided to develop a mobile app for meal and menu management, with
          a smart shopping list per week.
        </li>
        <li>Bonap is a contraction of "Bon Appétit"</li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          Users could manage their menus ans meals easily, and choose what to
          eat each day.
        </li>
        <li>
          This project received a score of 18/20 and was one of the best of the
          promotion.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>I learned Flutter and I developed half of the application.</li>
        <li>I managed Google Play Store deployments.</li>
        <li>
          I made the logo and I participated in the design of the graphic
          charter.
        </li>
        <li>
          I was in charge of Firebase connections to manage the authentication
          and informations storage.
        </li>
        <li>I made the landing page of the project.</li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>September 2019 - May 2020</li>
      </ul>
    </template>
    <template #collaborators>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/quentincarry/"
            target="_blank"
            class="link"
            >Quentin Carry</a
          >
        </li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/flutter" size="25" tooltip="Flutter" />
      <custom-icon icon="tools/firebase" size="25" tooltip="Firebase" />
      <custom-icon icon="tools/react" size="25" tooltip="React" />
    </template>
    <template #links>
      <ul>
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.stelapix.bonap&hl=fr"
            class="link"
            target="_blank"
            >Play Store</a
          >
        </li>
        <li>
          <a
            href="https://stelapix.github.io/BonapWeb/"
            class="link"
            target="_blank"
            >Landing Page</a
          >
        </li>
        <li>
          <a
            href="https://www.instagram.com/itsbonap/?hl=fr"
            class="link"
            target="_blank"
            >Instagram</a
          >
        </li>
      </ul>
    </template>
    <template #end-image>
      <img
        src="@/assets/illustrations/bonap.png"
        class="portfolio-image"
        alt="illustration of two boys eating a lot of food on a table, with a Bonap flag behind them"
      />
    </template>
  </project>
</template>

<script>
import Project from "@/components/Project.vue";
import CustomIcon from "@/components/Icon.vue";
export default {
  components: {
    Project,
    CustomIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.portfolio-image {
  width: 100%;
}
</style>
