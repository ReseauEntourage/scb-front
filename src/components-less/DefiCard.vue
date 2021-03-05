<script lang="ts">
import { toRefs, PropType } from 'vue';

import { useRouter } from 'vue-router';
import { useDefiColor } from '@/composables/useDefiColor';
import { useDefiTitles } from '@/composables/useDefiTitles';

import { Defi } from '@/api/model';

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
    const router = useRouter();
    const { defi } = toRefs(props);
    const { defiColor } = useDefiColor(defi.value);
    const { defiTitles } = useDefiTitles(defi.value);

    const navigateToDefi = () => router.push({ name: 'Defi', params: { id: props.defi.id } });

    return {
      defiColor,
      defiTitles,
      navigateToDefi,
    };
  },
};
</script>

<template>
  <a class="DefiCard" :style="{ '--defi-color': defiColor }" @click="navigateToDefi">
    <span>{{ defiTitles }}</span>
    <h2><strong>{{ defi.title }}</strong></h2>
  </a>
</template>

<style lang="scss" scoped>
.DefiCard {
  display: block;
  margin-bottom: 30px;
  padding: 20px;
  background-image: url(/img/arrow-white.svg), linear-gradient(-45deg, var(--defi-color));
  background-repeat: no-repeat, repeat;
  background-position: right center, left top;
  border-radius: 5px;
}
</style>

<style lang="scss" scoped>
.DefiCard {
  --header-2-color: #ffffff;
  --span-color: #ffffff;

  text-align: left;

  h2 {
    margin: 0;
  }
  span {
    text-transform: uppercase;
  }
}
</style>
