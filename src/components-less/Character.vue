<script lang="ts">
import { Character, Image } from '@/api/model';
import { PropType, toRefs } from 'vue';

interface Props {
  character: Character;
}

const getImageUrl = (image: Image) => {
  if (image.provider === 'local') {
    return `${process.env.VUE_APP_API_URL}${image.url}`;
  }
  if (image.provider === 'aws-s3') {
    return image.url;
  }
  return image.url;
};

export default {
  props: {
    character: {
      type: Object as PropType<Character>,
      required: true,
    },
  },
  setup(props: Props) {
    const { character } = toRefs(props);
    const imgSrc = getImageUrl(character.value.avatar);

    return { imgSrc };
  },
};
</script>

<template>
  <div class="ParcourCard-avatar">
    <img :src="imgSrc" alt="character" />
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 100%;
}
</style>
