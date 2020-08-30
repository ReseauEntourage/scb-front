import Link from 'next/link';
import { getArticle } from '../../services';
import Video from './video';
import Texte from './texte';
import Quote from './quote';
import Quizz from './quizz';

const isTexteType = article => article.type === 'texte';
const isVideoType = article => article.type === 'video';
const isQuoteType = article => article.type === 'quote';
const isQuizzType = article => article.type === 'survey';

const getNextLink = article => {
  if (isQuizzType(article)) {
    return `${article.chapitre.title_slug}/${article.title_slug}/reponse`;
  }

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

const Article = ({ slug, articleSlug }) => {
  const article = getArticle(articleSlug);
  if (!article) { return (<div>...</div>); }

  const color = `#${article.chapitre.parcour.color}`;
  const href = `/parcours/${slug}/${getNextLink(article)}`;

  const quizzResponse = '';

  return (
    <div className="article">
      {isTexteType(article) && <Texte article={article} />}
      {isVideoType(article) && <Video article={article} />}
      {isQuoteType(article) && <Quote article={article} />}
      {isQuizzType(article) && <Quizz article={article} />}

      {(isTexteType(article) || isVideoType(article) || isQuoteType(article)) &&
        <Link href={href}><a className="EnteteButton" style={{ color }}>Continuer</a></Link>
      }
      {isQuizzType(article) && quizzResponse === article.bonne_reponse &&
        <Link href={`${href}/true`}><a className="EnteteButton" style={{ color }}>Continuer</a></Link>
      }
      {isQuizzType(article) && quizzResponse !== article.bonne_reponse &&
        <Link href={`${href}/false`}><a className="EnteteButton" style={{ color }}>Continuer</a></Link>
      }
    </div>
  )
}

export default Article;
