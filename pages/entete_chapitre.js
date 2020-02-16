import AppShell from '../components/AppShell/AppShell';
import EnteteChapitre from '../components/EnteteChapitre/EnteteChapitre';

function entete_chapitre ({ postId, postChapitre }) {
  return <AppShell
    appContent={
      <EnteteChapitre id={postId} enumeration={postChapitre} />
    }
  />;
}

entete_chapitre.getInitialProps = ({ query: { id, chapitre } }) => ({ postId: id, postChapitre: chapitre });

export default entete_chapitre;
