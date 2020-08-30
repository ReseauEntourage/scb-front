import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_PARCOURS = gql`
  query parcours {
    parcours {
      title
      title_slug
      color
      duration
      character {name, speech, avatar {url, provider}}
    }
  }
`;

const GET_PARCOUR = gql`
  query parcour ($slug: String!) {
    parcours (where: { title_slug: $slug }) {
      title
      title_slug
      color
      duration
      background_mobile {url, provider}
      background_desktop {url, provider}
      character {name, speech, avatar {url, provider}}
      chapitres (sort: "order:ASC") {order, title_slug}
      defis { id, title, parcours {title} }
    }
  }
`;

export function getParcours() {
  const { data } = useQuery(GET_PARCOURS);

  return data && data.parcours;
}

export const getParcour = (slug) => {
  const { data } = useQuery(GET_PARCOUR, { variables: { slug } });

  return data && data.parcours.pop();
}
