<template>
  <div v-if="route">
    <router-link :to="route" class="pagelink">
      <span class="icon">{{ icon }}</span
      ><span class="name">{{ name }}</span>
    </router-link>
  </div>
  <div v-else>
    <a :href="href" class="pagelink" target="_blank">
      <span class="icon">{{ icon }}</span
      ><span class="name">{{ name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "PageLink",
  props: {
    route: String,
    name: String,
    icon: String,
    href: String,
  },
};
</script>

<style scoped lang="scss">
.pagelink {
  transition: 0.2s ease all;
  padding: 3px;
  border-radius: 6px;
  width: 100px;
  margin: 10px;
  .icon {
    margin-right: 3px;
  }

  .name {
    text-decoration: none;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      bottom: -1px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 90%;
      background: #00000029;
    }
  }

  &:hover {
    background-color: #00000029;
  }
}
</style>
