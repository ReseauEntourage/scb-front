<script lang="ts">
import { PropType } from 'vue';

import { Article } from '@/api';

import Quote from '@/components-full/Quote.vue';
import Survey from '@/components-full/Survey.vue';
import Texte from '@/components-full/Texte.vue';
import Video from '@/components-full/Video.vue';

interface Props {
  article: Article;
}

export default {
  components: {
    Quote,
    Survey,
    Texte,
    Video,
  },
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  setup(props: Props) {
    const isTexteType = () => props.article.type === 'text';
    const isVideoType = () => props.article.type === 'video';
    const isQuoteType = () => props.article.type === 'quote';
    const isSurveyType = () => props.article.type === 'survey';

    return {
      isTexteType,
      isVideoType,
      isQuoteType,
      isSurveyType,
    };
  },
};
</script>

<template>
  <template v-if="isTexteType()"><Texte :article="article" /></template>
  <template v-if="isVideoType()"><Video :article="article" /></template>
  <template v-if="isQuoteType()"><Quote :article="article" /></template>
  <template v-if="isSurveyType()"><Survey :article="article" /></template>
</template>
