<template>
  <custom-content title="Caroline Optique" icon="projects/caroline-optique">
    <div class="project">
      <p class="type">Landing Page</p>
      <p class="date">January 2022</p>
      <div class="tools">
        <custom-icon icon="tools/html" size="20" />
        <custom-icon icon="tools/css" size="20" />
        <custom-icon icon="tools/javascript" size="20" />
      </div>
    </div>
  </custom-content>
</template>

<script>
import CustomContent from "@/components/Content.vue";
export default {
  components: {
    CustomContent,
  },
};
</script>

<style lang="scss" scoped></style>
