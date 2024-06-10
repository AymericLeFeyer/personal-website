<template>
  <project
    title="Habidom"
    :showOrganization="true"
    icon="projects/habidom"
    :showCollaborators="true"
  >
    <template #result>
      <img
        src="@/assets/portfolio/details/habidom.png"
        class="portfolio-image"
        alt="screenshot of the website habidom.fr"
      />
    </template>
    <template #overview>
      <ul>
        <li>
          Habidom is a company based in the north of the France, specialized in
          alamrming, home automation and video surveillance.
        </li>
        <li>
          For the creation of the organization, Yann and Clément, the two
          founders of Habidom wanted a website to present their company and
          their services.
        </li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          In the website, visitors can see differents services given by Habidom,
          a presentation of the team and some frequently asked questions.
        </li>
        <li>
          A form is available to set the first contact between Habidom and
          customers.
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
        <p>July 2020</p>
      </ul>
    </template>
    <template #organization>
      <ul>
        <p>Habidom</p>
      </ul>
    </template>
    <template #collaborators>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/yann-delbecque-372032162/"
            target="_blank"
            class="link"
            >Yann Delbecque</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/clement-verdois-010a551bb/"
            target="_blank"
            class="link"
            >Clément Verdois</a
          >
        </li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/html" size="25" tooltip="HTML" />
      <custom-icon icon="tools/css" size="25" tooltip="CSS" />
      <custom-icon icon="tools/javascript" size="25" tooltip="JavaScript" />
    </template>
    <template #links>
      <a href="https://www.habidom.fr" class="link" target="_blank"
        >habidom.fr</a
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
}
</style>
