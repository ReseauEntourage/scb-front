import AppShell from '../components/AppShell/AppShell';
import APropos from '../features/a-propos';
import Menu from '../components/Menu/Menu';

function Main() {
  const menu = <Menu slug={null} />;
  const apropos = <APropos />;
  return <AppShell appHeader={menu} appContent={apropos} />;
}

export default Main;
