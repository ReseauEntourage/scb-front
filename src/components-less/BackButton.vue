<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>

<template>
  <img src="/img/back.svg" @click="router.back()" />
</template>

<style lang="scss" scoped>
img {
  position: absolute;
}
</style>
