import { useQuery } from '@apollo/react-hooks';
import { GET_PARCOURS } from "../../graphql/querries";
import Card from "./Card/Card";

const Cards = () => {
  const { loading, data } = useQuery(GET_PARCOURS);

  if (loading) {
    return <div></div>;
  }

  const parcours = data.parcours.map((parcour, key) =>
    <Card
      title={parcour.Titre}
      color_1={parcour.couleur}
      color_2={parcour.couleur_2}
      duration={parcour.duration}
      link={parcour.url_slug}
      img={parcour.card_personnage.url}
      key={key}
    />
  );

  return <div className="cards-container">{parcours}</div>;
};

export default Cards;
