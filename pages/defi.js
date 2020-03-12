import AppShell from '../components/AppShell/AppShell';
import Defi from '../components/Defi/Defi';
import Menu from '../components/Menu/Menu';

function defi({ id }) {
  return <AppShell 
    appHeader={
      <Menu slug={null} />
    }
    appContent={
      <Defi id={id}/>
    }
  />;
}

defi.getInitialProps = ({ query: { id } }) => ({ id });

export default defi;
