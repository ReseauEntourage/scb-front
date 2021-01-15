<script lang="ts">
import { toRefs, PropType } from 'vue';

import { useRouter } from 'vue-router';
import { useDefiColor } from '@/composables/useDefiColor';

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
    const titles = defi.value.parcours.map((parcour) => parcour.title).join(' — ');

    const navigateToDefi = () => router.push({ name: 'Defi', params: { id: props.defi.id } });

    return {
      defiColor,
      titles,
      navigateToDefi,
    };
  },
};
</script>

<template>
  <a class="DefiCard" :style="{ '--defi-color': defiColor }" @click="navigateToDefi">
    <span>{{ titles }}</span>
    <h3>{{ defi.title }}</h3>
  </a>
</template>

<style lang="scss" scoped>
.DefiCard {
  padding: 30px;
  background-image: url(/img/arrow-white.svg), linear-gradient(-45deg, var(--defi-color));
  background-repeat: no-repeat, repeat;
  background-position: right center, left top;
}
span {
  text-transform: uppercase;
}
</style>

<style lang="scss" scoped>
.DefiCard {
  text-align: left;
}
h3 {
  margin: 0;

  font-size: 30px;
  font-weight: 500;
  color: #FFFFFF;
}

span {
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
}

a {
  display: block;
  min-width: 345px;
  margin: 0 auto 50px;
  padding: 20px;
  border-radius: 10px;

  text-decoration: none;
  &:active { color: inherit; }
  &:focus { outline: none; }
}
</style>
