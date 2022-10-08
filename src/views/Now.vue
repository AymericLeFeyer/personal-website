<template>
  <custom-content title="Now" icon="emojis/hand">
    <div class="intro">
      <img
        src="@/assets/photos/selfie.jpg"
        alt="Photo of myself"
        class="photo"
      />
      <div>
        <p>
          Here would be ideal to write something inspiring, which reflects my
          mindset and represents my personality.
        </p>
        <p>
          But I have no idea what to write here. I still have a lot to learn,
          the journey has only just begun.
        </p>
        <p>
          Every day is a new adventure where I meet new people with whom I do
          part of this ride.
        </p>
        <p>
          However I am sure of one thing, life is short and you have to live
          every moment as the last.
        </p>
        <br />
        <p class="author">Aymeric Le Feyer</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/rocket" size="30" />
      <h2>2022 - What's up this year ?</h2>
    </div>
    <ul>
      <li>
        <a class="link" href="https://www.pit.fr" target="_blank">Pit</a> gave
        me the opportunity to present my first
        <a
          href="https://fellow.app/blog/meetings/brown-bag-meeting-what-it-is-and-how-it-benefits-your-team/"
          target="_blank"
          class="link"
          >BBL</a
        >, on the
        <a
          href="https://www.cloudamqp.com/blog/what-is-message-queuing.html"
          class="link"
          target="_blank"
          >Message Queuing</a
        >. It was exciting but so stressful because I wasn't used to speak in
        front of an audience.
      </li>
      <li>
        I discovered
        <a href="https://threejs.org/" target="_blank" class="link">Three.JS</a
        >, a 3D modelisation javascript library. I started to follow the
        <a href="https://threejs-journey.com/" target="_blank" class="link"
          >three.js journey</a
        >, an online course given by
        <a href="https://bruno-simon.com/" class="link" target="_blank"
          >Bruno Simon</a
        >.
      </li>
      <li>
        Because I liked the first
        <a
          href="https://fellow.app/blog/meetings/brown-bag-meeting-what-it-is-and-how-it-benefits-your-team/"
          target="_blank"
          class="link"
          >BBL</a
        >, I gave another one on
        <a
          href="https://github.com/features/copilot"
          target="_blank"
          class="link"
          >Github Copilot</a
        >, again with
        <a class="link" href="https://www.pit.fr" target="_blank">Pit</a>. I
        think this time it was better, but I still have a lot to learn to give a
        good talk.
      </li>
      <li>
        I attended to the
        <a href="https://devfest.gdglille.org/" target="_blank" class="link"
          >Devfest LILLE</a
        >
        with <a class="link" href="https://www.pit.fr" target="_blank">Pit</a>.
        We had the opportunity to watch a lot of talks about the latest
        technologies, and to meet a lot of people from the community.
      </li>
      <li>
        I obtained my master's degree in computer science at
        <a href="https://www.univ-lille.fr/" target="_blank" class="link"
          >Université de Lille</a
        >. I'm so happy to have finished this long journey, and I'm proud of
        myself.
      </li>
      <li>
        I created my first
        <a href="http://blog.aymeric.lefeyer.fr/" target="_blank" class="link"
          >blog</a
        >
        to share my knowledge and my discoveries about web and mobile
        technologies. I made it with
        <a href="https://notion.so" class="link" target="_blank">Notion</a> to
        have a nice design and to facilitate the writing and the maintenance.
      </li>
      <li>
        I started a permanent contract at
        <a class="link" href="https://www.pit.fr" target="_blank">Pit</a> as a
        fullstack developer. I'm so happy to be part of this company, and I'm
        looking forward to working with them as long as possible.
      </li>
    </ul>

    <p class="caption">Last updated on October 2022</p>

    <div class="divider"></div>
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/down" size="30" />
      <h2>Previous years</h2>
    </div>
    <h3>2021</h3>
    <ul>
      <li>
        I started my journey as a
        <a
          href="https://www.societe.com/societe/monsieur-aymeric-le-feyer-901600254.html"
          >freelancer</a
        >
        to work on cool projects and to improve my skills beyond my daily
        business. I worked on mobile projects during my free time.
      </li>
      <li>
        I get my first certification in computer sciences :
        <a
          href="https://learn.microsoft.com/fr-fr/certifications/exams/az-900"
          target="_blank"
          class="link"
          >Azure Fundamentals AZ-900</a
        >.
      </li>
    </ul>
  </custom-content>
</template>

<script>
import CustomContent from "../components/Content.vue";
import CustomIcon from "../components/Icon.vue";
export default {
  components: {
    CustomContent,
    CustomIcon,
  },
  computed: {
    icon() {
      return this.$route.meta.breadcrumb[1].icon;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.intro {
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex: 1 1 0;
  p {
    margin-left: 20px;
  }
}

li {
  margin-bottom: 20px;
  margin-left: 20px;
}

.caption {
  font-style: italic;
  color: var(--link-color);
  margin-bottom: 10px;
}

.author {
  text-align: end;
  font-weight: bold;
}

.photo {
  object-fit: cover;
  max-width: 40%;
}

@media (max-width: 600px) {
  .intro {
    display: block;

    p {
      margin-left: 0px;
    }
  }

  .photo {
    max-width: 100%;
    margin-bottom: 20px;
  }
}

@media (max-width: 915px) {
  li {
    margin-left: 25px;
  }
}
</style>
