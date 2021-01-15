import { computed } from 'vue';
import { Defi, Parcour } from '@/api';

interface GradientColor {
  color: string;
  start: number;
  end: number;
}

const toColor = () => (parcour: Parcour, index: number, items: Parcour[]) => ({
  color: `#${parcour.color}`,
  start: Math.round((100 * index) / items.length),
  end: Math.round((100 * (index + 1)) / items.length),
});

const toGradientColor = () => (gradientItem: GradientColor) => `${gradientItem.color} ${gradientItem.start}%, ${gradientItem.color} ${gradientItem.end}%`;

/* eslint-disable import/prefer-default-export */
export function useDefiColor(defi: Defi) {
  return { defiColor: computed(() => defi.parcours.map(toColor()).map(toGradientColor()).join(', ')) };
}
