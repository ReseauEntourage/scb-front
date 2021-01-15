<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <iframe
    title="video-player"
    id="player"
    type="text/html"
    width="640"
    height="360"
    :src="src"
  />
</template>
