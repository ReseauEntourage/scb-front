import './index.scss';

import { Markdown } from 'react-showdown';

import ReactPlayer from 'react-player';

const Video = ({ article }) => {
  const video = article.content[0];
  console.log('Video article', article);
  console.log('Video video', video);

  return (
    <div className="video-container">
      <div className="video-content">
        <div className="video__video-subtitle"><h2>{article.chapitre.title}</h2></div>
        <div className="video__video-name"><h1>{article.titre}</h1></div>
        <div className="video-player-container"><ReactPlayer url={video.url} playing width="100%" height="100%" /></div>

        <div className="video__video-text-container"><Markdown markup={video.content} /></div>
      </div>
    </div>
  );
};

export default Video;
