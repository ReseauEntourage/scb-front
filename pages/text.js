import AppShell from '../components/AppShell/AppShell';
import Text from '../components/Text/Text';
import Menu from '../components/Menu/Menu';

function text() {
  return <AppShell 
    appHeader={
      <Menu />
    }
    appContent={
      <Text />
    }
  />;
}

export default text;
