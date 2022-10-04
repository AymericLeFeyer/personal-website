<template>
  <router-link to="/">
    <div class="thumbnail">
      <div class="image">
        <img :src="imagePath" />
      </div>
      <div class="title">
        <custom-icon :icon="icon" size="20" />
        <p>{{ title }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import CustomIcon from "../components/Icon.vue";
export default {
  components: {
    CustomIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    imagePath() {
      return require(`@/assets/portfolio/${this.image}`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.thumbnail {
  display: flex;
  flex-direction: column;
  width: 240px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.02);
  }
  .image {
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }
  }
  .title {
    display: flex;
    align-items: center;
    border-radius: 0 0 10px 10px;
    gap: 10px;
    margin: 12px;
    margin-top: 8px;
    text-align: start;
    font-size: smaller;
  }
}
</style>
