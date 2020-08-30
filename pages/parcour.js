import AppShell from '../components/AppShell/AppShell';
import Parcour from '../features/parcour';

function parcour ({ slug }) {
  return <AppShell
    appContent={
      <Parcour slug={slug} />
    }
  />;
}

parcour.getInitialProps = ({ query: { slug } }) => ({ slug });

export default parcour;
