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
  <section class="Parcours">
    <h1>Découvrir les parcours</h1>
    <slot />
    <article>
      <template v-for="(parcour, index) in parcours" :key="index" >
        <ParcourCard :parcour="parcour" />
      </template>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.Parcours {
  --header-1-color: #3d3d3d;
  --paragraph-color: #626262;
  text-align: center;
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
