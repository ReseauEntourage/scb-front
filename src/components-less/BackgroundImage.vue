<script lang="ts">
import { computed, PropType } from 'vue';
import { Image } from '@/api';

interface Props {
  mobileImg: Image;
  desktopImg: Image;
}

const isDesktop = () => window.innerWidth > 992;

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
    mobileImg: {
      type: Object as PropType<Image>,
      required: true,
    },
    desktopImg: {
      type: Object as PropType<Image>,
      required: true,
    },
  },
  setup(props: Props) {
    const src = computed(() => {
      const image = isDesktop() ? props.desktopImg : props.mobileImg;

      return getImageUrl(image);
    });

    return { src };
  },
};
</script>

<template>
  <img :src="src" alt="" />
</template>

<style lang="scss" scoped>
img {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>
