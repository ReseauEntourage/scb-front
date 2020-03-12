import gql from 'graphql-tag'

export default gql`
  query getDefi($id: ID!) {
    defi(id: $id) {
      titre
      contenu
      parcours {
        couleur
      }
    }
  }
`