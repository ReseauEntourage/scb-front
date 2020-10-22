import { getParcour } from '../../api';
import AppShell from '../../components/AppShell/AppShell';
import Parcour from '../../features/parcour';

export default function ParcourPage({ parcour }) {
  return <AppShell
    appContent={
      <Parcour parcour={parcour} />
    }
  />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps(request) {
  const params = request.params || {};
  const slug = params.slug || '';  
  const parcour = await getParcour(slug);

  return { props: { parcour } };
}
