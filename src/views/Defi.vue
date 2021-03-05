<script lang="ts">
import { useRoute } from 'vue-router';

import Defi from '@/components-business/Defi.vue';
import Shell from '@/components-layout/Shell.vue';

import { useDefi } from './composables/useDefi';

export default {
  components: {
    Defi,
    Shell,
  },
  setup() {
    const { params } = useRoute();

    const { defi } = useDefi(params.id as string);

    return { defi };
  },
};
</script>

<template>
  <Shell>
    <Defi v-if="defi" :defi="defi" />
    <template v-if="!defi">Loading ...</template>
  </Shell>
</template>
