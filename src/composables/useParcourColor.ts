import { computed } from 'vue';
import { Parcour } from '@/api';

/* eslint-disable import/prefer-default-export */
export function useParcourColor(parcour: Parcour) {
  return { parcourColor: computed(() => `#${parcour.color}`) };
}
