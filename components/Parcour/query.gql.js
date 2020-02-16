import gql from 'graphql-tag'

export default gql`
  query GetBySlug($whereSlug: JSON, $whereChapitre: JSON) {
    parcours(where: $whereSlug) {
      id
      couleur
      url_slug
      character_name
      duration
      personnage {
        url
      }
      background_mobile {
        url
      }
      background_desktop {
        url
      }
      entetes(where: $whereChapitre) {
        Titre
        chapitre
        texte_personnage
      }
      quizzes {
        id
      }
    }
  }
`