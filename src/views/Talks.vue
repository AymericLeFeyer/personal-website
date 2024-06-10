<template>
  <custom-content title="Talks" icon="emojis/mic">
    <div class="head-infos">
      <div class="message">
        <h2>Sharing is one of my values</h2>
        <p>
          It's the story of a shy guy who likes to speak in front of an audience
          to present things ...
        </p>
      </div>
      <img
        src="@/assets/illustrations/shy.png"
        alt="boy with hands over his eyes with a gap between two fingers to make him look"
        class="illustration-shy"
      />
    </div>
    <div class="divider"></div>
    <h3>📱 Flutter</h3>
    <i>October 2023</i>
    <p>
      With
      <a
        class="link"
        href="https://www.linkedin.com/in/alexandra-dereze/"
        target="_blank"
        >Alexandra</a
      >, we decided to present
      <a class="link" href="https://flutter.dev/" target="_blank">Flutter</a>,
      this fabulous framework that allows you to create applications for mobile,
      web, and desktop from a single codebase. The talk was at
      <a class="link" href="https://pit.fr/" target="_blank">Pit</a>, and was
      opened to everyone.
    </p>
    <img
      src="@/assets/photos/talks/flutter.png"
      alt="Flutter talk, Aymeric at the right and Alexandra at the left"
      class="talk__picture"
    />

    <h3>📝 Notion</h3>
    <i>March 2023</i>
    <p>
      I've been using Notion for a while, and a lot of people at
      <a class="link" href="https://pit.fr/" target="_blank">Pit</a> have been
      asking me for a full walkthrough. That's why I decided to make a talk
      about it. I was also contacted by
      <a
        class="link"
        href="https://fr.ippon.tech/offices/agence-lille"
        target="_blank"
        >Ippon Technologies</a
      >
      to give the same conference within their agency.
    </p>
    <div>
      <img
        src="@/assets/photos/talks/notion.jpg"
        alt="Notion talk, Aymeric presenting Notion"
        class="talk__picture"
      />
      <img
        src="@/assets/photos/talks/notion-ippon.png"
        alt="Notion talk, Aymeric presenting Notion"
        class="talk__picture"
      />
    </div>

    <h3>🧑‍💻 Github Copilot</h3>
    <i>June 2022</i>
    <p>
      This conference is feedback from the use of
      <a class="link" href="https://github.com/features/copilot" target="_blank"
        >Github Copilot</a
      >, an AI allowing to offer code to the developer. I presented it at
      <a class="link" href="https://pit.fr/" target="_blank">Pit</a>.
    </p>
    <img
      src="@/assets/photos/talks/github-copilot.png"
      alt="Github Copilot talk, Aymeric presenting Github Copilot"
      class="talk__picture"
    />

    <h3>💬 Message Queuing</h3>
    <i>February 2022</i>
    <p>
      This talk was my first, I presented my new discovery of the moment,
      message queuing via RabbitMQ
    </p>
  </custom-content>
</template>

<script>
import CustomContent from "../components/Content.vue";
export default {
  components: {
    CustomContent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.head-infos {
  display: flex;
  margin-bottom: 40px;

  .illustration-shy {
    object-fit: cover;
    max-width: 30%;
  }

  .message {
    margin-left: 20px;
    justify-content: center;
    flex-grow: 1;
  }
}

h3 {
  margin-bottom: 0;
}

p {
  margin-top: 12px;
}

.talk__picture {
  width: 100%;
  margin-top: 20px;
}

@media (max-width: $breakpoint-medium) {
  .head-infos {
    flex-direction: column;
    .illustration-shy {
      object-fit: cover;
      max-width: 60%;
      margin-left: 50px;
    }
  }
}
</style>
