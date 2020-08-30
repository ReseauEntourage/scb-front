import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_CHAPITRE = gql`
  query chapitre ($slug: String!) {
    chapitres (where: { title_slug: $slug }) {
      title
      title_slug
      name
      order
      character {name, speech, avatar {url, provider}}
      articles (sort: "order:ASC") {order, title_slug}
      parcour {color, background_mobile {url, provider}, background_desktop {url, provider}}
    }
  }
`;

export const getChapitre = (slug) => {
  const { data } = useQuery(GET_CHAPITRE, { variables: { slug } });

  return data && data.chapitres.pop();
}
