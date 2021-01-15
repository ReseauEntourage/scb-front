import { computed, Ref, ref } from 'vue';
import { Article, getArticle } from '@/api';

/* eslint-disable import/prefer-default-export */
export function useArticle(id: string) {
  const article: Ref<Article | undefined> = ref();

  getArticle(id).then((item) => { article.value = item; });

  return {
    article: computed(() => article.value),
  };
}
