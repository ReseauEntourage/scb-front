<script lang="ts">
import { useRoute } from 'vue-router';

import Menu from '@/components-layout/Menu.vue';
import Parcour from '@/components-business/Parcour.vue';

import { useParcour } from './composables/useParcour';

export default {
  components: {
    Menu,
    Parcour,
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
  <Parcour v-if="parcour" :parcour="parcour" />
  <template v-if="!parcour">Loading ...</template>
</template>
