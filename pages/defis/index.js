import { getDefis } from '../../api';
import AppShell from '../../components/AppShell/AppShell';
import Defis from '../../features/defis';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';

export default function DefisPage({ defis }) {
  return <AppShell 
    appHeader={
      <Menu slug={null} />
    }
    appContent={
      <Defis defis={defis} />
    }
    appFooter={
      <Footer />
    }
  />;
}

// export async function getStaticPaths() {
//   return {
//     defis: await getDefis(),
//   }
// }

export async function getStaticProps() {
  return {
    props: {
      defis: await getDefis(),
    }
  }
}
