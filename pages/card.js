import { useQuery } from '@apollo/react-hooks';
import { GET_PARCOURS } from '../graphql/querries';

import Card from '../components/Card/Card';

import Menu from '../components/Menu/Menu';

const card = () => {
  const { loading, data } = useQuery(GET_PARCOURS);

  if (loading) {
    return <div></div>;
  }

  const cards = data.parcours.map((parcour, key) => <Card
    title={parcour.Titre}
    color_1={parcour.couleur}
    color_2={parcour.couleur_2}
    duration={parcour.entete.duree}
    link={parcour.url_slug}
    img={parcour.card_personnage.url}
    key={key}
  />)

  return <div className="container">
    <Menu />
    <div className="cards-container" style={{ marginTop: "100px" }}>
      {cards}
    </div>
  </div>;
}

export default card;
