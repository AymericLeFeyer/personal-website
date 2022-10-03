<template>
  <div class="iconitem">
    <custom-icon class="icon" :icon="icon" /><span class="name">{{
      name
    }}</span>
  </div>
</template>

<script>
import CustomIcon from "./Icon.vue";
export default {
  name: "IconItem",
  props: {
    icon: String,
    name: String,
  },
  components: {
    CustomIcon,
  },
};
</script>

<style lang="scss" scoped>
.margined {
  margin: 10px;
}
.icon {
  margin-right: 3px;
  height: 30px;
}

.name {
  text-decoration: none;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
}

.iconitem {
  display: flex;
}
</style>
