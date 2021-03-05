import { computed } from 'vue';
import { Defi, Parcour } from '@/api';

const toTitle = () => (parcour: Parcour) => parcour.title;

/* eslint-disable import/prefer-default-export */
export function useDefiTitles(defi: Defi) {
  return {
    defiTitles: computed(() => defi.parcours.map(toTitle()).join(' — ')),
  };
}
