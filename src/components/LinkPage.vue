<template>
  <router-link :to="route">
    <span id="linkpage__icon">{{ icon }}</span
    ><span id="linkpage__name">{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: "LinkPage",
  props: {
    route: String,
    name: String,
    icon: String,
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}

#linkpage__icon {
  margin-right: 5px;
  margin-top: 2px;
}

#linkpage__name {
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
