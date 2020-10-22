import './index.scss';
import Link from 'next/link';
import Router from 'next/router';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Character from '../../components/Character/Character';
import backbtn from '../../static/images/back.svg';
import clock from '../../static/images/clock.svg';

const getNextLink = parcour => {
  const nextChapitre = parcour.chapitres[0];
  
  if (nextChapitre) {
    return `${nextChapitre.title_slug}`;
  } else {
    return `conclusion`;
  }
}

const renderParcour = parcour => {
  const color = `#${parcour.color}`;
  const href = `/parcours/${parcour.title_slug}/${getNextLink(parcour)}`;
  const character = parcour.character && <Character character={parcour.character} color={color} />;

  return (
    <div className="parcour">
      <BackgroundImage mobile_img={parcour.background_mobile.url} desktop_img={parcour.background_desktop.url} />
      <img className="parcour__back" src={backbtn} onClick={() => Router.back()} />
      <div>
        <div className="parcour__duration">
          <img src={clock}/> <span>{parcour.duration} MIN</span>
        </div>
        <h1>{parcour.title}</h1>
        { character }
      </div>

      <Link href={href}><a className="EnteteButton" style={{ color }}>Commencer</a></Link>
    </div>
  );
}

const renderEmptyParcour = () => <p>No Parcour found</p>;

const Parcour = ({ parcour }) => parcour ? renderParcour(parcour) : renderEmptyParcour();

export default Parcour;
