import './Parcour.scss';
import { useQuery } from '@apollo/react-hooks';
import QUERY_GQL from './query.gql';
import Router from 'next/router';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import EnteteButton from '../EnteteButton/EnteteButton';
import SCBCharacter from '../SCBCharacter/SCBCharacter';
import backbtn from '../../static/images/back.svg';
import clock from '../../static/images/clock.svg';

const Parcour = ({ slug }) => {
  const enumeration = 'Intro';
  const { loading, data } = useQuery(QUERY_GQL, {
    variables: { 
      whereSlug: { url_slug: slug },
      whereChapitre: { chapitre: enumeration }
    }
  });

  if (loading) {
    return <div></div>;
  }

  const parcour = data.parcours.pop();
  const entete = parcour.entetes.pop();

  return (
    <div className="Parcour">
      <BackgroundImage
        mobile_img={parcour.background_mobile.url}
        desktop_img={parcour.background_desktop.url}
      />

      <img
        className="Parcour__back"
        src={backbtn}
        alt="arrow back"
        onClick={() => Router.back()}
      />

      <div>
        <div className="Parcour__duration">
          <img 
            className="Parcour__duration-icon"
            src={clock}
            alt="clock img"
          /> {parcour.duration} MIN
        </div>

        <h1 className="Parcour__title">{entete.Titre}</h1>

        <SCBCharacter
          image={parcour.personnage.url}
          characterName={parcour.character_name}
          characterTexte={entete.texte_personnage}
          color={parcour.couleur}
          param={"entete"}
        />
      </div>

      <EnteteButton
        title={"commencer"}
        color={parcour.couleur}
        slug={parcour.url_slug}
        chapitre={enumeration}
        quizz={parcour.quizzes.length}
      />
    </div>
  );
}

export default Parcour;
