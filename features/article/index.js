import Link from 'next/link';
import Video from './video';
import Texte from './texte';
import Quote from './quote';
import Quizz from './quizz';

const isTexteType = article => article.type === 'texte';
const isVideoType = article => article.type === 'video';
const isQuoteType = article => article.type === 'quote';
const isQuizzType = article => article.type === 'survey';

const getNextLink = article => {
  console.log('getNextLink article', article);
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

const renderArticle = (article, slug) => {
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
};

const renderEmptyArticle = () => <p>No Article found</p>;

const Article = ({ article, slug }) => article && slug ? renderArticle(article, slug) : renderEmptyArticle();

export default Article;
