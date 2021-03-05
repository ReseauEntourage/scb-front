import { Article } from './model';
import fetchAPI from './_utils';

const GET_ARTICLE = `
  query article ($slug: String!) {
    articles (where: { title_slug: $slug }) {
      title
      title_slug
      type
      order
      content {
        __typename
        ... on ComponentContentsText {contentd: content}
        ... on ComponentContentsVideo {content, url}
        ... on ComponentContentsQuote {content, character {name, speech, avatar {url, provider}}}
        ... on ComponentContentsSurvey {question, explanation, response {content, isAnswer}}
      }
      chapitre {
        order,
        title
        title_slug,
        articles { title_slug, order }
        parcour {
          title_slug
          color,
          chapitres {order, title_slug}
          background_mobile {url, provider}
          background_desktop {url, provider}
        }
      }
    }
  }
`;

/* eslint-disable import/prefer-default-export */
export async function getArticle(slug: string): Promise<Article> {
  const data = await fetchAPI(GET_ARTICLE, { variables: { slug } });

  return data && data.articles.pop();
}
