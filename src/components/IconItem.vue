<template>
  <span class="icon">{{ icon }}</span
  ><span class="name">{{ name }}</span>
</template>

<script>
export default {
  name: "IconItem",
  props: {
    icon: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.margined {
  margin: 10px;
}
.icon {
  margin-right: 3px;
}

.name {
  text-decoration: none;
  position: relative;
}
</style>
