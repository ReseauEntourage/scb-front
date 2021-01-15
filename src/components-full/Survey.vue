<script lang="ts">
import { ref, toRefs, PropType } from 'vue';

import { useParcourColor } from '@/composables/useParcourColor';

import { Article } from '@/api';

import ResponseInput from '@/components-less/ResponseInput.vue';

interface Props {
  article: Article;
}

export default {
  components: {
    ResponseInput,
  },
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
    <div class="Survey-content">
      <h2>{{ article.chapitre.title }}</h2>
      <h1>{{ survey.question }}</h1>
      <ResponseInput class="Survey-reponses" :parcour="parcour" :responses="survey.response" :response="selectedResponse" @update:response="selectedResponse = $event" />
    </div>

    <template v-if="selectedResponse">
      <a v-if="selectedResponse.isAnwser" :href="`${href}/true`" :style="{ background: parcourColor }">Continuer</a>
      <a v-if="!selectedResponse.isAnwser" :href="`${href}/false`" :style="{ background: parcourColor }">Continuer</a>
    </template>
  </div>
</template>

<style lang="scss" scoped>.Survey { height: 100vh; }</style>

<style lang="scss" scoped>
.Survey {
  position: relative;
  padding: 30px;

  display: flex;
  flex-direction: column;
  .Survey-content {
    flex: 1;
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>

<style lang="scss" scoped>
.Survey {
  text-align: center;
}
h1 {
  font-size: 24px;
  font-weight: 500;
  color: #3d3d3d;
}

h2 {
  font-size: 16px;
  font-weight: 400;
  color: #c1c1c1;
  text-transform: uppercase;
}

p {
  font-weight: 600;
  font-size: 16px;
}

a {
  min-width: 345px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;

  text-decoration: none;
  &:active { color: inherit; }
  &:focus { outline: none; }
}
</style>
