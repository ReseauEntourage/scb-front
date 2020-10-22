import { fetchAPI } from './_utils';

const GET_DEFIS = `
  query defis {
    defis {
      id
      title
      content
      parcours {title, color}
    }
  }
`;

const GET_DEFI = `
  query defi($id: ID!) {
    defi(id: $id) {
      id
      title
      content
      parcours{title, color}
    }
  }
`;

export async function getDefis() {
  const data = await fetchAPI(GET_DEFIS);

  return data && data.defis;
}

export async function getDefi(id) {
  const data = await fetchAPI(GET_DEFI, { variables: { id } });

  return data && data.defi;
}
