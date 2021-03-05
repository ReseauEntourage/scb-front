<script lang="ts">
import { useRoute } from 'vue-router';

import Chapitre from '@/components-business/Chapitre.vue';
import Shell from '@/components-layout/Shell.vue';

import { useChapitre } from './composables/useChapitre';

export default {
  components: {
    Chapitre,
    Shell,
  },
  setup() {
    const { params } = useRoute();

    const { chapitre } = useChapitre(params.chapitreSlug as string);

    return { chapitre };
  },
};

</script>

<template>
  <Shell>
    <Chapitre v-if="chapitre" :chapitre="chapitre" />
    <template v-if="!chapitre">Loading ...</template>
  </Shell>
</template>
