import gql from 'graphql-tag'

export default gql`
  query getDefis {
    defis {
      id
      titre
      contenu
      parcours {
        Titre
        couleur
      }
    }
  }
`