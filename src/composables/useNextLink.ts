import { Article, Chapitre, Parcour } from '@/api';

const findOrder = (order: number) => (item: Article | Chapitre) => item.order === order;

const getNextLink = (parcour: Parcour, chapitre?: Chapitre, article?: Article) => {
  const nextArticle = article
    ? article.chapitre.articles.find(findOrder(article.order + 1))
    : chapitre?.articles[0];

  const nextChapitre = chapitre
    ? chapitre.parcour.chapitres.find(findOrder(chapitre.order + 1))
    : parcour?.chapitres[0];

  if (nextArticle) {
    return `/parcours/${parcour.title_slug}/${chapitre?.title_slug}/${nextArticle.title_slug}`;
  }
  if (nextChapitre) {
    return `/parcours/${parcour.title_slug}/${nextChapitre.title_slug}`;
  }
  return `/parcours/${parcour.title_slug}/conclusion`;
};

/* eslint-disable import/prefer-default-export */
export function useNextLink(parcour: Parcour, chapitre?: Chapitre, article?: Article) {
  const nextLink = getNextLink(parcour, chapitre, article);
  return { nextLink };
}
