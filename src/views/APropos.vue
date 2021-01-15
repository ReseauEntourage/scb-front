<script lang="ts">
import Menu from '@/components-layout/Menu.vue';
import Footer from '@/components-layout/Footer.vue';
import APropos from '@/components-business/APropos.vue';

export default {
  components: {
    Menu,
    Footer,
    APropos,
  },
};
</script>

<template>
  <Menu />
  <APropos />
  <Footer />
</template>
