<template>
  <project
    title="Ocee"
    :showOrganization="false"
    icon="projects/ocee"
    :showCollaborators="true"
  >
    <template #overview>
      <ul>
        <li>
          Ocee is a graduation project. The goal of this project was to develop
          an idea from scratch. No technology was imposed and imagination was at
          the heart of this project.
        </li>
        <li>
          We decided to develop a web application to help companies check the progress of their progress in a second.
        </li>
        <li>Ocee is the acronym of "Où Ça En Est" meaning "Where are we now".</li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          Users could manage their projects easily and check the progress of any steps in a second.
        </li>
        <li>
          This project received a good score and was one of the best of the
          promotion.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>I worked on the front part of the application.</li>
        <li>I developped a small mobile application, in read only for users.</li>
        <li>I designed the mockups.</li>
        <li>
          I was in charge of the video trailer of the project.
        </li>
        <li>I made the landing page of the project, not available anymore.</li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>September 2021 - December 2021</li>
      </ul>
    </template>
    <template #collaborators>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/adrien-holvoet-6a5130172/" target="_blank" class="link">Adrien Holvoet</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexyledain/" target="_blank" class="link">Alexy Ledain</a>
        </li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/react" size="25" tooltip="React" />
      <custom-icon icon="tools/dotnet" size="25" tooltip=".NET Core" />
      <custom-icon icon="tools/figma" size="25" tooltip="Figma" />
      <custom-icon icon="tools/flutter" size="25" tooltip="Flutter" />
      <custom-icon icon="tools/azure" size="25" tooltip="Azure" />

    </template>
    <template #links>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/company/ocee-project/"
            class="link"
            target="_blank"
            >LinkedIn</a
          >
        </li>
        <li>
          <p>Unfortunately <span class="link">ocee.fr</span> is no longer in production today.</p>
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
</style>
