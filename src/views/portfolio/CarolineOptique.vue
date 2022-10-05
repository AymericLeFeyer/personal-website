<template>
  <project
    title="Caroline Optique"
    :showOrganization="true"
    icon="projects/caroline-optique"
    :showCollaborators="false"
  >
  <template #result>
    <img src="@/assets/portfolio/caroline-optique.png" class="portfolio-image"/>
  </template>
    <template #overview>
      <ul>
        <li>
          Caroline Optique is an optical store based in Wormhout, a small town
          in the north of France.
        </li>
        <li>
          The shop was growing up and wanted a redesign of the landing page to
          improve the public image.
        </li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          In the website, it's now possible to see some products sold by
          Caroline Optique, the optical team who is in contact with customers
          and also some advices for those who wear glasses or contact lenses.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>
          I was in charge of the design and the development of the website.
        </li>
        <li>I had a driving role on the aspects of UI and UX design</li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>January 2022</li>
      </ul>
    </template>
    <template #organization>
      <ul>
        <li>Caroline Optique</li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/html" size="25" tooltip="HTML" />
      <custom-icon icon="tools/css" size="25" tooltip="CSS" />
      <custom-icon icon="tools/javascript" size="25" tooltip="JavaScript" />
    </template>
    <template #links>
      <a href="https://www.caroline-optique.fr" class="link" target="_blank"
        >caroline-optique.fr</a
      >
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
