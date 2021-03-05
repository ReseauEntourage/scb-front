<script lang="ts">
import { toRefs, PropType } from 'vue';

import { Defi } from '@/api';

import { useDefiColor } from '@/composables/useDefiColor';
import { useDefiTitles } from '@/composables/useDefiTitles';

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
    const { defiTitles } = useDefiTitles(defi.value);

    return {
      defiColor,
      defiTitles,
    };
  },
};
</script>

<template>
  <div class="Defi">
    <header :style="{ '--defi-color': defiColor }">
      <span>{{ defiTitles }}</span>
      <h1>{{ defi.title }}</h1>
    </header>

    <main>
      <vue3-markdown-it :source="defi.content" />
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
.Defi {
  --header-1-color: #ffffff;
  --paragraph-color: #626262;
  --span-color: #ffffff;

  header {
    text-align: center;
  }

  span {
    text-transform: uppercase;
  }
}
</style>

<style lang="scss">
main {
  --header-1-color: #3d3d3d;
  --header-2-color: #3d3d3d;
  --header-2-color: #3d3d3d;
  --paragraph-color: #3d3d3d;
}
</style>
