import { computed, Ref, ref } from 'vue';
import { Parcour, getParcour } from '@/api';

/* eslint-disable import/prefer-default-export */
export function useParcour(id: string) {
  const parcour: Ref<Parcour | undefined> = ref();

  getParcour(id).then((item) => { parcour.value = item; });

  return {
    parcour: computed(() => parcour.value),
  };
}
