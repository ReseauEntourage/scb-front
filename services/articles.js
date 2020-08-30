import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_ARTICLE = gql`
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

export const getArticle = (slug) => {
  const { data } = useQuery(GET_ARTICLE, { variables: { slug } });

  console.log(data);
  return data && data.articles.pop();
}
