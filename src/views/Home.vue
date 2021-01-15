<script lang="ts">
import Menu from '@/components-layout/Menu.vue';
import Footer from '@/components-layout/Footer.vue';
import Home from '@/components-business/Home.vue';

import { useParcours } from './composables/useParcours';

export default {
  components: {
    Menu,
    Footer,
    Home,
  },
  setup() {
    const { parcours } = useParcours();

    return { parcours };
  },
};
</script>

<template>
  <Menu />
  <Home v-if="parcours" :parcours="parcours" />
  <template v-if="!parcours">Loading ...</template>
  <Footer />
</template>
