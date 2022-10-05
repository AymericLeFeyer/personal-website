<template>
  <project
    title="Personal Website"
    :showOrganization="false"
    icon="projects/personal-website"
    :showCollaborators="false"
  >
    <template #overview>
      <ul>
        <li>
          To celebrate the end of my studies, I decided to create a nice website / portfolio in which I could add elements over time.
        </li>
        <li>
          I decided to make it as minimalist as possible, with some inspirations from the <a href="https://notion.so" class="link" target="_blank">Notion</a> artistic direction.
        </li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          I hope that this website will be a good showcase of my skills and my projects.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>
          It's a part of me, so it's a bit difficult to say who was in charge of what.
        </li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>October 2022</li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/vuejs" size="25" tooltip="VueJS" />
      <custom-icon icon="tools/html" size="25" tooltip="HTML" />
      <custom-icon icon="tools/css" size="25" tooltip="CSS" />
      <custom-icon icon="tools/javascript" size="25" tooltip="JavaScript" />
      <custom-icon icon="tools/firebase" size="25" tooltip="Firebase (for hosting)" />
    </template>
    <template #links>
      <a
        href="https://www.aymeric.lefeyer.fr"
        class="link"
        target="_blank"
        >aymeric.lefeyer.fr</a
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
