<script lang="ts">
import Menu from '@/components-layout/Menu.vue';
import Footer from '@/components-layout/Footer.vue';
import Defis from '@/components-business/Defis.vue';

import { useDefis } from './composables/useDefis';

export default {
  components: {
    Menu,
    Footer,
    Defis,
  },
  setup() {
    const { defis } = useDefis();

    return { defis };
  },
};
</script>

<template>
  <Menu />
  <Defis v-if="defis" :defis="defis" />
  <template v-if="!defis">Loading ...</template>
  <Footer />
</template>
