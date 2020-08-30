import './index.scss';
import Link from 'next/link';
import { Markdown } from 'react-showdown';
import { getChapitre } from '../../services';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
// import comprendre_img from '../../static/images/comprendre_landing.png';
// import changer_img from '../../static/images/changer_landing.png';
// import agir_img from '../../static/images/agir_chapitre.png';

const ParcourChapitre = ({ slug, chapitreSlug }) => {
  debugger;
  const chapitre = getChapitre(chapitreSlug);
  if (!chapitre) { return (<div>...</div>); }

  const parcour = chapitre.parcour;
  const color = `#${parcour.color}`;
  const nextArticle = chapitre.articles.shift();
  const href = `/parcours/${slug}/${chapitre.title_slug}/${nextArticle.title_slug}`;
  const character = chapitre.character && <Character character={chapitre.character} color={color} />;

  // const chapitre = {};
  // switch(enumeration) {
  //   case 'comprendre': 
  //     chapitre.number = 1;
  //     chapitre.name = 'comprendre';
  //     chapitre.img = comprendre_img;
  //     chapitre.content = 'Première étape :<br />Comprendre pour agir';
  //     break;
  //   case 'changer': 
  //     chapitre.number = 2;
  //     chapitre.name = 'changer';
  //     chapitre.img = changer_img;
  //     chapitre.content = 'Deuxième étape :<br />Comprendre que l’on est une partie essentielle de la solution';
  //     break;
  //   case 'agir': 
  //     chapitre.number = 3;
  //     chapitre.name = 'agir';
  //     chapitre.img = agir_img;
  //     chapitre.content = 'Dernière étape :<br />Passer à l’action';
  //     break;
  // }

  return (
    <div className="chapitre">
      <BackgroundImage mobile_img={parcour.background_mobile.url} desktop_img={parcour.background_desktop.url} />
      <h2>Partie {chapitre.order}</h2>
      <h1>{chapitre.name}</h1>
      { character }
      <Markdown markup={chapitre.content} />

      <Link href={href}><a className="EnteteButton" style={{ color }}>Commencer</a></Link>
    </div>
  )
};

export default ParcourChapitre;
