import AppShell from '../components/AppShell/AppShell';
import APropos from '../features/a-propos';
import Menu from '../components/Menu/Menu';

function Main() {
  return <AppShell
    appHeader={
      <Menu slug={null} />
    }
    appContent={
      <APropos />
    }
  />;
}

export default Main;
