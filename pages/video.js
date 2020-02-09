/* /pages/index.js */
import Entete from '../components/Entete/Entete';

const video = ({ postId }) => {
  return <div className="container-fluid">
    <Entete id={postId}></Entete>
  </div>
}

video.getInitialProps = ({ query: { id } }) => ({ postId: id });

export default video;
