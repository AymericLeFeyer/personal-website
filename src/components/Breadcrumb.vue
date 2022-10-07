<template>
  <div class="breadcrumb">
    <div
      v-for="(item, index) in breadcrumbs"
      :key="index"
      class="breadcrumb__item"
    >
      <page-link
        :icon="item.icon"
        :name="name(item.text)"
        :route="item.to"
        :disabled="item.to == null"
      />
      <div v-if="index < breadcrumbs.length - 1" class="separator">/</div>
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
  methods: {
    name(text) {
      var x = window.matchMedia("(max-width: 700px)");
      return x.matches ? "" : text;
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.breadcrumb__item {
  display: flex;
  align-items: center;
}

.separator {
  margin-top: 3px;
}

@media (max-width: 600px) {
  .breadcrumb__item {
    .pagelink {
      div {
        a {
          color: blue;
        }
      }
    }
  }
}
</style>
