<script lang="ts">
import Menu from '@/components-layout/Menu.vue';
import Footer from '@/components-layout/Footer.vue';

export default {
  components: { Menu, Footer },
};
</script>

<template>
  <div class="Shell">
    <Menu />
    <div class="content">
      <slot/>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.Shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
  }
}
</style>

<style lang="scss">
.content {
  position: relative;

  display: flex;
  flex-direction: column;

  & > div {
    flex: 1;
  }
}
</style>
