<template>
  <project
    title="Dunfast"
    :showOrganization="true"
    icon="projects/dunfast"
    :showCollaborators="false"
  >
    <template #overview>
      <ul>
        <li>
          Dunfresh is a bonded warehouse that manages the flow of fruit
          containers from exotic countries, mainly bananas.
        </li>
        <li>
          For help the company to manage the preparation of the containers, I
          developed a software application that allows the manager to prepare
          the next week easily.
        </li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          Before Dunfast, the manager had to prepare the containers manually and
          it took 3 hours a week. Now, it took only 20 minutes with all checks.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>
          I was in charge of the development of the software and the deployment
          on manager's machine.
        </li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>September 2019</li>
      </ul>
    </template>
    <template #organization>
      <ul>
        <li>Dunfresh, Conhexa</li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/python" size="25" tooltip="Python" />
    </template>
    <template #links>
      <a
        href="https://www.conhexa.com/fr/sites/dunfresh"
        class="link"
        target="_blank"
        >conhexa.com</a
      >
    </template>
    <template #end-image>
      <img
        src="@/assets/illustrations/dunfresh.png"
        class="portfolio-image"
        alt="illustration of a boy on a pallet truck, right next to the same boy on a computer"
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
