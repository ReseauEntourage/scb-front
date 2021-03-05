<script lang="ts">
import Parcours from '@/components-business/Parcours.vue';
import Shell from '@/components-layout/Shell.vue';

import { useParcours } from './composables/useParcours';

export default {
  components: {
    Parcours,
    Shell,
  },
  setup() {
    const { parcours } = useParcours();

    return { parcours };
  },
};
</script>

<template>
  <Shell>
    <Parcours v-if="parcours" :parcours="parcours">
      <h2>À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.</h2>
    </Parcours>
    <template v-if="!parcours">Loading ...</template>
  </Shell>
</template>
