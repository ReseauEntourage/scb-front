<script lang="ts">
import { PropType } from 'vue';

import { Parcour } from '@/api';

import Parcours from '@/components-business/Parcours.vue';

export default {
  components: {
    Parcours,
  },
  props: {
    parcours: Array as PropType<Parcour[]>,
  },
};
</script>

<template>
  <div class="Home">
    <section>
      <img src="/img/home.png" />
      <article>
        <p>À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.</p>
        <p>Chaque parcours, élaboré par des professionnels et des personnes de la rue, se décline en 3 étapes.</p>
      </article>
    </section>

    <section>
      <h1>Acquérir les bases</h1>
      <ul>
        <li>
          <h2>Et si on comprenait ?</h2>
          <img src="/img/comprendre_landing.png" />
          <p>Première étape : <strong>mieux comprendre le monde de la rue.</strong></p>
        </li>
        <li>
          <h2>Et si on changeait de regard ?</h2>
          <img src="/img/changer_landing.png" />
          <p>Chacun à notre niveau, <strong>nous pouvons agir</strong>, mais cela implique d’adopter <strong>la bonne posture.</strong></p>
        </li>
        <li>
          <h2>Et si on agissait ?</h2>
          <img src="/img/agir_landing.png" />
          <p><strong>Tous acteur de la solidarité</strong>, à son échelle: voici des conseils concrets pour <strong>passer à l’action !</strong></p>
        </li>
      </ul>
    </section>

    <Parcours :parcours="parcours" />
  </div>
</template>

<style lang="scss" scoped>
section {
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;

  &:nth-child(1) {
    padding-bottom: 1em;
    background-color: #626b7f;

    img {
      width: 100%;
    }
  }
  &:nth-child(2) {
    padding-top: 10em;
    background-color: #faf8f2;
    background-image: url(/img/wave-top.svg);
  }
  &:nth-child(3) {
    padding-top: 10em;
    background-image: url(/img/wave-bottom.svg);
  }
}
</style>

<style lang="scss" scoped>
article {
  max-width: 1320px;
  padding: 0 120px;
  margin: 0 auto;
}

ul {
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  li {
    flex: 1 0 320px;
  }
}

li {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  img {
    margin: 0 auto;
  }
}
</style>

<style lang="scss" scoped>
.Home {
  --header-1-color: #3d3d3d;
  --header-2-color: #626b7f;
  text-align: center;

  article p {
    --paragraph-color: #fefefe;
  }
}
</style>
