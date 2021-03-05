<script lang="ts">
import { toRefs, PropType } from 'vue';

import { useNextLink } from '@/composables/useNextLink';
import { useParcourColor } from '@/composables/useParcourColor';

import { Article } from '@/api';

import VideoPlayer from '@/components-less/VideoPlayer.vue';

interface Props {
  article: Article;
}

export default {
  components: { VideoPlayer },
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  setup(props: Props) {
    const { article } = toRefs(props);
    const { chapitre } = article.value;
    const { parcour } = chapitre;
    const { parcourColor } = useParcourColor(parcour);
    const { nextLink } = useNextLink(parcour, chapitre, article.value);
    const video = article.value.content.pop();

    return {
      chapitre,
      parcourColor,
      nextLink,
      video,
    };
  },
};
</script>

<template>
  <div class="Video">
    <h2>{{ chapitre.title }}</h2>
    <h1>{{ article.title }}</h1>

    <VideoPlayer class="player" :src="video.url" />

    <vue3-markdown-it :source="video.content" />

    <a class="button" :href="nextLink" :style="{ background: parcourColor }">Continuer</a>
  </div>
</template>

<style lang="scss" scoped>
.Video {
  padding: 30px;
  display: flex;
  flex-direction: column;
  .player {
    margin: auto;
  }
  .button {
    margin: auto auto 0;
  }
}
</style>

<style lang="scss" scoped>
.Video {
  --header-1-color: #3d3d3d;
  --header-2-color: #c1c1c1;
  --button-color: #fff;

  h1,
  h2 {
    text-align: center;
  }

  h2 {
    text-transform: uppercase;
  }
}
</style>
