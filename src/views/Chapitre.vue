<script lang="ts">
import { useRoute } from 'vue-router';

import Menu from '@/components-layout/Menu.vue';
import Chapitre from '@/components-business/Chapitre.vue';

import { useChapitre } from './composables/useChapitre';

export default {
  components: {
    Chapitre,
    Menu,
  },
  setup() {
    const { params } = useRoute();

    const { chapitre } = useChapitre(params.chapitreSlug as string);

    return { chapitre };
  },
};

</script>

<template>
  <Menu />
  <Chapitre v-if="chapitre" :chapitre="chapitre" />
  <template v-if="!chapitre">Loading ...</template>
</template>
