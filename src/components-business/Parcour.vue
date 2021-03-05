<script lang="ts">
import { toRefs, PropType } from 'vue';

import { Parcour } from '@/api';

import { useNextLink } from '@/composables/useNextLink';
import { useParcourColor } from '@/composables/useParcourColor';

import BackgroundImage from '@/components-less/BackgroundImage.vue';
import Character from '@/components-less/Character.vue';
import Duration from '@/components-less/Duration.vue';

interface Props {
  parcour: Parcour;
}

export default {
  components: { BackgroundImage, Character, Duration },
  props: {
    parcour: {
      type: Object as PropType<Parcour>,
      required: true,
    },
  },
  setup(props: Props) {
    const { parcour } = toRefs(props);
    const { nextLink } = useNextLink(parcour.value);
    const { parcourColor } = useParcourColor(parcour.value);

    const { character } = parcour.value;
    const mobileBackground = parcour.value.background_mobile;
    const desktopBackground = parcour.value.background_desktop;

    return {
      nextLink,
      parcourColor,
      character,
      mobileBackground,
      desktopBackground,
    };
  },
};
</script>

<template>
  <BackgroundImage :mobile-img="mobileBackground" :desktop-img="desktopBackground"/>
  <div class="Parcour">
    <Duration :duration="parcour.duration"/>

    <h1>{{ parcour.title }}</h1>

    <Character v-if="character" :character="character" :color="parcourColor" />

    <a class="button" :href="nextLink" :style="{ color: parcourColor }">Commencer</a>
  </div>
</template>

<style lang="scss" scoped>
.Parcour {
  padding: 30px;
  display: flex;
  flex-direction: column;
  .button {
    margin: auto auto 0;
  }
}
</style>

<style lang="scss" scoped>
.Parcour {
  --header-1-color: #ffffff;
  text-align: center;
}
</style>
