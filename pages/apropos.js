import AppShell from '../components/AppShell/AppShell';
import APropos from '../components/APropos/APropos';
import Menu from '../components/Menu/Menu';

function apropos() {
  return <AppShell
    appHeader={
      <Menu slug={null} />
    }
    appContent={
      <APropos />
    }
  />
}

export default apropos;
