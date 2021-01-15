export interface Image {
  url: string;
  provider: string;
}

export interface Character {
  name: string;
  speech: string;
  avatar: Image;
}

export interface Defi {
  id: string;
  title: string;
  content: string;
  parcours: Parcour[];
}

export interface Parcour {
  title: string;
  title_slug: string;
  color: string;
  duration: string;
  background_mobile: Image;
  background_desktop: Image;
  character: Character;
  chapitres: Chapitre[];
  defis: Defi[];
}

export interface Chapitre {
  title: string;
  title_slug: string;
  name: string;
  order: number;
  character: Character;
  articles: Article[];
  parcour: Parcour;
}

export interface Article {
  title: string;
  title_slug: string;
  type: string;
  order: number;
  content: (Texte | Video | Quote | Survey)[];
  chapitre: Chapitre;
}

export interface Texte {
  __typename: string;
  contentd: string;
}
export interface Video {
  __typename: string;
  content: string;
  url: string;
}
export interface Quote {
  __typename: string;
  content: string;
  character: Character;
}
export interface Survey {
  __typename: string;
  question: string;
  explanation: string;
  response: Response;
}

export interface Response {
  content: string;
  isAnswer: string;
}
