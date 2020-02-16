import AppShell from '../components/AppShell/AppShell';
import ParcourChapitre from '../components/ParcourChapitre/ParcourChapitre';

function parcourChapitre ({ slug, chapitre }) {
  return <AppShell
    appContent={
      <ParcourChapitre slug={slug} enumeration={chapitre} />
    }
  />;
}

parcourChapitre.getInitialProps = ({ query: { slug, chapitre } }) => ({ slug, chapitre });

export default parcourChapitre;
