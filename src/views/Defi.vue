<script lang="ts">
import { useRoute } from 'vue-router';

import Defi from '@/components-business/Defi.vue';
import Menu from '@/components-layout/Menu.vue';
import Footer from '@/components-layout/Footer.vue';

import { useDefi } from './composables/useDefi';

export default {
  components: {
    Defi,
    Footer,
    Menu,
  },
  setup() {
    const { params } = useRoute();

    const { defi } = useDefi(params.id as string);

    return { defi };
  },
};
</script>

<template>
  <Menu />
  <Defi v-if="defi" :defi="defi" />
  <template v-if="!defi">Loading ...</template>
  <Footer />
</template>
