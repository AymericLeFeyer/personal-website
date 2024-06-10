<template>
  <custom-content title="Resume" icon="emojis/paper" class="resume">
    <h2>Fullstack Developer / Front & Mobile Adept</h2>
    <div class="divider no-gutters"></div>
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/muscle" size="30" />
      <h2>Arsenal</h2>
    </div>

    <div class="resume--area arsenal">
      <p class="date">Tools of the trade I am proudly proficient with</p>
      <div class="tools">
        <custom-icon icon="tools/flutter" size="60" tooltip="Flutter" />
        <custom-icon icon="tools/vuejs" size="60" tooltip="VueJS" />
        <custom-icon icon="tools/nodejs" size="60" tooltip="NodeJS" />
        <custom-icon icon="tools/firebase" size="60" tooltip="Firebase" />
        <custom-icon icon="tools/python" size="60" tooltip="Python" />
        <custom-icon icon="tools/react" size="60" tooltip="ReactJS" />
        <custom-icon icon="tools/notion" size="60" tooltip="Notion" />
        <custom-icon icon="tools/figma" size="60" tooltip="Figma" />
      </div>
    </div>
    <div class="divider"></div>
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/briefcase" size="30" />
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
        <p class="date">June 2020 - Present • Lille, France</p>
        <h4>Fulltime Collaborator</h4>
        <ul>
          <li>
            Worked on a cashing application for a big French sports store
            <div class="tools">
              <custom-icon icon="tools/flutter" size="18" tooltip="Flutter" />
              <custom-icon icon="tools/firebase" size="18" tooltip="Firebase" />
              <custom-icon icon="tools/figma" size="18" tooltip="Figma" />
              <custom-icon icon="tools/bitrise" size="18" tooltip="Bitrise" />
            </div>
          </li>
        </ul>
        <h4>Internship</h4>
        <ul>
          <li>
            Collaborated on a computer software that helps employees quickly
            transcribe the content of subscription documents

            <div class="tools">
              <custom-icon
                icon="tools/dotnet"
                size="18"
                tooltip=".NETCore WPF"
              />
            </div>
          </li>
          <li>
            Participated to the development of a web application that allows to
            find the best internet provider and offer for a given address

            <div class="tools">
              <custom-icon
                icon="tools/nodejs"
                size="18"
                tooltip="NodeJS / ExpressJS"
              />
              <custom-icon icon="tools/angular" size="18" tooltip="Angular" />
              <custom-icon
                icon="tools/postgres"
                size="18"
                tooltip="PostgreSQL"
              />
            </div>
          </li>
          <li>
            Invested in the development of a web application that monitors the
            health of any website or service

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
                tooltip="Microservices"
              />
            </div>
          </li>
          <li>
            Created a connector between an ATS (Applicant Tracking System) and a
            recruitment platform to spread job offers on multiple platforms

            <div class="tools">
              <custom-icon icon="tools/dotnet" size="18" tooltip=".NET Core" />
              <custom-icon icon="tools/docker" size="18" tooltip="Docker" />
            </div>
          </li>
        </ul>
        <h4>Traineeship</h4>
        <ul>
          <li>
            Collaborated to a mobile application to help elders to keep contact
            with their families during Covid-19

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
          </li>
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
        <p class="date">June 2019 - August 2019 • Loon-Plage, France</p>
        <h4>Temp Worker</h4>
        <ul>
          <li>
            Managed fruits containers in a warehouse with a pallet truck
            <div class="tools">
              <custom-icon
                :square="true"
                icon="emojis/gear"
                size="18"
                tooltip="CACES 1,3,5"
              />
            </div>
          </li>
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
        <p class="date">July 2018 • Coudekerque-Branche, France</p>
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
      <custom-icon :square="true" icon="emojis/cap" size="30" />
      <h2>Education</h2>
    </div>
    <div class="resume--area">
      <div class="logo">
        <custom-icon icon="resume/univlille" size="100" />
      </div>
      <div class="history">
        <h3>
          Student at
          <a
            href="https://www.univ-lille.fr/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >Université de Lille</a
          >
        </h3>
        <p class="date">September 2020 - August 2022 • Lille, France</p>
        <h4>Master's degree in computer sciences (E-Services)</h4>
        <ul>
          <li>
            Attended computer science courses specializing in web and mobile
            development
          </li>
          <li>Obtained a 16/20 global mark</li>
        </ul>
      </div>
    </div>
    <div class="resume--area">
      <div class="logo">
        <custom-icon icon="resume/uphf" size="100" />
      </div>
      <div class="history">
        <h3>
          Student at
          <a
            href="https://www.uphf.fr/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >UPHF</a
          >
        </h3>
        <p class="date">September 2017 - August 2020 • Valenciennes, France</p>
        <h4>Bachelor's degree in computer sciences</h4>
        <ul>
          <li>Attended computer science courses (no specialization)</li>
          <li>
            Obtained a 18/20 mark for the
            <a href="/portfolio/bonap" class="link" target="_blank"
              >graduation project</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="resume--area">
      <div class="logo">
        <custom-icon :square="true" icon="emojis/school" size="100" />
      </div>
      <div class="history">
        <h3>
          Student at
          <a
            href="https://val-de-lys-estaires.enthdf.fr/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >Lycée Val de Lys</a
          >
        </h3>
        <p class="date">September 2014 - August 2017 • Estaires, France</p>
        <h4>Scientific baccalaureate specialized in mathematics</h4>
        <ul>
          <li>
            Obtained a 20/20 mark in mathematics
            <custom-icon
              :square="true"
              icon="emojis/muscle"
              size="15"
              tooltip="So easy"
            />
          </li>
          <li>Obtained a 18/20 mark in physics and chemistry</li>
        </ul>
      </div>
    </div>

    <div class="divider"></div>
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/page" size="30" />
      <h2>Certifications</h2>
    </div>

    <div class="resume--area">
      <div class="logo">
        <custom-icon icon="tools/azure" size="100" />
      </div>
      <div class="history">
        <h3>
          Azure Fundamentals
          <a
            href="https://www.credly.com/badges/f558c2a6-3a29-44e4-bc1b-83cce1e0e5b7/public_url"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            >AZ-900</a
          >
        </h3>
        <p class="date">August 2021</p>
      </div>
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

h4 {
  margin-top: 0;
}
.resume--area {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 20px 0;

  @media (max-width: $breakpoint-medium) {
    flex-direction: column;
    gap: 0px;
  }
  .logo {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    margin-top: 10px;

    @media (max-width: $breakpoint-medium) {
      margin-top: 30px;
    }
  }
  .history {
    margin-top: 20px;
    h3 {
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0;
      @media (max-width: $breakpoint-medium) {
        font-weight: 900;
      }
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

.divider {
  margin-top: 60px;
}

.no-gutters {
  margin-top: 20px;
}

.date {
  color: var(--link-color);
  margin-bottom: 30px;
}

.arsenal {
  margin-top: 0;
  text-align: center;
  flex-direction: column;
  gap: 20px;
  .date {
    margin-bottom: 20px;
  }

  .tools {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 40px;
  }
}
</style>
