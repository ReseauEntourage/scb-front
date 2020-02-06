import AppShell from '../components/AppShell/AppShell';
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
  />
}

export default parcours;
