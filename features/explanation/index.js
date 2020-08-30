import './index.scss';
import Link from 'next/link';
import { getArticle } from '../../services';
import validate from '../../static/images/validate.svg';
import refuse from '../../static/images/refuse.svg';

const getNextLink = article => {
  const articles = article.chapitre.articles;
  const chapitres = article.chapitre.parcour.chapitres;
  const nextArticle = articles.find(item => item.order === article.order + 1);
  const nextChapitre = chapitres.find(item => item.order === article.chapitre.order + 1);
  if (nextArticle) {
    return `${article.chapitre.title_slug}/${nextArticle.title_slug}`;
  } else if (nextChapitre) {
    return `${nextChapitre.title_slug}`;
  } else {
    return `conclusion`;
  }
}

const Explanation = ({ slug, articleSlug, value }) => {
  const article = getArticle(articleSlug);
  if (!article) { return (<div>...</div>); }

  const quizz = article.content;
  const color = `#${article.chapitre.parcour.color}`;
  const href = `/parcours/${slug}/${getNextLink(article)}`;

  return (
    <div className='explanation' style={{ background: color }}>
      {value == 'true'
        ? <div><img src={validate} alt='bonne reponse svg' /><span>Réponse correcte</span></div>
        : <div><img src={refuse} alt='mauvaise reponse svg' /><span>Réponse incorrecte</span></div>
      }
      <p>{quizz.explanation}</p>

      <Link href={href}><a className="EnteteButton" style={{ background: color }}>Continuer</a></Link>
    </div>
  );
}

export default Explanation;
