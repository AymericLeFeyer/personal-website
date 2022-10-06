<template>
  <custom-content title="Resume" icon="emojis/paper">
    <h4>Fullstack Developer / Front & Mobile Adept</h4>
    <div class="divider"></div>
    <div class="section-title">
      <custom-icon icon="emojis/briefcase" size="30" />
      <h2>Work Experience</h2>
    </div>

    <div class="resume--area">
      <div class="logo">
        <custom-icon icon="resume/pit" size="100" />
      </div>
      <div class="history">
        <h3>
          Fullstack Developer at
          <a
            href="https://www.pit.fr"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >Pit</a
          >
        </h3>
        <p class="date">June 2020 - Present</p>
        <h4>Fulltime Collaborator</h4>
        <ul>
          <li>Worked on a cashing application for a big French sports store</li>
          <div class="tools">
            <custom-icon icon="tools/flutter" size="18" tooltip="Flutter" />
            <custom-icon icon="tools/firebase" size="18" tooltip="Firebase" />
            <custom-icon icon="tools/figma" size="18" tooltip="Figma" />
            <custom-icon icon="tools/bitrise" size="18" tooltip="Bitrise" />
          </div>
        </ul>
        <h4>Internship</h4>
        <ul>
          <li>
            Collaborated on a computer software that helps employees quickly
            transcribe the content of subscription documents
          </li>
          <div class="tools">
            <custom-icon icon="tools/dotnet" size="18" tooltip=".NETCore WPF" />
          </div>
          <li>
            Participated to the development of a web application that allows to
            find the best internet provider and offer for a given address
          </li>
          <div class="tools">
            <custom-icon
              icon="tools/nodejs"
              size="18"
              tooltip="NodeJS / ExpressJS"
            />
            <custom-icon icon="tools/angular" size="18" tooltip="Angular" />
            <custom-icon icon="tools/postgres" size="18" tooltip="PostgreSQL" />
          </div>
          <li>
            Invested in the development of a web application that monitors the
            health of any website or service
          </li>
          <div class="tools">
            <custom-icon
              icon="tools/nodejs"
              size="18"
              tooltip="NodeJS / ExpressJS"
            />
            <custom-icon icon="tools/vuejs" size="18" tooltip="VueJS" />
            <custom-icon icon="tools/mongodb" size="18" tooltip="MongoDB" />
            <custom-icon
              icon="tools/docker"
              size="18"
              tooltip="Docker / Compose"
            />
            <custom-icon icon="tools/rabbitmq" size="18" tooltip="RabbitMQ" />
            <custom-icon
              icon="tools/microservices"
              size="18"
              tooltip="Architecture Microservices"
            />
          </div>
          <li>
            Created a connector between an ATS (Applicant Tracking System) and a
            recruitment platform to spread job offers on multiple platforms
          </li>
          <div class="tools">
            <custom-icon icon="tools/dotnet" size="18" tooltip=".NET Core" />
            <custom-icon icon="tools/docker" size="18" tooltip="Docker" />
          </div>
        </ul>
        <h4>Traineeship</h4>
        <ul>
          <li>
            Collaborated to a mobile application to help elders to keep contact
            with their families during Covid-19
          </li>
          <div class="tools">
            <custom-icon
              icon="tools/android"
              size="16"
              tooltip="Android Java"
            />
            <custom-icon icon="tools/nodejs" size="18" tooltip="ExpressJS" />
            <custom-icon icon="tools/mongodb" size="18" tooltip="MongoDB" />
            <custom-icon icon="tools/vuejs" size="18" tooltip="VueJS" />
          </div>
        </ul>
      </div>
    </div>
    <div class="resume--area">
      <div class="logo">
        <custom-icon icon="resume/conhexa" size="100" />
      </div>
      <div class="history">
        <h3>
          Warehouseman at
          <a
            href="https://www.conhexa.com/fr/sites/dunfresh"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >Dunfresh</a
          >
        </h3>
        <p class="date">June 2019 - August 2019</p>
        <h4>Temp Worker</h4>
        <ul>
          <li>Managed fruits containers in a warehouse with a pallet truck</li>
          <div class="tools">
            <custom-icon icon="emojis/gear" size="18" tooltip="CACES 1,3,5" />
          </div>
        </ul>
      </div>
    </div>
    <div class="resume--area">
      <div class="logo">
        <custom-icon icon="resume/lesieur" size="100" />
      </div>
      <div class="history">
        <h3>
          Warehouseman at
          <a
            href="https://www.lesieur.fr/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >Lesieur</a
          >
        </h3>
        <p class="date">July 2018</p>
        <h4>Temp Worker</h4>
        <ul>
          <li>
            Watched machines at the wastewater treatment plant and water
            analysis
          </li>
        </ul>
      </div>
    </div>

    <div class="divider"></div>
    <div class="section-title">
      <custom-icon icon="emojis/cap" size="30" />
      <h2>Education</h2>
    </div>
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
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.section-title {
  display: flex;
  align-items: center;

  img {
    margin-bottom: 6px;
  }

  gap: 10px;
}
h4 {
  margin-top: 0;
}
.resume--area {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 20px 0;
  .logo {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .history {
    margin-top: 20px;
    h3 {
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0;
    }

    .date {
      color: var(--link-color);
      margin-bottom: 30px;
    }

    ul {
      margin-left: 20px;

      li {
        font-weight: 300;
        font-size: 0.9em;
      }

      .tools {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
    }

    h4 {
      font-weight: 500;
      margin-top: 20px;
      margin-bottom: 0;
    }
  }
}
</style>
