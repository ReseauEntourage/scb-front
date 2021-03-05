<script lang="ts">
import { toRefs, PropType } from 'vue';

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
    const { parcourColor } = useParcourColor(parcour);
    const { nextLink } = useNextLink(parcour, chapitre, article.value);
    const texte = article.value.content.pop();

    return {
      chapitre,
      parcourColor,
      nextLink,
      texte,
    };
  },
};
</script>

<template>
  <div class="Texte">
    <h2>{{ article.chapitre.title }}</h2>
    <h1>{{ article.title }}</h1>

    <vue3-markdown-it :source="texte.contentd" />

    <a class="button" :href="nextLink" :style="{ background: parcourColor }">Continuer</a>
  </div>
</template>

<style lang="scss" scoped>
.Texte {
  padding: 30px;
  display: flex;
  flex-direction: column;
  .button {
    margin: auto auto 0;
  }
}
</style>

<style lang="scss" scoped>
.Texte {
  --header-1-color: #3d3d3d;
  --header-2-color: #c1c1c1;
  --button-color: #fff;

  h1,
  h2 {
    text-align: center;
  }

  h2 {
    text-transform: uppercase;
  }
}
</style>
