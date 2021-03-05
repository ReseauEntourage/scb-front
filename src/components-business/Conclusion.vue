<script lang="ts">
import { toRefs, PropType } from 'vue';

import { Parcour } from '@/api';

import { useRouter } from 'vue-router';
import { useParcourColor } from '@/composables/useParcourColor';

import BackgroundImage from '@/components-less/BackgroundImage.vue';
import Character from '@/components-less/Character.vue';
import DefiCard from '@/components-less/DefiCard.vue';
import SocialButtons from '@/components-less/SocialButtons.vue';

interface Props {
  parcour: Parcour;
}

export default {
  components: { BackgroundImage, Character, DefiCard, SocialButtons },
  props: {
    parcour: {
      type: Object as PropType<Parcour>,
      required: true,
    },
  },
  setup(props: Props) {
    const router = useRouter();
    const { parcour } = toRefs(props);
    const { defis } = parcour.value;
    const { parcourColor } = useParcourColor(parcour.value);

    const { character } = parcour.value;
    const mobileBackground = parcour.value.background_mobile;
    const desktopBackground = parcour.value.background_desktop;

    const navigateToParcours = () => router.push({ name: 'Parcours' });

    return {
      defis,
      parcourColor,
      character,
      mobileBackground,
      desktopBackground,
      navigateToParcours,
    };
  },
};
</script>

<template>
  <BackgroundImage :mobile-img="mobileBackground" :desktop-img="desktopBackground"/>
  <div class="Conclusion">
    <h1>Vous avez aimez ce parcours</h1>
    <h2>Vos Défis :</h2>
    <template v-for="(defi, index) in defis" :key="index" >
      <DefiCard :defi="defi" />
    </template>

    <Character v-if="character" :character="character" :color="parcourColor" />

    <h2>Partager cette histoire avec vos amis</h2>

    <SocialButtons class="social-buttons" :color="parcourColor" />

    <a class="button" :style="{ color: parcourColor }" @click="navigateToParcours">Retour aux parcours</a>
  </div>
</template>

<style lang="scss" scoped>
.Conclusion {
  padding: 30px;
  display: flex;
  flex-direction: column;
  .social-buttons {
    margin-bottom: 30px;
  }
  .button {
    margin: auto auto 0;
  }
}
</style>

<style lang="scss" scoped>
.Conclusion {
  --header-1-color: #ffffff;
  --header-2-color: #ffffff;
  text-align: center;
}
</style>
