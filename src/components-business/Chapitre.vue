<script lang="ts">
import { toRefs, PropType } from 'vue';

import { Chapitre } from '@/api';

import { useNextLink } from '@/composables/useNextLink';
import { useParcourColor } from '@/composables/useParcourColor';

import BackgroundImage from '@/components-less/BackgroundImage.vue';
import Character from '@/components-less/Character.vue';

interface Props {
  chapitre: Chapitre;
}

export default {
  components: { BackgroundImage, Character },
  props: {
    chapitre: {
      type: Object as PropType<Chapitre>,
      required: true,
    },
  },
  setup(props: Props) {
    const { chapitre } = toRefs(props);
    const { parcour } = chapitre.value;
    const { character } = chapitre.value;
    const { nextLink } = useNextLink(parcour, chapitre.value);
    const { parcourColor } = useParcourColor(parcour);

    const mobileBackground = parcour.background_mobile;
    const desktopBackground = parcour.background_desktop;

    return {
      character,
      nextLink,
      parcourColor,
      mobileBackground,
      desktopBackground,
    };
  },
};
</script>

<template>
  <BackgroundImage :mobile-img="mobileBackground" :desktop-img="desktopBackground"/>
  <div class="Chapitre">
    <h2>Partie {{ chapitre.order }}</h2>
    <h1>{{ chapitre.title }}</h1>

    <Character v-if="character" :character="character" :color="parcourColor" />

    <vue3-markdown-it :source="chapitre.content" />

    <a class="button" :href="nextLink" :style="{ color: parcourColor }">Commencer</a>
  </div>
</template>

<style lang="scss" scoped>
.Chapitre {
  padding: 30px;
  display: flex;
  flex-direction: column;
  .button {
    margin: auto auto 0;
  }
}
</style>

<style lang="scss" scoped>
.Chapitre {
  --header-1-color: #ffffff;
  --header-2-color: #ffffff;
  --paragraph-color: #ffffff;

  text-align: center;

  h2 {
    text-transform: uppercase;
  }
}
</style>
