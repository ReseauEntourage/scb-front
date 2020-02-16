import AppShell from '../components/AppShell/AppShell';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Parcours from '../components/Parcours/Parcours';

function parcours() {
  return <AppShell 
    appHeader={
      <Menu slug={null}/>
    }
    appContent={
      <Parcours />
    }
    appFooter={
      <Footer />
    }
  />;
}

export default parcours;
