import { getChapitre, getParcour } from '../../../api';
import AppShell from '../../../components/AppShell/AppShell';
import Chapitre from '../../../features/chapitre';
import Conclusion from '../../../features/conclusion';
import Menu from '../../../components/Menu/Menu';

export default function ChapitrePage ({ chapitre, parcour, slug }) {
  if (parcour) {
    return <AppShell 
      appHeader={
        <Menu slug={slug} index={'conclusion'} />
      } 
      appContent={
        <Conclusion parcour={parcour}/>
      }
    />;
  }

  console.log('ChapitrePage', chapitre);
  return <AppShell 
    appContent={
      <Chapitre slug={slug} chapitre={chapitre} />
    }
  />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params: { chapitreSlug, slug } }) {
  if (slug === 'conclusion') {
    return {
      props: {
        parcour: await getParcour(slug),
        slug,
      }
    }
  }

  const chapitre = await getChapitre(chapitreSlug);
  console.log('getStaticProps chapitre', chapitre);
  return { props: { chapitre, slug } };
}
