<template>
  <div class="callout">
    <custom-icon :icon="icon" size="20" />
    <a :href="url" class="link" target="_blank">{{ text }}</a>
  </div>
</template>

<script>
import CustomIcon from "../components/Icon.vue";
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    url: String,
  },
  components: {
    CustomIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.callout {
  background-color: var(--background-color);
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
}
</style>
