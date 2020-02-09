import './Entete.scss';
import { useQuery } from '@apollo/react-hooks';
import { GET_ENTETE_PER_SLUG } from '../../graphql/querries';
import Router from 'next/router';


import BackgroundImage from '../BackgroundImage/BackgroundImage';

import backbtn from '../../static/images/back.svg';
import clock from '../../static/images/clock.svg';

import EnteteButton from './Button/EnteteButton';
import SCBCharacter from '../SCBCharacter/SCBCharacter';

const renderParcourBackgroundImage = parcour => {
  return parcour.background_mobile && parcour.background_desktop
    ? <BackgroundImage img={parcour.background_mobile.url} desktop_img={parcour.background_desktop.url} />
    : "";
}

const renderEntete = (key, parcour, entete, enumeration) => {
  const backgroundImage = enumeration === 'Intro'
    ? renderParcourBackgroundImage(parcour)
    : <BackgroundImage img={entete.background.url}></BackgroundImage>;

  const duration = enumeration === 'Intro'
    ? <span className="time-text"> {parcour.duration} MIN</span>
    : <span className="time-text"> {entete.duree} MIN</span>;

  const personnage = parcour.personnage 
    ? <SCBCharacter image={parcour.personnage.url} character_name={parcour.character_name} character_texte={entete.texte_personnage} color={parcour.couleur} param={"entete"} /> 
    : "";
    
  const button = enumeration === 'Intro'
    ? <EnteteButton title={"commencer"} color={parcour.couleur} slug={parcour.url_slug} chapitre={enumeration} quizz={parcour.quizzes.length} />
    : <EnteteButton title={"commencer"} color={parcour.couleur} slug={parcour.url_slug} chapitre={enumeration} />;

  return <div className="entete-container" key={key}>
    {backgroundImage}
    <div className="back-button" onClick={() => Router.back()}>
      <img src={backbtn} alt="arrow back" />
    </div>
    <div className="data-container">
      <div className="entete__time-container">
        <img className="svg-clock" src={clock} alt="clock img" />
        {duration}
      </div>
      <h1 className="data-title">{entete.Titre}</h1>
    </div>
    {personnage}
    {button}
  </div>;
}

const renderEntetes = (parcour, enumeration) => {
  const entetes = parcour.entetes.map((entete, key) => {
    const enteteKey = `${parcour.id}-${key}`;

    return renderEntete(enteteKey, parcour, entete, enumeration)
  });

  return entetes;
}

const Entete = ({ id, enumeration }) => {
  const { loading, data, ...result } = useQuery(GET_ENTETE_PER_SLUG, {
    variables: { id, enumeration }
  });

  if (loading) {
    return <div></div>;
  }

  const parcours = data.parcours.map((parcour) => renderEntetes(parcour, enumeration));

  return <div className="entete-container">{parcours}</div>;
}

export default Entete;
