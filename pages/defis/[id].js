import { getDefi } from '../../api';
import AppShell from '../../components/AppShell/AppShell';
import Defi from '../../features/defi';
import Menu from '../../components/Menu/Menu';

export default function DefiPage({ defi }) {
  return <AppShell 
    appHeader={
      <Menu slug={null} />
    }
    appContent={
      <Defi defi={defi}/>
    }
  />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params: { id } }) {
  return {
    props: {
      defi: await getDefi(id),
    }
  }
}
