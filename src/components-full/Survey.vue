<script lang="ts">
import { ref, toRefs, PropType } from 'vue';

import { useParcourColor } from '@/composables/useParcourColor';

import { Article } from '@/api';

import ResponseInput from '@/components-less/ResponseInput.vue';

interface Props {
  article: Article;
}

export default {
  components: { ResponseInput },
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  setup(props: Props) {
    const selectedResponse = ref();
    const { href } = window.location;
    const { article } = toRefs(props);
    const { chapitre } = article.value;
    const { parcour } = chapitre;
    const { parcourColor } = useParcourColor(parcour);
    const survey = article.value.content.pop();

    return {
      parcour,
      parcourColor,
      survey,
      selectedResponse,
      href,
    };
  },
};
</script>

<template>
  <div class="Survey">
    <h2>{{ article.chapitre.title }}</h2>

    <h1>{{ survey.question }}</h1>

    <ResponseInput class="responses" :parcour="parcour" :responses="survey.response" :response="selectedResponse" @update:response="selectedResponse = $event" />

    <template v-if="selectedResponse">
      <a class="button" v-if="selectedResponse.isAnwser" :href="`${href}/true`" :style="{ background: parcourColor }">Continuer</a>
      <a class="button" v-if="!selectedResponse.isAnwser" :href="`${href}/false`" :style="{ background: parcourColor }">Continuer</a>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.Survey {
  padding: 30px;
  display: flex;
  flex-direction: column;
  .responses {
    max-width: 768px;
    margin: auto;
  }
  .button {
    margin: auto auto 0;
  }
}
</style>

<style lang="scss" scoped>
.Survey {
  --header-1-color: #3d3d3d;
  --header-2-color: #c1c1c1;
  --button-color: #fff;
  text-align: center;

  h2 {
    text-transform: uppercase;
  }
}
</style>
