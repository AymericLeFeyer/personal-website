<template>
  <project
    title="NeoApp"
    :showOrganization="true"
    icon="projects/neo"
    :showCollaborators="false"
  >
    <template #overview>
      <ul>
        <li>
          Neo is a service that allows coachs to manage appointments with their
          clients.
        </li>
        <li>Neo is now Candoo.</li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          The mobile app allows users to see their appointments directly on
          their phone.
        </li>
        <li>
          This POC helped the team to understand the difficulties of the
          development of a mobile app.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>
          I was in charge of the integration and development of the mobile app.
        </li>
        <li>I had a role on the aspects of UI and UX design</li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>Angust 2021</li>
      </ul>
    </template>
    <template #organization>
      <ul>
        <li>Neo</li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/flutter" size="25" tooltip="Flutter" />
      <custom-icon icon="tools/figma" size="25" tooltip="Figma" />
    </template>
    <template #links>
      <a href="https://www.candoo.fr/" class="link" target="_blank"
        >candoo.fr</a
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
</style>
