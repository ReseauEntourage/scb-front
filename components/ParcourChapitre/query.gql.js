import gql from 'graphql-tag'

export default gql`
  query GetBySlug($whereSlug: JSON) {
    parcours(where: $whereSlug) {
      couleur
      personnage {
        url
      }
      background_mobile {
        url
      }
      background_desktop {
        url
      }
    }
  }
`