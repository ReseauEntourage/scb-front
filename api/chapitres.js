import { fetchAPI } from './_utils';

const GET_CHAPITRE = `
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

export async function getChapitre(slug) {
  const data = await fetchAPI(GET_CHAPITRE, { variables: { slug } });

  return data && data.chapitres.pop();
}
