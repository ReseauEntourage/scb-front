import { computed, Ref, ref } from 'vue';
import { Parcour, getParcours } from '@/api';

const parcours: Ref<Parcour[] | undefined> = ref();

getParcours().then((items) => { parcours.value = items; });

/* eslint-disable import/prefer-default-export */
export function useParcours() {
  return {
    parcours: computed(() => parcours.value),
  };
}
