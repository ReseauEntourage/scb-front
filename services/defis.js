import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_DEFIS = gql`
  query defis {
    defis {
      id
      title
      content
      parcours {title, color}
    }
  }
`;

const GET_DEFI = gql`
  query defi($id: ID!) {
    defi(id: $id) {
      id
      title
      content
      parcours{title, color}
    }
  }
`;

export const getDefis = () => {
  const { data } = useQuery(GET_DEFIS);

  return data && data.defis;
}

export const getDefi = (id) => {
  const { data } = useQuery(GET_DEFI, { variables: { id } });

  return data && data.defi;
}
