<script lang="ts">
import { useRoute } from 'vue-router';

import Menu from '@/components-layout/Menu.vue';
import Article from '@/components-business/Article.vue';

import { useArticle } from './composables/useArticle';

export default {
  components: {
    Article,
    Menu,
  },
  setup() {
    const { params } = useRoute();

    const { article } = useArticle(params.articleSlug as string);

    return { article };
  },
};
</script>

<template>
  <Menu />
  <Article v-if="article" :article="article" />
  <template v-if="!article">Loading ...</template>
</template>
