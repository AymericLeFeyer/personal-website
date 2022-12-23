<template>
  <project
    title="Concept Beauté"
    :showOrganization="true"
    icon="projects/concept-beaute"
    :showCollaborators="false"
  >
    <template #result>
      <img
        src="@/assets/portfolio/concept-beaute.png"
        class="portfolio-image"
        alt="screenshot of the website caroline-optique.fr"
      />
    </template>
    <template #overview>
      <ul>
        <li>
          Concept Beauté is a beauty salon which provides a wide range of
          training courses for beauty professionals.
        </li>
        <li>
          The salon gives the opportunity to its customers to learn new skills
          online and in person.
        </li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          In the mobile app, the user can follow the courses with videos and
          chat with the teacher. Students can download PDF and view their
          progress.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>I was in charge of the development of the mobile application.</li>
        <li>
          I had a driving role on the aspects of deployments and infrastructure.
        </li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>November 2022</li>
      </ul>
    </template>
    <template #organization>
      <ul>
        <li>Formation Concept Beauté</li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/flutter" size="25" tooltip="Flutter" />
      <custom-icon icon="tools/firebase" size="25" tooltip="Firebase" />
      <custom-icon icon="tools/firestore" size="25" tooltip="Firestore" />
    </template>
    <template #links>
      <ul>
        <li>App Store (WIP)</li>
        <li>Play Store (WIP)</li>
        <li>
          <a
            href="https://www.formation-concept-beaute.com/"
            class="link"
            target="_blank"
            >formation-concept-beaute.com</a
          >
        </li>
      </ul>
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

  @media screen and (max-width: 400px) {
    margin-top: 50px;
  }
}
</style>
