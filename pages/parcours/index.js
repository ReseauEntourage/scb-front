import { getParcours } from '../../api';
import AppShell from '../../components/AppShell/AppShell';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import Parcours from '../../features/parcours';

export default function ParcoursPage({ parcours }) {
  return <AppShell 
    appHeader={
      <Menu slug={null}/>
    }
    appContent={
      <Parcours parcours={parcours} />
    }
    appFooter={
      <Footer />
    }
  />;
}

// export async function getStaticPaths() {
//   return {
//     parcours: await getParcours(),
//   }
// }

export async function getStaticProps() {
  return {
    props: {
      parcours: await getParcours(),
    }
  }
}
