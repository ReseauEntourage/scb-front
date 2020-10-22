import { getParcours } from '../api';
import AppShell from '../components/AppShell/AppShell';
import Footer from '../components/Footer/Footer';
import Landing from '../features/landing';
import Menu from '../components/Menu/Menu';

export default function LandingPage({ parcours }) {
  return <AppShell 
    appHeader={
      <Menu slug={null}/>
    }
    appContent={
      <Landing parcours={parcours} />
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
