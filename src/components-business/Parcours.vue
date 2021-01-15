<script lang="ts">
import { PropType } from 'vue';

import { Parcour } from '@/api';

import ParcourCard from '@/components-less/ParcourCard.vue';

export default {
  components: {
    ParcourCard,
  },
  props: {
    parcours: {
      type: Array as PropType<Parcour[]>,
      required: true,
    },
  },
};
</script>

<template>
  <div class="Parcours">
    <h1>Découvrir les parcours</h1>
    <p>À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.</p>
    <article>
      <template v-for="(parcour, index) in parcours" :key="index" >
        <ParcourCard :parcour="parcour" />
      </template>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.Parcours {
  text-align: center;
}
h1 {
  font-size: 44px;
  font-weight: 500;
  color: #3D3D3D;
}

p {
  font-size: 30px;
  font-weight: 500;
  color: #626262;
  line-height: 170%;
}
</style>

<style lang="scss" scoped>
.Parcours {
  max-width: 1320px;
  padding: 0 120px;
  margin: 0 auto 80px;
}
</style>

<style lang="scss" scoped>
article {
  display: grid;
  grid-template-columns: minmax(350px, 1fr);
  grid-auto-flow: row dense;
  gap: 80px 50px;
}

@media screen and (min-width: 850px) {
  article {
    grid-template-columns: repeat(2, minmax(350px, 1fr));
  }
}
</style>
