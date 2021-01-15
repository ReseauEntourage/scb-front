<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const navigateToHome = () => router.push({ name: 'Home' });
    const navigateToParcours = () => router.push({ name: 'Parcours' });
    const navigateToDefis = () => router.push({ name: 'Defis' });
    const navigateToAPropos = () => router.push({ name: 'APropos' });

    return {
      navigateToHome,
      navigateToParcours,
      navigateToDefis,
      navigateToAPropos,
    };
  },
};
</script>

<template>
  <section>
    <a class="simple-comme-bonjour" @click="navigateToHome"><img src="/img/scb.png" /></a>

    <ul>
      <li><a @click="navigateToParcours">Les parcours</a></li>
      <li><a @click="navigateToDefis">Les défis</a></li>
      <li><a @click="navigateToAPropos">A propos</a></li>
    </ul>

    <a class="entourage" href="https://www.entourage.social/" target="_blank">Agir avec entourage</a>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0 120px;
  display: flex;
  align-items: center;

  ul {
    flex: 1;
  }
}

ul {
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  li {
    list-style: none;
    margin-right: 30px;
    padding: 0 40px;
  }
}
.simple-comme-bonjour {
  img {
    height: 50px;
  }
}
.entourage {
  background: #F9572D;
  padding: 10px 30px;
  color: #FFFFFF;
}
</style>

<style lang="scss" scoped>
a {
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #626262;
  text-transform: uppercase;

  display: block;
  border-radius: 5px;

  text-decoration: none;
  &:active { color: inherit; }
  &:focus { outline: none; }
}
</style>
