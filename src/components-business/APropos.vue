<template>
  <main class="APropos">
    <header>
      <h2>A propos de nous</h2>
      <h1>La vocation d’Entourage est de redonner un réseau à ceux qui n’ont plus de réseau.</h1>
      <article>
        <p>À la rue, on souffre du froid, de la faim… mais surtout de solitude. Aider une personne SDF, ce n’est pas simplement lui donner un toit, un emploi, ou répondre à ses besoins primaires, c’est avant tout lui redonner son humanité, sa place dans la société.</p>
        <p>La lutte contre l’exclusion n’est pas seulement l’affaire des pouvoirs publics et des associations : chacun de nous, au quotidien, par notre attention, pouvons être une partie de la solution.</p>
      </article>
    </header>

    <section>
      <ul>
        <li>
          <img src="/img/ensemble.png" />
          <h3>Sensibiliser et guider</h3>
          <p>Nous développons des contenus pédagogiques pour faire changer le regard de chacun sur la grande précarité et lever les freins qui empêchent d’aller vers les personnes SDF.</p>
        </li>

        <li>
          <img src="/img/joie.png" />
          <h3>Faire agir ensemble</h3>
          <p>Nous avons développé un réseau social sur mobile, l’application Entourage, pour permettre à chacun d’agir à son échelle, dans son quartier. Sur le réseau, habitants, associations et personnes SDF peuvent se connecter pour échanger et mener ensemble des actions solidaires. Rejoignez les 62 000 voisins solidaires qui ont déjà mené plus de 5 600 actions de solidarité !</p>
        </li>

        <li>
          <img src="/img/table.png" />
          <h3>Favoriser la rencontre</h3>
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
h1 {
  font-size: 44px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  color: #C4C4C4;
  text-transform: uppercase;
  text-align: center;
}

h3 {
  font-size: 36px;
  font-weight: 500;
  color: #F9572D;
}

p {
  font-size: 26px;
  font-weight: 500;
  line-height: 170%;
  color: #7B7B7B;
}

article {
  p {
    color: #ffffff;
  }
}
</style>
