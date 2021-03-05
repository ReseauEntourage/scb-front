<script lang="ts">
import { useRoute } from 'vue-router';

import Article from '@/components-business/Article.vue';
import Shell from '@/components-layout/Shell.vue';

import { useArticle } from './composables/useArticle';

export default {
  components: {
    Article,
    Shell,
  },
  setup() {
    const { params } = useRoute();

    const { article } = useArticle(params.articleSlug as string);

    return { article };
  },
};
</script>

<template>
  <Shell>
    <Article v-if="article" :article="article" />
    <template v-if="!article">Loading ...</template>
  </Shell>
</template>
