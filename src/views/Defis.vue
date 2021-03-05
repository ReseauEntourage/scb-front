<script lang="ts">
import Defis from '@/components-business/Defis.vue';
import Shell from '@/components-layout/Shell.vue';

import { useDefis } from './composables/useDefis';

export default {
  components: {
    Defis,
    Shell,
  },
  setup() {
    const { defis } = useDefis();

    return { defis };
  },
};
</script>

<template>
  <Shell>
    <Defis v-if="defis" :defis="defis" />
    <template v-if="!defis">Loading ...</template>
  </Shell>
</template>
