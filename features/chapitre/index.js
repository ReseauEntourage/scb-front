import './index.scss';
import Link from 'next/link';
import { Markdown } from 'react-showdown';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

const getNextLink = chapitre => {
  console.log('getNextLink chapitre', chapitre);
  const nextArticle = chapitre.articles[0];
  
  if (nextArticle) {
    return `${chapitre.title_slug}/${nextArticle.title_slug}`;
  } else {
    return `conclusion`;
  }
}

const renderChapitre = (chapitre, slug) => {
  const parcour = chapitre.parcour;
  const color = `#${parcour.color}`;
  const href = `/parcours/${slug}/${getNextLink(chapitre)}`;
  const character = chapitre.character && <Character character={chapitre.character} color={color} />;

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

const renderEmptyChapitre = () => <p>No Chapitre found</p>;

const Chapitre = ({ chapitre, slug }) => chapitre && slug ? renderChapitre(chapitre, slug) : renderEmptyChapitre();

export default Chapitre;
