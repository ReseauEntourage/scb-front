import AppShell from '../components/AppShell/AppShell';
import Defi from '../features/defi';
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
