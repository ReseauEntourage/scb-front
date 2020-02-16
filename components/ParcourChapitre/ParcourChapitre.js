import "./ParcourChapitre.scss";
import { useQuery } from '@apollo/react-hooks';
import QUERY_GQL from "./query.gql";
import Comprendre from "./Comprendre/Comprendre";
import Changer from "./Changer/Changer";
import Agir from "./Agir/Agir";

const ParcourChapitre = ({ slug, enumeration }) => {
  const { loading, data } = useQuery(QUERY_GQL, {
    variables: { 
      whereSlug: { url_slug: slug }
    }
  });

  if (loading) {
    return <div></div>;
  }

  const parcour = data.parcours.pop();

  switch(enumeration) {
    case 'comprendre': return <Comprendre parcour={parcour} slug={slug} />;
    case 'changer': return <Changer parcour={parcour} slug={slug} />;
    case 'agir': return <Agir  parcour={parcour} slug={slug} />;
    default: return <Comprendre  parcour={parcour} slug={slug} />;
  }
};

export default ParcourChapitre;
