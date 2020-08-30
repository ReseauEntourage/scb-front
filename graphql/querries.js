import gql from 'graphql-tag'

const GET_ENTETE_PER_ID = gql`
  query AllEntete($id: ID!) {
    parcour(id: $id) {
      couleur
      entete {
        Titre
        duree
        background {
          url
        }
      }
    }
  }
`

const GET_ENTETE_PER_SLUG = gql`
  query GetBySlug($id: String!, $enumeration: String!) {
    parcours(where: { url_slug: $id }) {
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
      entetes(where: { chapitre: $enumeration }) {
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

const GET_PARCOURS = gql`
  query GetCardData {
    parcours(limit: 5) {
      Titre
      couleur
      couleur_2
      card_personnage {
        url
      }
      duration
      url_slug
    }
  }
`

const GET_CUSTOM = gql`
  query GetOrder($id: String!, $order: String!, $chapitre: String!) {
    parcours(where: { url_slug: $id }) {
      Titre
      couleur
      url_slug
      personnage {
        url
      }
      character_name
      textes(where: { ordre: $order, chapitre: $chapitre }) {
        titre
        paragraphe
        ordre
      }
      videos(where: { ordre: $order, chapitre: $chapitre }) {
        titre
        Texte
        url_video
        ordre
      }
      quotes(where: { ordre: $order, chapitre: $chapitre }) {
        titre
        paragraphe
        character_quote
        chapitre
        ordre
      }
      quizzes(where: { ordre: $order, chapitre: $chapitre }) {
        id
        ordre
        titre
        chapitre
      }
    }
  }
`

const GET_MENU_INFO = gql`
  query GetMenuInfo($slug: String!) {
    parcours(where: { url_slug: $slug }) {
      Titre
      url_slug
      textes(sort: "ordre:ASC") {
        id
        ordre
        titre
        chapitre
      }
      videos(sort: "ordre:ASC") {
        id
        titre
        ordre
        chapitre
      }
      quotes(sort: "ordre:ASC") {
        id
        titre
        ordre
        chapitre
      }
      quizzes(sort: "ordre:ASC") {
        id
        ordre
        titre
        chapitre
      }
    }
  }
`

const GET_TEXTE_INFO = gql`
  query GetTexteInfo($slug: String!, $order: String!, $chapitre: String!) {
    parcours(where: { url_slug: $slug }) {
      textes(where: { ordre: $order, chapitre: $chapitre }) {
        ordre
        titre
        paragraphe
      }
    }
  }
`

const GET_QUOTE_INFO = gql`
  query GetTexteInfo($slug: String!, $order: String!, $chapitre: String!) {
    parcours(where: { url_slug: $slug }) {
      quotes(where: { ordre: $order, chapitre: $chapitre }) {
        ordre
        titre
        paragraphe
      }
    }
  }
`

const GET_VIDEO_INFO = gql`
  query GetTexteInfo($slug: String!, $order: String!, $chapitre: String!) {
    parcours(where: { url_slug: $slug }) {
      videos(where: { ordre: $order, chapitre: $chapitre }) {
        ordre
        titre
        Texte
        url_video
      }
    }
  }
`

const COUNT_QUIZZES = gql`
  query COUNT_QUIZZES($id: String!) {
    parcours(where: { url_slug: $id }) {
      url_slug
      quizzes {
        id
      }
    }
  }
`

export {
  GET_ENTETE_PER_ID,
  GET_ENTETE_PER_SLUG,
  GET_PARCOURS,
  GET_MENU_INFO,
  GET_TEXTE_INFO,
  GET_QUOTE_INFO,
  GET_VIDEO_INFO,
  GET_CUSTOM,
  COUNT_QUIZZES,
}
