import { Defi } from './model';
import fetchAPI from './_utils';

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

/* eslint-disable import/prefer-default-export */
export async function getDefis(): Promise<Defi[]> {
  const data = await fetchAPI(GET_DEFIS);

  return data && data.defis;
}

export async function getDefi(id: string): Promise<Defi> {
  const data = await fetchAPI(GET_DEFI, { variables: { id } });

  return data && data.defi;
}
