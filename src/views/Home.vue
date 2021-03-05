<script lang="ts">
import Home from '@/components-business/Home.vue';
import Shell from '@/components-layout/Shell.vue';

import { useParcours } from './composables/useParcours';

export default {
  components: {
    Home,
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
    <Home v-if="parcours" :parcours="parcours" />
    <template v-if="!parcours">Loading ...</template>
  </Shell>
</template>
