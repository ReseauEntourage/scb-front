<script lang="ts">
import { toRefs, PropType } from 'vue';

import { Parcour } from '@/api';

import { useNextLink } from '@/composables/useNextLink';
import { useParcourColor } from '@/composables/useParcourColor';

import BackgroundImage from '@/components-less/BackgroundImage.vue';
import Character from '@/components-less/Character.vue';

interface Props {
  parcour: Parcour;
}

export default {
  components: {
    BackgroundImage,
    Character,
  },
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
  <div class="Parcour">
    <BackgroundImage :mobile-img="mobileBackground" :desktop-img="desktopBackground"/>

    <div class="Parcour-content">
      <time :datetime="parcour.duration"><img src="/img/clock.svg"/> {{ parcour.duration }} MIN</time>
      <h1>{{ parcour.title }}</h1>
      <Character v-if="character" :character="character" :color="parcourColor" />
    </div>

    <a :href="nextLink" :style="{ color: parcourColor }">Commencer</a>
  </div>
</template>

<style lang="scss" scoped>.Parcour { height: 100vh; }</style>

<style lang="scss" scoped>
.Parcour {
  position: relative;
  padding: 30px;

  display: flex;
  flex-direction: column;
  .Parcour-content {
    flex: 1;
  }
}
</style>

<style lang="scss" scoped>
.Parcour {
  text-align: center;
}
h1 {
  font-size: 36px;
  font-weight: 900;
  color: #ffffff;
}

time {
  display: flex;
  justify-content: center;

  font-size: 16px;
  font-weight: 400;
  color: #ffffff;

  img {
    height: 20px;
    width: 20px;
    margin-inline-end: 10px;
  }
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
