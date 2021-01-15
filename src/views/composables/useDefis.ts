import { computed, Ref, ref } from 'vue';
import { Defi, getDefis } from '@/api';

const defis: Ref<Defi[] | undefined> = ref();

getDefis().then((items) => { defis.value = items; });

/* eslint-disable import/prefer-default-export */
export function useDefis() {
  return {
    defis: computed(() => defis.value),
  };
}
