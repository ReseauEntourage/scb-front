import './Quote.scss';
import React from 'react';

import Button from '../Button/Button';
import SCBCharacter from '../SCBCharacter/SCBCharacter';
import { Markdown } from 'react-showdown';

import { Query } from 'react-apollo';
import { GET_QUOTE_INFO } from '../../graphql/querries';

const subStringData = text => {
  const res = text.split('\n');
  return res;
};
const Quote = ({
  quote,
  color,
  order,
  slug,
  character,
  character_name,
  items,
  chapitre
}) => {
  let paragraphes = [];

  quote.map(text => {
    paragraphes = subStringData(text.paragraphe);
  });
  return (
    <Query query={GET_QUOTE_INFO} variables={{ slug, order, chapitre }}>
      {({ loading, error, data }) => {
        if (loading) return <div></div>;
        return (
          <div className="video-container">
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
                    character_name={character_name}
                    character_texte={text.character_quote}
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
          </div>
        );
      }}
    </Query>
  );
};

export default Quote;
