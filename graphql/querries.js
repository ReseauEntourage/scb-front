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

const GET_TEXT = gql`
  query GetCardData {
    parcour(id: "1") {
      textes {
        paragraphe
      }
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

const GET_ORDER = gql`
  query GetOrder($id: String!, $chapitre: String!) {
    parcours(where: { url_slug: $id }) {
      Titre
      couleur
      url_slug
      personnage {
        url
      }
      textes(where: { chapitre: $chapitre }, sort: "ordre:asc") {
        ordre
        paragraphe
        titre
      }
      videos(where: { chapitre: $chapitre }, sort: "ordre:asc") {
        ordre
        titre
        Texte
        url_video
        ordre
      }
      quotes(where: { chapitre: $chapitre }, sort: "ordre:asc") {
        ordre
        titre
        paragraphe
        character_quote
        chapitre
      }
      quizzes(where: { chapitre: $chapitre }, sort: "ordre:asc") {
        id
        ordre
        chapitre
        titre
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

const GET_QUIZZ = gql`
  query GET_QUIZZ($slug: String!, $number: String!) {
    parcours(where: { url_slug: $slug }) {
      Titre
      couleur
      quizzes(where: { ordre: $number }) {
        titre
        chapitre
        reponse_un
        reponse_deux
        reponse_trois
        bonne_reponse
        explication
      }
    }
  }
`

const GET_QUIZZ_EXPLANATION = gql`
  query GET_QUIZZ($slug: String!, $number: String!) {
    parcours(where: { url_slug: $slug }) {
      id
      quizzes(limit: 1, where: { ordre: $number }) {
        explication
      }
    }
  }
`

const GET_CONCLUSION_INFO = gql`
  query GetConclusionInfo($slug: String!) {
    parcours(where: { url_slug: $slug }) {
      couleur
      background_mobile {
        url
      }
      background_desktop {
        url
      }
      defis {
        id
        titre
      }
    }
  }
`

const GET_DEFI = gql`
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

const GET_ALL_DEFIS = gql`
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

export {
  GET_ENTETE_PER_ID,
  GET_ENTETE_PER_SLUG,
  GET_PARCOURS,
  GET_TEXT,
  GET_ORDER,
  GET_MENU_INFO,
  GET_TEXTE_INFO,
  GET_QUOTE_INFO,
  GET_VIDEO_INFO,
  GET_CUSTOM,
  GET_QUIZZ,
  GET_CONCLUSION_INFO,
  COUNT_QUIZZES,
  GET_QUIZZ_EXPLANATION,
  GET_DEFI,
  GET_ALL_DEFIS
}
