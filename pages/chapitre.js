import AppShell from '../components/AppShell/AppShell';
import Chapitre from '../features/chapitre';

function parcourChapitre ({ slug, chapitreSlug }) {
  const chapitre = <Chapitre slug={slug} chapitreSlug={chapitreSlug} />;
  return <AppShell appContent={chapitre} />;
}

parcourChapitre.getInitialProps = ({ query: { slug, chapitreSlug } }) => ({ slug, chapitreSlug });

export default parcourChapitre;
