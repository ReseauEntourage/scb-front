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
  components: {
    VideoPlayer,
  },
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
    <div class="Video-content">
      <h2>{{ chapitre.title }}</h2>
      <h1>{{ article.title }}</h1>
      <VideoPlayer :src="video.url" />
      <vue3-markdown-it :source="video.content" />
      <p></p>
    </div>

    <a :href="nextLink" :style="{ background: parcourColor }">Continuer</a>
  </div>
</template>

<style lang="scss" scoped>.Video { min-height: 100vh; }</style>

<style lang="scss" scoped>
.Video {
  position: relative;
  padding: 30px;

  display: flex;
  flex-direction: column;
  .Video-content {
    flex: 1;
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>

<style lang="scss" scoped>
.Video-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style lang="scss" scoped>
.Video h1,
.Video h2 {
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
