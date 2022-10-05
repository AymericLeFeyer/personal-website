<template>
  <project
    title="Smartfresh"
    :showOrganization="true"
    icon="projects/smartfresh"
    :showCollaborators="false"
  >
    <template #overview>
      <ul>
        <li>
          Dunfresh is a bonded warehouse that manages the flow of fruit
          containers from exotic countries, mainly bananas.
        </li>
        <li>
          To stop print containers informations on paper, the company asked me to develop a web application that allows employees to see in real time the containers informations.
        </li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          Due to a lack of resources on the part of the company, the project has not been put into production.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>
          I was in charge of the development of the web application.
        </li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>January 2020 - April 2020</li>
      </ul>
    </template>
    <template #organization>
      <ul>
        <li>Dunfresh, Conhexa</li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/python" size="25" tooltip="Python" />
      <custom-icon icon="tools/django" size="25" tooltip="Django" />
    </template>
    <template #links>
      <a
        href="https://www.conhexa.com/fr/sites/dunfresh"
        class="link"
        target="_blank"
        >conhexa.com</a
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
