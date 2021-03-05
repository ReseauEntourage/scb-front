<template>
  <main class="APropos">
    <header>
      <p>A propos de nous</p>
      <h1>La vocation d’Entourage est de redonner un réseau à ceux qui n’ont plus de réseau.</h1>
      <article>
        <h2>À la rue, on souffre du froid, de la faim… mais surtout de solitude. Aider une personne SDF, ce n’est pas simplement lui donner un toit, un emploi, ou répondre à ses besoins primaires, c’est avant tout lui redonner son humanité, sa place dans la société.</h2>
        <h2>La lutte contre l’exclusion n’est pas seulement l’affaire des pouvoirs publics et des associations : chacun de nous, au quotidien, par notre attention, pouvons être une partie de la solution.</h2>
      </article>
    </header>

    <section>
      <ul>
        <li>
          <img src="/img/ensemble.png" />
          <h3><strong>Sensibiliser et guider</strong></h3>
          <p>Nous développons des contenus pédagogiques pour faire changer le regard de chacun sur la grande précarité et lever les freins qui empêchent d’aller vers les personnes SDF.</p>
        </li>

        <li>
          <img src="/img/joie.png" />
          <h3><strong>Faire agir ensemble</strong></h3>
          <p>Nous avons développé un réseau social sur mobile, l’application Entourage, pour permettre à chacun d’agir à son échelle, dans son quartier. Sur le réseau, habitants, associations et personnes SDF peuvent se connecter pour échanger et mener ensemble des actions solidaires. Rejoignez les 62 000 voisins solidaires qui ont déjà mené plus de 5 600 actions de solidarité !</p>
        </li>

        <li>
          <img src="/img/table.png" />
          <h3><strong>Favoriser la rencontre</strong></h3>
          <p>Partager des moments ensemble, entre voisins, avec et sans abri : Entourage est présent dans les quartiers à travers l’organisation d’activités conviviales pour faire se rencontrer les habitants du quartier : apéros, pique-niques, rencontres sportives, projections-débats, soirées jeux… Vous souhaitez co-organiser un événement avec nous ? Contactez-nous !</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
header {
  padding: 1em;
  background-color: #626b7f;
}

section {
  padding-top: 10em;
  background-image: url(/img/wave-top.svg);
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
}

ul{
  margin: 0;
  padding: 0;
}

h1,
h2,
article,
ul {
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
}

li {
  display: flex;
  flex-direction: column;

  img {
    margin: 0 auto
  }
}
</style>

<style lang="scss" scoped>
.APropos {
  --header-1-color: #ffffff;
  --header-2-color: #ffffff;
  --header-3-color: #f9572d;
  --paragraph-color: #7b7b7b;

  h1 {
    text-align: center;
  }

  h3 {
    text-transform: uppercase;
  }

  header p {
    --paragraph-color: #c4c4c4;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
