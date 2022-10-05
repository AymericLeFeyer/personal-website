<template>
  <project
    title="Baggou"
    :showOrganization="true"
    icon="projects/baggou"
    :showCollaborators="true"
  >
  <template #result>
    <div class="baggou-images">
      <img src="@/assets/portfolio/baggou.png" class="portfolio-image"/>
      <img src="@/assets/portfolio/baggou-mobile.png" class="portfolio-image mobile"/>
    </div>
  </template>
    <template #overview>
      <ul>
        <li>
          Baggou is a carpooling service connecting drivers with sports fans.
        </li>
        <li>
          I was approached to develop this app from scratch. I am really proud of this application, it's the best one I done today. I learned a lot during this project. 
        </li>
        <li>In french "avoir le bagou" means have the gift of the gab.</li>
      </ul>
    </template>
    <template #outcome>
      <ul>
        <li>
          Users can find a driver to go to a sports event or to a concert.
        </li>
        
        <li>Each driver can propose a trip from a departure to a destination.</li>
        <li>
          It's possible to pay the driver directly in the app.
        </li>
      </ul>
    </template>
    <template #role>
      <ul>
        <li>I developed the entire application, from the landing page to the mobile app.</li>
        <li>I accompanied the client in the creation of the Baggou company. </li>
      </ul>
    </template>
    <template #date>
      <ul>
        <li>January 2021 - August 2021</li>
      </ul>
    </template>
    <template #organization>
      <ul>
        <li>Baggou</li>
      </ul>
    </template>
    <template #collaborators>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/jacques-diumbu-8671aa161/" target="_blank" class="link">Jacques Diumbu</a>
        </li>
      </ul>
    </template>
    <template #tools>
      <custom-icon icon="tools/flutter" size="25" tooltip="Flutter" />
      <custom-icon icon="tools/firebase" size="25" tooltip="Firebase" />
      <custom-icon icon="tools/nodejs" size="25" tooltip="NodeJS / ExpressJS" />
      <custom-icon icon="tools/html" size="25" tooltip="HTML" />
      <custom-icon icon="tools/css" size="25" tooltip="CSS" />
      <custom-icon icon="tools/javascript" size="25" tooltip="JavaScript" />
      <custom-icon icon="tools/python" size="25" tooltip="Python" />
      <custom-icon icon="networks/github" size="25" tooltip="Github Actions" />
      <custom-icon icon="tools/stripe" size="25" tooltip="Stripe" />
      <custom-icon icon="tools/maps" size="25" tooltip="Google Maps API" />
      <custom-icon icon="tools/firestore" size="25" tooltip="Cloud Firestore" />


    </template>
    <template #links>
      <ul>
        <li>
          <a
            href="https://www.baggou.fr/"
            class="link"
            target="_blank"
            >baggou.fr</a
          >
        </li>
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=fr.baggou.baggou"
            class="link"
            target="_blank"
            >Play Store</a
          >
        </li>
        <li>
          <a
            href="https://www.baggou.fr/res/images/ios-install.png"
            class="link"
            target="_blank"
            >App Store</a
          >
        </li>
      </ul>
    </template>
    <template #end-image>
      <img src="@/assets/illustrations/baggou.png" class="illustration-car"/>
    </template>
  </project>
</template>

<script>
import Project from "@/components/Project.vue";
import CustomIcon from "@/components/Icon.vue";
export default {
  components: {
    Project,
    CustomIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.portfolio-image {
  width: 30%;
  object-fit: cover;
}

.mobile {
  width: 70%;
}

.illustration-car {
  width: 100%;
  margin-bottom: 20px;
}

.baggou-images {
  display: flex;
  gap: 10px;
}
</style>
