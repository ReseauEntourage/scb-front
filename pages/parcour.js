import AppShell from '../components/AppShell/AppShell';
import Parcour from '../components/Parcour/Parcour';

function parcour ({ postId }) {
  return <AppShell
    appContent={
      <Parcour id={postId} />
    }
  />;
}

parcour.getInitialProps = ({ query: { id } }) => ({ postId: id });

export default parcour;
