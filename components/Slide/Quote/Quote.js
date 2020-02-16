import './Quote.scss';
import { useQuery } from '@apollo/react-hooks';
import { GET_QUOTE_INFO } from '../../../graphql/querries';

import Button from '../../Button/Button';
import SCBCharacter from '../SCBCharacter/SCBCharacter';
import { Markdown } from 'react-showdown';

const Quote = ({
  quote,
  color,
  order,
  slug,
  character,
  characterName,
  items,
  chapitre
}) => {
  const { loading, data } = useQuery(GET_QUOTE_INFO, {
    variables: { slug, order, chapitre }
  });

  if (loading) {
    return <div></div>;
  }

  return <div className="video-container">
    {data.parcours.map((parcour, key) =>
      quote.map((text, key) => (
        <div className="video-content" key={key}>
          <div className="video__video-subtitle">
            <h2> {chapitre} </h2>
          </div>
          <div className="video__video-name">
            <h1> {text.titre} </h1>
          </div>
          <div className="video__video-text-container">
            <Markdown markup={text.paragraphe} />
          </div>
          <SCBCharacter
            image={character}
            characterName={characterName}
            characterTexte={text.character_quote}
            color={color}
            param={"quote"}
          />

          {items.pop().ordre !== order ? (
            <Button
              title={"continuer"}
              link={"/parcours/"}
              order={order}
              color={color}
              slug={slug}
              param={"quote"}
              chapitre={chapitre}
              next={false}
            />
          ) : (
            <Button
              title={"continuer"}
              link={"/parcours/"}
              order={order}
              color={color}
              slug={slug}
              param={"quote"}
              chapitre={chapitre}
              next={true}
            />
          )}
        </div>
      ))
    )}
  </div>;
};

export default Quote;
