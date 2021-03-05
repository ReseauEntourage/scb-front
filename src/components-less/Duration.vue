<script lang="ts">
export default {
  props: {
    duration: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <time :datetime="duration">
    <img src="/img/clock.svg"/> {{ duration }} MIN
  </time>
</template>

<style lang="scss" scoped>
time {
  display: flex;
  justify-content: center;

  img {
    height: 20px;
    width: 20px;
    margin-inline-end: 10px;
  }
}
</style>
