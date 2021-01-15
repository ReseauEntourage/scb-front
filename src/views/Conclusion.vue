<script lang="ts">
import { useRoute } from 'vue-router';

import Conclusion from '@/components-business/Conclusion.vue';
import Menu from '@/components-layout/Menu.vue';

import { useParcour } from './composables/useParcour';

export default {
  components: {
    Conclusion,
    Menu,
  },
  setup() {
    const { params } = useRoute();

    const { parcour } = useParcour(params.parcourSlug as string);

    return { parcour };
  },
};
</script>

<template>
  <Menu />
  <Conclusion v-if="parcour" :parcour="parcour" />
  <template v-if="!parcour">Loading ...</template>
</template>
