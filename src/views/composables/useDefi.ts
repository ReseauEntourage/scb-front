import { computed, Ref, ref } from 'vue';
import { Defi, getDefi } from '@/api';

/* eslint-disable import/prefer-default-export */
export function useDefi(id: string) {
  const defi: Ref<Defi | undefined> = ref();

  getDefi(id).then((item) => { defi.value = item; });

  return {
    defi: computed(() => defi.value),
  };
}
