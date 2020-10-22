import { fetchAPI } from './_utils';

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
        title_slug,
        articles { order }
        parcour {color, chapitres {order, title_slug}}
      }
    }
  }
`;

export async function getArticle(slug) {
  const data = await fetchAPI(GET_ARTICLE, { variables: { slug } });

  return data && data.articles.pop();
}
