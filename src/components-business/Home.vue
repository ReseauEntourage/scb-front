<script lang="ts">
import { PropType } from 'vue';

import { Parcour } from '@/api';

import ParcourCard from '@/components-less/ParcourCard.vue';

export default {
  components: {
    ParcourCard,
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

    <section>
      <h1>Découvrir les parcours</h1>
      <article>
        <template v-for="(parcour, index) in parcours" :key="index" >
          <ParcourCard :parcour="parcour" />
        </template>
      </article>
    </section>
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
  text-align: center;
}
h1 {
  font-size: 44px;
  font-weight: 500;
  color: #3D3D3D;
}

h2 {
  font-size: 32px;
  font-weight: 500;
  color: #626B7F;
}

p {
  font-size: 16px;
  font-weight: 300;
}

article {
  p {
    font-size: 30px;
    font-weight: 500;
    line-height: 170%;
    color: #FEFEFE;
  }
}
</style>
