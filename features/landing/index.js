import './index.scss';
import ParcourCard from '../../components/ParcourCard/ParcourCard';
import agir from '../../static/images/agir_landing.png';
import changer from '../../static/images/changer_landing.png';
import comprendre from '../../static/images/comprendre_landing.png';
import landing from '../../static/images/landing.png';
import wave from '../../static/images/wave.svg';
import wave_2 from '../../static/images/wave_2.svg';

const Landing = ({ parcours }) => {
  const parcourCards = parcours.map((parcour, key) => <ParcourCard parcour={parcour} key={key} />);

  return (
    <div className="landing">
      <section className="landing__header">
        <div className="landing__header__background" style={{ backgroundImage: `url(${landing})` }} />

        <article>
          <h1>Découvrez le monde la rue</h1>
          <p>À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.</p>
          <p>Chaque parcours, élaboré par des professionnels et des personnes de la rue, se décline en 3 étapes.</p>
        </article>
      </section>

      <section className="landing__steps">
        <img src={wave} style={{ width: "100%", height: "auto" }} />
        <ul>
          <li>
            <img src={comprendre} />
            <h2>Et si on comprenait ?</h2>
            <p>Première étape : mieux comprendre le monde de la rue.</p>
          </li>
          <li>
            <img src={changer} />
            <h2>Et si on changeait de regard ?</h2>
            <p>Chacun à notre niveau, nous pouvons agir, mais cela implique d’adopter le bonne posture.</p>
          </li>
          <li>
            <img src={agir} />
            <h2>Et si on agissait ?</h2>
            <p>Tous acteur de la solidarité, à son échelle: voici des conseils concrets pour passer à l’action !</p>
          </li>
        </ul>
      </section>

      <section className="landing__parcours">
        <img src={wave_2} style={{ width: "100%", height: "auto" }} />
        <h2>Découvrir les parcours</h2>
        <article>{parcourCards}</article>
      </section>
    </div>
  );
}

export default Landing;
