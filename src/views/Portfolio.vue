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
        path="/portfolio/caroline-optique"
      />
      <thumbnail-item
        icon="ocee"
        title="Ocee"
        image="ocee.png"
        path="/portfolio/ocee"
      />
      <thumbnail-item
        icon="neo"
        title="NeoApp"
        image="neo.png"
        path="/portfolio/neo"
      />
      <thumbnail-item
        icon="baggou"
        title="Baggou"
        image="baggou.png"
        path="/portfolio/baggou"
      />
      <thumbnail-item
        icon="habidom"
        title="Habidom"
        image="habidom.png"
        path="/portfolio/habidom"
      />
      <thumbnail-item
        icon="bonap"
        title="Bonap"
        image="bonap.png"
        path="/portfolio/bonap"
      />
      <thumbnail-item
        icon="smartfresh"
        title="Smartfresh"
        image="smartfresh.png"
        path="/portfolio/smartfresh"
      />
      <thumbnail-item
        icon="dunfast"
        title="Dunfast"
        image="dunfast.png"
        path="/portfolio/dunfast"
      />
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
