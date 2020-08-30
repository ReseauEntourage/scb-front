import './index.scss';

import { Markdown } from 'react-showdown';

const Quote = ({ article }) => {
  const quote = article.content.pop();
  const color = `#${article.chapitre.parcour.color}`;
  const character = quote.character && <Character character={quote.character} color={color} />;

  return <div className="video-container">
    <div className="video-content">
      <div className="video__video-subtitle"><h2>{article.chapitre.title}</h2></div>
      <div className="video__video-name"><h1>{article.title}</h1></div>
      <div className="video__video-text-container"><Markdown markup={quote.content} /></div>
      { character }
    </div>
  </div>;
};

export default Quote;
