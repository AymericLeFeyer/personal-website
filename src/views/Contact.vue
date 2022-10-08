<template>
  <custom-content title="Contact" icon="emojis/call">
    <div class="head-infos">
      <img
        src="@/assets/illustrations/call.png"
        alt="boy calling with his hands"
        class="illustration-call"
      />
      <div class="actions">
        <div class="title">
          <h2>Keep in touch</h2>
          <custom-icon :square="true" icon="emojis/down" size="25" />
        </div>
        <div class="networks">
          <callout
            icon="emojis/postbox"
            text="lefeyer.aymeric@gmail.com"
            url="mailto:lefeyer.aymeric@gmail.com"
          />
          <callout
            icon="emojis/pin"
            text="Lille, France"
            url="https://goo.gl/maps/s5ZMQzKJ9dLEhTdy5"
          />
          <callout
            icon="networks/linkedin"
            text="LinkedIn"
            url="https://www.linkedin.com/in/aymericlefeyer/"
          />
          <callout
            icon="networks/github"
            text="Github"
            url="https://github.com/AymericLeFeyer"
          />
          <callout
            icon="networks/stack"
            text="StackOverflow"
            url="https://stackoverflow.com/users/12142139/aymeric-le-feyer"
          />
          <callout
            icon="networks/malt"
            text="Malt"
            url="https://www.google.com"
          />
        </div>
      </div>
    </div>
  </custom-content>
</template>

<script>
import CustomContent from "../components/Content.vue";
import Callout from "../components/Callout.vue";
import CustomIcon from "../components/Icon.vue";
export default {
  components: {
    CustomContent,
    Callout,
    CustomIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.head-infos {
  display: flex;
  margin-bottom: 40px;

  .illustration-call {
    object-fit: cover;
    max-width: 25%;
  }

  .actions {
    margin-left: 60px;
    justify-content: center;
    text-align: center;
    flex-grow: 1;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    .networks {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}

@media (max-width: $breakpoint-medium) {
  .head-infos {
    flex-direction: column;
    align-items: center;

    .illustration-call {
      max-width: 60%;
      margin-left: -60px;
    }

    .actions {
      margin-top: 20px;
      margin-left: 0px;
    }
  }

  .callout {
    width: 100%;
  }
}
</style>
