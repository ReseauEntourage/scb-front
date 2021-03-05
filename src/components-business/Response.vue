<script lang="ts">
import { toRefs, PropType } from 'vue';

import { useRoute } from 'vue-router';

import { useNextLink } from '@/composables/useNextLink';
import { useParcourColor } from '@/composables/useParcourColor';

import { Article } from '@/api';

import BackgroundImage from '@/components-less/BackgroundImage.vue';

interface Props {
  article: Article;
}

export default {
  components: { BackgroundImage },
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  setup(props: Props) {
    const { article } = toRefs(props);
    const { chapitre } = article.value;
    const { parcour } = chapitre;

    const { params } = useRoute();
    const { value } = params;

    const { content } = article.value;
    const { nextLink } = useNextLink(parcour, chapitre, article.value);
    const { parcourColor } = useParcourColor(parcour);
    const mobileBackground = parcour.background_mobile;
    const desktopBackground = parcour.background_desktop;

    const isCorrect = () => value === 'true';
    const isIncorrect = () => value !== 'true';

    return {
      content,
      nextLink,
      parcourColor,
      mobileBackground,
      desktopBackground,
      isCorrect,
      isIncorrect,
    };
  },
};
</script>

<template>
  <BackgroundImage :mobile-img="mobileBackground" :desktop-img="desktopBackground"/>
  <div class="Response">
    <template v-if="isCorrect()">
      <img src="/img/validate.svg" alt="bonne reponse svg" />
      <h1>Bonne réponse!</h1>
    </template>

    <template v-if="isIncorrect()">
      <img src="/img/refuse.svg" alt="mauvaise reponse svg" />
      <h1>Mauvaise réponse :(</h1>
    </template>

    <vue3-markdown-it :source="content.explanation" />

    <a class="button" :href="nextLink" :style="{ color: parcourColor }">Continuer</a>
  </div>
</template>

<style lang="scss" scoped>
.Response {
  padding: 30px;
  display: flex;
  flex-direction: column;
  img {
    width: 5em;
    margin: auto auto 60px;
  }
  h1 {
    margin-bottom: 60px;
  }
  .button {
    margin: auto auto 0;
  }
}
</style>

<style lang="scss" scoped>
.Response {
  --header-1-color: #ffffff;
  --paragraph-color: #ffffff;
  text-align: center;
}
</style>
