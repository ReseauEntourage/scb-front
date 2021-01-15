<script lang="ts">
import { toRefs, PropType } from 'vue';

import { useRoute } from 'vue-router';

import { useNextLink } from '@/composables/useNextLink';
import { useParcourColor } from '@/composables/useParcourColor';

import { Article } from '@/api';

interface Props {
  article: Article;
}

export default {
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

    const isCorrect = () => value === 'true';
    const isIncorrect = () => value !== 'true';

    return {
      content,
      nextLink,
      parcourColor,
      isCorrect,
      isIncorrect,
    };
  },
};
</script>

<template>
  <div class="Response" :style="{ background: parcourColor }">
    <div class="Response-content">
      <template v-if="isCorrect()">
        <img src="/img/validate.svg" alt="bonne reponse svg" />
        <h1>Bonne réponse!</h1>
      </template>

      <template v-if="isIncorrect()">
        <img src="/img/refuse.svg" alt="mauvaise reponse svg" />
        <h1>Mauvaise réponse :(</h1>
      </template>

      <vue3-markdown-it :source="content.explanation" />
      <p></p>
    </div>

    <a :href="nextLink" :style="{ color: parcourColor }">Continuer</a>
  </div>
</template>

<style lang="scss" scoped>.Response { height: 100vh; }</style>

<style lang="scss" scoped>
.Response {
  position: relative;
  padding: 30px;

  display: flex;
  flex-direction: column;
  .Response-content {
    margin: auto;
  }
}
</style>

<style lang="scss" scoped>
.Response-content {
  img, h1 {
    margin-bottom: 60px;
  }
}
</style>

<style lang="scss" scoped>
.Response {
  text-align: center;
}
h1 {
  font-size: 24px;
  font-weight: 500;
  color: #fff;
}

p {
  font-weight: 400;
  font-size: 16px;
  color: #fff;
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
