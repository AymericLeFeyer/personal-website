<template>
  <div class="footer">
    <p>Homemade with</p>
    <custom-icon icon="emojis/aymeric-heart" size="30" />
  </div>
</template>

<script>
import CustomIcon from "./Icon.vue";
export default {
  components: {
    CustomIcon,
  },
};
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  font-weight: bold;
  font-size: medium;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
</style>
