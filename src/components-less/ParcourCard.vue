<script lang="ts">
import { toRefs, PropType } from 'vue';

import { Parcour } from '@/api/model';

import { useRouter } from 'vue-router';
import { useParcourColor } from '@/composables/useParcourColor';

import Character from '@/components-less/Character.vue';

interface Props {
  parcour: Parcour;
}

export default {
  components: {
    Character,
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
    const { character } = parcour.value;
    const { parcourColor } = useParcourColor(parcour.value);
    const parcourRouteOptions = {
      name: 'Parcour',
      params: { parcourSlug: parcour.value.title_slug },
    };

    const navigateToParcour = () => router.push(parcourRouteOptions);

    return {
      character,
      parcourColor,
      navigateToParcour,
    };
  },
};
</script>

<template>
  <a class="ParcourCard" :style="{ backgroundColor: parcourColor }" @click="navigateToParcour">
    <header>
      <h3>{{ parcour.title }}</h3>
      <time :datetime="parcour.duration"><img src="/img/clock.svg"/> {{ parcour.duration }} MIN</time>
    </header>

    <div class="content">
      <p>parcour.description</p>
      <a class="button">Démarrer</a>
    </div>

    <Character class="character" v-if="character" :character="character" :color="parcourColor" />
  </a>
</template>

<style lang="scss" scoped>
.ParcourCard {
  & header { grid-area: header; }
  & .content { grid-area: content; }
  & .character { grid-area: character; }

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'header header'
    'content character'
    'content character';
  gap: 0 40px;
}
</style>

<style lang="scss" scoped>
.ParcourCard {
  padding: 40px 50px;
  border-radius: 10px;
  background-image: url(/img/cloud.svg);
  background-repeat: no-repeat;
  background-position-y: -5px;
  background-position-x: calc(100% + 40px);
  background-size: 200px;
}
</style>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .button {
    width: 100%;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>

<style lang="scss" scoped>
.ParcourCard {
  text-align: left;
}
h3 {
  margin: 0;

  font-weight: 900;
  font-size: 36px;
  color: #ffffff;
}

time {
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  img {
    height: 20px;
    width: 20px;
    margin-inline-end: 10px;
  }
}

p {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
}

a {
  text-decoration: none;
  &:active { color: inherit; }
  &:focus { outline: none; }
}
</style>
