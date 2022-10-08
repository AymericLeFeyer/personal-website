<template class="item">
  <div :class="activeClass">
    <div v-if="!disabled">
      <div v-if="route">
        <router-link :to="route">
          <icon-item :icon="icon" :name="name" size="30" />
        </router-link>
      </div>
      <div v-else>
        <a :href="href" target="_blank">
          <icon-item :icon="icon" :name="name" size="30" />
        </a>
      </div>
    </div>
    <icon-item v-else :icon="icon" :name="name" size="30" />
  </div>
</template>

<script>
import IconItem from "./IconItem.vue";
export default {
  name: "PageLink",
  props: {
    route: String,
    name: String,
    icon: String,
    href: String,
    fixedWidth: Boolean,
    disabled: Boolean,
  },
  components: {
    IconItem,
  },
  computed: {
    activeClass() {
      return (
        "pagelink " +
        (this.fixedWidth ? "fixedWidth " : "") +
        (this.disabled ? "" : "hoverable ")
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.pagelink {
  transition: 0.2s ease all;
  border-radius: 6px;
  margin: 10px;
  padding: 3px;
  display: flex;
}

.hoverable:hover {
  background-color: #00000029;
}

.fixedWidth {
  width: 100px;
}
</style>
