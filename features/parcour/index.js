import './index.scss';
import Link from 'next/link';
import Router from 'next/router';
import { getParcour } from '../../services';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Character from '../../components/Character/Character';
import backbtn from '../../static/images/back.svg';
import clock from '../../static/images/clock.svg';

const Parcour = ({ slug }) => {
  debugger;
  const parcour = getParcour(slug);
  if (!parcour) { return (<div>...</div>); }

  const color = `#${parcour.color}`;
  const nextChapitre = parcour.chapitres.shift();
  const href = `/parcours/${slug}/${nextChapitre.title_slug}`;
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

export default Parcour;
