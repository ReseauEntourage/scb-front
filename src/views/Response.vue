<script lang="ts">
import { useRoute } from 'vue-router';

import Menu from '@/components-layout/Menu.vue';
import Response from '@/components-business/Response.vue';

import { useArticle } from './composables/useArticle';

export default {
  components: {
    Response,
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
  <Response v-if="article" :article="article" />
  <template v-if="!article">Loading ...</template>
</template>
