<template>
  <div class="breadcrumb">
    <div v-for="(item, index) in breadcrumbs" :key="index">
      <page-link
        :icon="item.icon"
        :name="item.text"
        :route="item.to"
        :disabled="item.to == null"
      />
    </div>
  </div>
</template>

<script>
import PageLink from "./PageLink.vue";
import IconItem from "./IconItem.vue";
export default {
  name: "Breadcrumb",
  pages: [],
  components: {
    PageLink,
    IconItem,
  },
  computed: {
    breadcrumbs() {
      return this.$route.meta.breadcrumb ?? [];
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
}
</style>
