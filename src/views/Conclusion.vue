<script lang="ts">
import { useRoute } from 'vue-router';

import Conclusion from '@/components-business/Conclusion.vue';
import Shell from '@/components-layout/Shell.vue';

import { useParcour } from './composables/useParcour';

export default {
  components: {
    Conclusion,
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
    <Conclusion v-if="parcour" :parcour="parcour" />
    <template v-if="!parcour">Loading ...</template>
  </Shell>
</template>
