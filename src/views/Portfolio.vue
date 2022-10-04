<template>
  <custom-content title="Portfolio" icon="rocket">
    <div class="head-infos">
      <div class="message">
        <h3>Check out my works</h3>
        <p>Take a look on some projects I have been involved in.</p>
        <p>
          Only personal projects are displayed. Some professional projects are
          also available in this section, when the client has given his consent.
        </p>
      </div>
      <img
        src="@/assets/illustrations/precious.png"
        alt="boy kissing his fingers to show his precious"
        class="illustration-precious"
      />
    </div>
    <div class="projects">
      <thumbnail-item
        icon="caroline-optique"
        title="Caroline Optique"
        image="caroline-optique.png"
      />
      <thumbnail-item icon="ocee" title="Ocee" image="ocee.png" />
      <thumbnail-item icon="neo" title="NeoApp" image="neo.png" />
      <thumbnail-item icon="baggou" title="Baggou" image="baggou.png" />
      <thumbnail-item icon="habidom" title="Habidom" image="habidom.png" />
      <thumbnail-item icon="bonap" title="Bonap" image="bonap.png" />
      <thumbnail-item icon="banana" title="Smartfresh" image="smartfresh.png" />
      <thumbnail-item icon="dunfast" title="Dunfast" image="dunfast.png" />
    </div>
  </custom-content>
</template>

<script>
import CustomContent from "../components/Content.vue";
import ThumbnailItem from "../components/ThumbnailItem.vue";
export default {
  components: {
    CustomContent,
    ThumbnailItem,
  },
};
</script>

<style lang="scss" scoped>
.head-infos {
  display: flex;
  margin-bottom: 40px;

  .illustration-precious {
    object-fit: cover;
    max-width: 30%;
  }

  .message {
    margin-left: 20px;
    justify-content: center;
    flex-grow: 1;
  }
}

.projects {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
}
</style>
