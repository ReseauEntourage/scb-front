import { Parcour } from './model';
import fetchAPI from './_utils';

const GET_PARCOURS = `
  query parcours {
    parcours {
      title
      title_slug
      description
      color
      duration
      character {name, speech, avatar {url, provider}}
    }
  }
`;

const GET_PARCOUR = `
  query parcour ($slug: String!) {
    parcours (where: { title_slug: $slug }) {
      title
      title_slug
      description
      color
      duration
      background_mobile {url, provider}
      background_desktop {url, provider}
      character {name, speech, avatar {url, provider}}
      chapitres (sort: "order:ASC") {order, title_slug}
      defis {
        id,
        title,
        parcours {title, color}
      }
    }
  }
`;

/* eslint-disable import/prefer-default-export */
export async function getParcours(): Promise<Parcour[]> {
  const data = await fetchAPI(GET_PARCOURS);

  return data && data.parcours;
}

export async function getParcour(slug: string): Promise<Parcour> {
  const data = await fetchAPI(GET_PARCOUR, { variables: { slug } });

  return data && data.parcours.pop();
}
