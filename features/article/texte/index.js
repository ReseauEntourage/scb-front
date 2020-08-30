import './index.scss';
import { Markdown } from 'react-showdown';

const Texte = ({ article }) => {
  const text = article.content.pop();

  return <div className="video-container">
    <div className="video-content">
      <div className="video__video-subtitle"><h2>{article.chapitre.title}</h2></div>
      <div className="video__video-name"><h1>{article.titre}</h1></div>
      <div className="video__video-text-container"><Markdown markup={text.content} /></div>
    </div>
  </div>;
};

export default Texte;
