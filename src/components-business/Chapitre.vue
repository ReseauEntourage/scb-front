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
  components: {
    BackgroundImage,
    Character,
  },
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
  <div class="Chapitre">
    <BackgroundImage :mobile-img="mobileBackground" :desktop-img="desktopBackground"/>

    <div class="Chapitre-content">
      <h2>Partie {{ chapitre.order }}</h2>
      <h1>{{ chapitre.title }}</h1>
      <Character v-if="character" :character="character" :color="parcourColor" />
      <vue3-markdown-it :source="chapitre.content" />
      <p></p>
    </div>

    <a :href="nextLink" :style="{ color: parcourColor }">Commencer</a>
  </div>
</template>

<style lang="scss" scoped>.Chapitre { height: 100vh; }</style>

<style lang="scss" scoped>
.Chapitre {
  position: relative;
  padding: 30px;

  display: flex;
  flex-direction: column;
  .Chapitre-content {
    flex: 1;
  }
}
</style>

<style lang="scss" scoped>
.Chapitre {
  text-align: center;
}
h1 {
  font-size: 36px;
  font-weight: 500;
  text-transform: capitalize;
  color: #ffffff;
}

h2 {
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
  color: #ffffff;
}

p {
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  color: #ffffff;
}

a {
  min-width: 345px;
  margin: 0 auto;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;

  text-decoration: none;
  &:active { color: inherit; }
  &:focus { outline: none; }
}
</style>
