<script lang="ts">
import { toRefs, PropType } from 'vue';

import { Defi } from '@/api';

import { useDefiColor } from '@/composables/useDefiColor';

interface Props {
  defi: Defi;
}

export default {
  props: {
    defi: {
      type: Object as PropType<Defi>,
      required: true,
    },
  },
  setup(props: Props) {
    const { defi } = toRefs(props);
    const { defiColor } = useDefiColor(defi.value);

    return {
      defiColor,
    };
  },
};
</script>

<template>
  <div class="Defi">
    <header :style="{ '--defi-color': defiColor }">
      <h2>{{ titles }}</h2>
      <h1>{{ defi.title }}</h1>
    </header>

    <main>
      <vue3-markdown-it :source="defi.content" />
      <p></p>
    </main>
  </div>
</template>

<style lang="scss" scoped>
header {
  padding: 30px;
  background-image: linear-gradient(-45deg, var(--defi-color));

  h1, h2 {
    max-width: 768px;
    margin: 0 auto;
  }
}

main {
  max-width: 768px;
  margin: 0 auto;
}
</style>

<style lang="scss" scoped>
h1 {
  font-size: 44px;
  font-weight: 500;
  text-align: center;
  color: #FEFEFE;
}

h2 {
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
}

p {
  font-size: 30px;
  font-weight: 500;
  line-height: 170%;
  color: #626262;
}
</style>
