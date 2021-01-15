<template>
  <footer>
    <section>
      <ul>
        <li><a>Télécharger le livret</a></li>
        <li><a>Une question ?</a></li>
        <li><a href="https://s3-eu-west-1.amazonaws.com/entourage-ressources/mentions-legales.pdf" target="_blank">Mentions légales</a></li>
      </ul>
    </section>

    <section>
      <a>Rejoignez le réseau !</a>
      <div>
        <a href="https://www.instagram.com/reseauentourage/"><img src="/img/instagram.svg" /></a>
        <a href="https://www.facebook.com/EntourageReseauCivique/"><img src="/img/fb.svg" /></a>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #626b7f;
  padding: 50px;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  section {
    flex: 1 0 320px;
  }
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

</style>

<style lang="scss" scoped>
a {
  font-size: 24px;
  color: #FAF8F2;

  display: inline-block;
  margin: 0 20px;
  padding: 10px;
  border-radius: 10px;

  text-decoration: none;
  &:active { color: inherit; }
  &:focus { outline: none; }
}
</style>
