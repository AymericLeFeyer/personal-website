<template>
  <custom-content :title="title" :icon="icon">
    <!-- <div class="result">
      <slot name="result"></slot>
    </div> -->
    <div class="project">
      <div class="main-infos">
        <div class="title">
          <custom-icon icon="emojis/gem" size="30" />
          <h3>Overview</h3>
        </div>
        <div class="infos">
          <slot name="overview"></slot>
        </div>
        <div class="title">
          <custom-icon icon="emojis/party" size="30" />
          <h3>Outcome</h3>
        </div>
        <div class="infos">
          <slot name="outcome"></slot>
        </div>
        <div class="title">
          <custom-icon icon="emojis/hey" size="30" />
          <h3>My Role</h3>
        </div>
        <div class="infos">
          <slot name="role"></slot>
        </div>
      </div>
      <div class="side-infos">
        <div class="title">
          <custom-icon icon="emojis/time" size="30" />
          <h3>Date</h3>
        </div>
        <div class="infos">
          <slot name="date"></slot>
        </div>
        <div class="title" v-if="showOrganization">
          <custom-icon icon="emojis/star" size="30" />
          <h3>Organization</h3>
        </div>
        <div class="infos" v-if="showOrganization">
          <slot name="organization"></slot>
        </div>

        <div class="title" v-if="showCollaborators">
          <custom-icon icon="emojis/pray" size="30" />
          <h3>Collaborators</h3>
        </div>
        <div class="infos" v-if="showCollaborators">
          <slot name="collaborators"></slot>
        </div>
        <div class="title">
          <custom-icon icon="emojis/gear" size="30" />
          <h3>Tools</h3>
        </div>
        <div class="infos">
          <div class="tools">
            <slot name="tools"></slot>
          </div>
        </div>
        <div class="title">
          <custom-icon icon="emojis/link" size="30" />
          <h3>Links</h3>
        </div>
        <div class="infos">
          <slot name="links"></slot>
        </div>
      </div>
    </div>
  </custom-content>
</template>

<script>
import CustomContent from "@/components/Content.vue";
import CustomIcon from "@/components/Icon.vue";
export default {
  components: {
    CustomContent,
    CustomIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    showCollaborators: {
      type: Boolean,
      default: true,
    },
    showOrganization: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

h3 {
  font-size: 1.3em;
}
.result {
  width: 100px;
}

.project {
  display: flex;
  margin-bottom: 40px;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .main-infos,
  .side-infos {
    display: flex;
    flex-direction: column;

    .title {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .infos {
      margin-left: 20px;
      margin-bottom: 20px;
    }

    .tools {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  .main-infos {
    flex: 2;
  }

  .side-infos {
    flex: 1;
  }
}
</style>
