import EnteteChapitre from '../components/EnteteChapitre/EnteteChapitre';

const entete_chapitre = ({ postId, postChapitre }) => {
  return <div className="container-fluid">
    <EnteteChapitre id={postId} enumeration={postChapitre}></EnteteChapitre>
  </div>
}

entete_chapitre.getInitialProps = ({ query: { id, chapitre } }) => ({ postId: id, postChapitre: chapitre });

export default entete_chapitre;
