<script lang="ts">
import { useRoute } from 'vue-router';

import Parcour from '@/components-business/Parcour.vue';
import Shell from '@/components-layout/Shell.vue';

import { useParcour } from './composables/useParcour';

export default {
  components: {
    Parcour,
    Shell,
  },
  setup() {
    const { params } = useRoute();

    const { parcour } = useParcour(params.parcourSlug as string);

    return { parcour };
  },
};
</script>

<template>
  <Shell>
    <Parcour v-if="parcour" :parcour="parcour" />
    <template v-if="!parcour">Loading ...</template>
  </Shell>
</template>
