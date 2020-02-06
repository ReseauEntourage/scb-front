import './Parcours.scss';
import { useQuery } from '@apollo/react-hooks';
import { GET_PARCOURS } from '../../graphql/querries';

import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const Parcours = () => {
  const { loading, data } = useQuery(GET_PARCOURS);

  if (loading) {
    return <div></div>;
  }

  const parcours = data.parcours.map((parcour, key) => (
    <Card
      title={parcour.Titre}
      color_1={parcour.couleur}
      color_2={parcour.couleur_2}
      duration={parcour.duration}
      link={parcour.url_slug}
      img={parcour.card_personnage.url}
      key={key}
    />
  )); 

  return (
    <div className="parcours-container">
      <div className='parcours-container__defis-list'>
        <h1 className='parcours-container-title_1'>Découvrir les parcours</h1>
        <div className='parcours-container-text'>
          <p>À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.</p>
        </div>
        <h2 className='parcours-container-title_h2'> Les parcours</h2>
        {parcours}
      </div>
      <Footer />
    </div>
  )
}

export default Parcours;
