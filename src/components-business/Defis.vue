<script lang="ts">
import { PropType } from 'vue';

import { Defi } from '@/api';

import DefiCard from '@/components-less/DefiCard.vue';

export default {
  components: {
    DefiCard,
  },
  props: {
    defis: {
      type: Array as PropType<Defi[]>,
      required: true,
    },
  },
};
</script>

<template>
  <div class="Defis">
    <h1>Passez à l'action</h1>
    <p>Chacun, même d’un simple bonjour, peut agir contre la grande précarité. L’attention et l’estime que l’on témoigne à une personne sans-abri en discutant avec elle ont une grande valeur. Les riverains et les associations peuvent agir ensemble pour rendre leur quartier plus humain.</p>
    <p><strong>Voici des défis pour vous aider à passer à l’action !</strong></p>
    <article>
      <template v-for="(defi, index) in defis" :key="index" >
        <DefiCard :defi="defi" />
      </template>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.Defis {
  max-width: 1320px;
  padding: 0 120px;
  margin: 0 auto;
}
</style>

<style lang="scss" scoped>
.Defis {
  text-align: center;
}
h1 {
  font-size: 44px;
  font-weight: 500;
  color: #3D3D3D;
}

p {
  font-size: 30px;
  font-weight: 500;
  color: #626262;
  line-height: 170%;
}
</style>
