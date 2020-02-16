import AppShell from '../components/AppShell/AppShell';
import Footer from '../components/Footer/Footer';
import Landing from '../components/Landing/Landing';
import Menu from '../components/Menu/Menu';

function landing() {
  return <AppShell 
    appHeader={
      <Menu slug={null}/>
    }
    appContent={
      <Landing />
    }
    appFooter={
      <Footer />
    }
  />;
}

export default landing;
