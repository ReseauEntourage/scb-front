<script lang="ts">
import { toRefs, PropType } from 'vue';

import { Parcour } from '@/api';

import { useRouter } from 'vue-router';
import { useParcourColor } from '@/composables/useParcourColor';

import BackgroundImage from '@/components-less/BackgroundImage.vue';
import Character from '@/components-less/Character.vue';
import DefiCard from '@/components-less/DefiCard.vue';
import MessengerIcon from '@/components-less/MessengerIcon.vue';
import WhatsappIcon from '@/components-less/WhatsappIcon.vue';

interface Props {
  parcour: Parcour;
}

export default {
  components: {
    BackgroundImage,
    Character,
    DefiCard,
    MessengerIcon,
    WhatsappIcon,
  },
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
  <div class="Conclusion">
    <BackgroundImage :mobile-img="mobileBackground" :desktop-img="desktopBackground"/>

    <div class="Conclusion-content">
      <h1>Vous avez aimez ce parcours</h1>
      <h2>Vos Défis :</h2>
      <template v-for="(defi, index) in defis" :key="index" >
        <DefiCard :defi="defi" />
      </template>

      <Character v-if="character" :character="character" :color="parcourColor" />

      <h2>Partager cette histoire avec vos amis</h2>
      <a class="button" :style="{ color: parcourColor }" href="fb-messenger://share/?link=https://video-react.js.org/&app_id=123456789">
        <MessengerIcon :color="parcourColor" /> Messenger
      </a>
      <a class="button" :style="{ color: parcourColor }" href="https://api.whatsapp.com/send?text=https://video-react.js.org" data-action="share/whatsapp/share">
        <WhatsappIcon :color="parcourColor" /> Whatsapp
      </a>
    </div>

    <a :style="{ color: parcourColor }" @click="navigateToParcours">Retour aux parcours</a>
  </div>
</template>

<style lang="scss" scoped>.Conclusion { height: 100vh; }</style>

<style lang="scss" scoped>
.Conclusion {
  position: relative;
  padding: 30px;

  display: flex;
  flex-direction: column;
  .Conclusion-content {
    flex: 1;
  }
}
</style>

<style lang="scss" scoped>
.Conclusion {
  text-align: center;
}
h1 {
  font-size: 36px;
  font-weight: 900;
  color: #ffffff;
}

h2 {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
}

a {
  min-width: 345px;
  margin: 0 auto 20px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;

  text-decoration: none;
  &:active { color: inherit; }
  &:focus { outline: none; }
}

.button + .button {
  margin-left: 20px;
}
</style>
