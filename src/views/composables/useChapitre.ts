import { computed, Ref, ref } from 'vue';
import { Chapitre, getChapitre } from '@/api';

/* eslint-disable import/prefer-default-export */
export function useChapitre(id: string) {
  const chapitre: Ref<Chapitre | undefined> = ref();

  getChapitre(id).then((item) => { chapitre.value = item; });

  return {
    chapitre: computed(() => chapitre.value),
  };
}
