<template>
  <custom-content title="Hobbies" icon="emojis/heart">
    <img
      src="@/assets/illustrations/love.png"
      class="hobbies__illustration"
      alt="illustration of a boy making a heart with his hands"
    />
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/video-game" size="30" />
      <h2>Video Games</h2>
    </div>
    <p>
      I started playing video games when I was child (sorry for my mom) and I
      still never stopped. I spent many hours playing on PC via
      <a
        href="https://steamcommunity.com/id/aypics/"
        target="_blank"
        class="link"
        >Steam</a
      >, where I have <span class="vocabulary">platinum*</span> my first games.
      I love indies games. Favorite game in this platform are :
    </p>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/coffee" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/Cuphead"
        target="_blank"
        class="link"
        >Cuphead</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/cry" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/The_Binding_of_Isaac"
        target="_blank"
        class="link"
        >The Binding of Isaac</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/sunflower" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/Stardew_Valley"
        target="_blank"
        class="link"
        >Stardew Valley</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/egg" size="20" />
      <p>
        <a
          href="https://fr.wikipedia.org/wiki/Dofus"
          target="_blank"
          class="link"
          >Dofus</a
        >
        (which isn't on Steam, but I spent too much hours to not mention it)
      </p>
    </div>
    <br />
    <p>
      I played a lot on Nintendo game importants, starting by the
      <span class="important">Game Boy Advance SP</span>, the
      <span class="important">Nintendo DS</span> collection (from DS to 3DS XL),
      the amazing <span class="important">Wii</span> and more recently the
      unavoidable <span class="important">Nintendo Switch</span>. Nintendo games
      are a big part of my gamer's life, my favorite licences are :
    </p>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/bolt" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/Pokemon"
        target="_blank"
        class="link"
        >Pokemon</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/planet" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/Super_Mario_Galaxy"
        target="_blank"
        class="link"
        >Mario Galaxy</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/tree" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/Animal_Crossing"
        target="_blank"
        class="link"
        >Animal Crossing</a
      >
    </div>
    <br />
    <p>
      My father was involved in my video games education. The first video game I
      saw was Ratchet & Clank on PS2, when I was 3 years old. He loved
      Playstation game importants, so we had all the importants from
      <span class="important">PS1</span> to
      <span class="important">PS4</span> passing by
      <span class="important">PSP</span> and
      <span class="important">PS Vita</span>. Today I have my own home, with a
      gorgeous and powerfull <span class="important">PS5</span>. You can check
      my
      <a href="https://psnprofiles.com/Aypics" class="link" target="_blank"
        >PSN Profile</a
      >. If I need to choose few games, I would pick :
    </p>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/wrench" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/Ratchet_and_Clank"
        target="_blank"
        class="link"
        >Ratchet & Clank</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/axe" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/God_of_War_(jeu_vid%C3%A9o,_2018)"
        target="_blank"
        class="link"
        >God of War</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/spider" size="20" />
      <a
        href="https://fr.wikipedia.org/wiki/Marvel%27s_Spider-Man"
        target="_blank"
        class="link"
        >Marvel's Spiderman</a
      >
    </div>
    <br />
    <p>Platinum : Get all available achievements for a game, get the 100%.</p>
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/dice" size="30" />
      <h2>Board Games</h2>
    </div>
    <p>
      When I don't play video games, I play board games (with real persons this
      time !). I discovered the world of the board game in 2019 with
      <a
        href="https://boardgamegeek.com/boardgame/65244/forbidden-island"
        class="link"
        target="_blank"
        >The forbidden island</a
      >. Since then I have my own games. You can easily find my
      <a
        href="https://aymeric-le-feyer.notion.site/a1f5f1984ea843868bfa6aa6209ac228?v=25b6b60af9be4b1aadee35bce7856f8b"
        class="link"
        target="_blank"
        >collection and wishlist</a
      >. My top games are :
    </p>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/swords" size="20" />
      <a
        href="https://boardgamegeek.com/boardgame/68448/7-wonders"
        target="_blank"
        class="link"
        >7 Wonders Duel</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/gem" size="20" />
      <a
        href="https://boardgamegeek.com/boardgame/293296/splendor-marvel"
        target="_blank"
        class="link"
        >Splendor Marvel</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/rocket" size="20" />
      <a
        href="https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine"
        target="_blank"
        class="link"
        >The Crew</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/spy" size="20" />
      <a
        href="https://boardgamegeek.com/boardgame/178900/codenames"
        target="_blank"
        class="link"
        >Code Names</a
      >
    </div>
    <div class="game-item">
      <custom-icon :square="true" icon="emojis/fireworks" size="20" />
      <a
        href="https://boardgamegeek.com/boardgame/98778/hanabi"
        target="_blank"
        class="link"
        >Hanabi</a
      >
    </div>
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/house" size="30" />
      <h2>Home Automation</h2>
    </div>
    <p>
      I love to automate my home. I have a lot of smart devices, and I'm always
      on the lookout for new ones. I have my personal
      <a href="https://www.jeedom.com/fr/" class="link" target="_blank"
        >Jeedom</a
      >
      box on a raspberry pi, this makes it possible to connect all my connected
      devices, regardless of the protocol used.
    </p>
    <p>
      I have set up practical scenarios to help me save energy, and to make my
      life easier (when everything works).
    </p>
    <img
      src="@/assets/hobbies/jeedom.png"
      alt="Jeedom dashboard"
      class="content__image"
    />
    <p>This the the dashboard used to control my whole home.</p>
    <div class="section-title">
      <custom-icon :square="true" icon="emojis/headphone" size="30" />
      <h2>Music</h2>
    </div>
    <p>
      I love listening music, some french rap or international pop and rock. I
      like to discover new musical vibes. Here is my
      <a
        href="https://open.spotify.com/user/v3qrnw7xq5o64dgcc9ahofx33?si=jaIaUcUWTAiyZqPdONkgWA&nd=1"
        class="link"
        target="_blank"
        >Spotify</a
      >
      profile.
    </p>

    <div class="section-title">
      <custom-icon :square="true" icon="emojis/cinema" size="30" />
      <h2>Cinema</h2>
    </div>
    <p>
      I love to watch movies, especially movies with high expectation. I like to
      watch them with friends because after the session we can talk some hours
      of what we just seen. It opens debates and it's so fun.
    </p>
    <p>
      My favorite movie series is
      <a
        href="https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe"
        class="link"
        target="_blank"
        >Marvel</a
      >'s one because they managed to make more than twenty movies (ans now
      series) in the same universe with always twists and links with the past.
    </p>
    <p>
      I love
      <a
        href="https://en.wikipedia.org/wiki/Harry_Potter"
        class="link"
        target="_blank"
        >Harry Potter</a
      >
      a lot too. I'm not what is called a real potterhead, but I love the movies
      and the universe.
    </p>
    <br />
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
.hobbies__illustration {
  width: 30%;
  display: flex;
  margin: auto;

  @media (max-width: $breakpoint-medium) {
    width: 80%;
  }
}

.vocabulary {
  font-style: italic;
}

.game-item {
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  top: 2px;
  width: auto;
  margin-top: 5px;

  &:before {
    content: "";
    background-color: #ccc;
    display: inline-block;
    position: relative;
    height: 6px;
    width: 6px;
    border-radius: 6px;
    margin-right: 4px;
    margin-top: 4px;
    top: -1px;
  }
}

.important {
  font-weight: 500;
}

.section-title {
  margin-top: 20px;
}

.content__image {
  width: 100%;
}
</style>
