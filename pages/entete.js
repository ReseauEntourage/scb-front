import Entete from '../components/Entete/Entete';

const entete = ({ postId, postChapitre }) => {
  return <div className="container-fluid">
    <Entete id={postId} enumeration={postChapitre}></Entete>
  </div>
}

entete.getInitialProps = ({ query: { id, chapitre } }) => ({ postId: id, postChapitre: chapitre });

export default entete;
