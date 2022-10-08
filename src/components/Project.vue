<template>
  <custom-content :title="title" :icon="icon">
    <div class="result">
      <slot name="result"></slot>
    </div>
    <div class="project">
      <div class="main-infos">
        <div class="title">
          <custom-icon :square="true" icon="emojis/gem" size="30" />
          <h2>Overview</h2>
        </div>
        <div class="infos">
          <slot name="overview"></slot>
        </div>
        <div class="title">
          <custom-icon :square="true" icon="emojis/party" size="30" />
          <h2>Outcome</h2>
        </div>
        <div class="infos">
          <slot name="outcome"></slot>
        </div>
        <div class="title">
          <custom-icon :square="true" icon="emojis/hey" size="30" />
          <h2>My Role</h2>
        </div>
        <div class="infos">
          <slot name="role"></slot>
        </div>
      </div>
      <div class="side-infos">
        <div class="title">
          <custom-icon :square="true" icon="emojis/time" size="30" />
          <h2>Date</h2>
        </div>
        <div class="infos">
          <slot name="date"></slot>
        </div>
        <div class="title" v-if="showOrganization">
          <custom-icon :square="true" icon="emojis/star" size="30" />
          <h2>Organization</h2>
        </div>
        <div class="infos" v-if="showOrganization">
          <slot name="organization"></slot>
        </div>

        <div class="title" v-if="showCollaborators">
          <custom-icon :square="true" icon="emojis/pray" size="30" />
          <h2>Collaborators</h2>
        </div>
        <div class="infos" v-if="showCollaborators">
          <slot name="collaborators"></slot>
        </div>
        <div class="title">
          <custom-icon :square="true" icon="emojis/gear" size="30" />
          <h2>Tools</h2>
        </div>
        <div class="infos">
          <div class="tools">
            <slot name="tools"></slot>
          </div>
        </div>
        <div class="title">
          <custom-icon :square="true" icon="emojis/link" size="30" />
          <h2>Links</h2>
        </div>
        <div class="infos">
          <slot name="links"></slot>
        </div>
      </div>
    </div>
    <div class="result">
      <slot class="end-image" name="end-image"></slot>
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

h2 {
  font-size: 1.3em;
}
.result {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.end-image {
  width: 20px;
}

.project {
  display: flex;
  margin-bottom: 40px;
  gap: 20px;

  @media (max-width: $breakpoint-medium) {
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
