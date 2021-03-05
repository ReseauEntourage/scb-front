<script lang="ts">
import { useRoute } from 'vue-router';

import Response from '@/components-business/Response.vue';
import Shell from '@/components-layout/Shell.vue';

import { useArticle } from './composables/useArticle';

export default {
  components: {
    Response,
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
    <Response v-if="article" :article="article" />
    <template v-if="!article">Loading ...</template>
  </Shell>
</template>
