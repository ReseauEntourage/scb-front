<script lang="ts">
import { SetupContext, toRefs, PropType } from 'vue';

import { useParcourColor } from '@/composables/useParcourColor';

import { Response, Parcour } from '@/api/model';

interface Props {
  parcour: Parcour;
  responses: Response[];
  response: Response;
}

const findByContent = (content: string) => (item: Response) => item.content === content;

export default {
  props: {
    parcour: {
      type: Object as PropType<Parcour>,
      required: true,
    },
    responses: {
      type: Array as PropType<Response[]>,
      required: true,
    },
    response: {
      type: Object as PropType<Response>,
      required: true,
    },
  },
  setup(props: Props, { emit }: SetupContext) {
    const { parcour } = toRefs(props);
    const { responses } = toRefs(props);
    const { parcourColor } = useParcourColor(parcour.value);

    const onResponseChange = (event: CustomEvent) => {
      const selectedInput = event.target as HTMLInputElement;
      const response = responses.value.find(findByContent(selectedInput.value));
      emit('update:response', response);
    };
    const isSelected = (response: Response) => response.content === props.response?.content;

    return {
      parcourColor,
      onResponseChange,
      isSelected,
    };
  },
};
</script>

<template>
  <div class="ResponseInput">
    <template v-for="(response, index) in responses" :key="index">
      <label :class="{ selected: isSelected(response) }" :style="{ '--parcour-color': parcourColor }">
        <input type="radio" id="response" name="response" :value="response.content" @change="onResponseChange"/>
        {{ response.content }}
      </label>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.ResponseInput {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 30px;
  }
}
</style>

<style lang="scss" scoped>
label {
  min-width: 480px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--parcour-color);
  background: transparent;
  color: var(--parcour-color);

  &.selected {
    color: #fff;
    background: var(--parcour-color);
  }

  input {
    display: none;
  }
}
</style>
