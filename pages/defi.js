import AppShell from '../components/AppShell/AppShell';
import Defi from '../components/Defi/Defi';
import Menu from '../components/Menu/Menu';

function defi({ postId }) {
  return <AppShell 
    appHeader={
      <Menu slug={null} />
    }
    appContent={
      <Defi id={postId}/>
    }
  />;
}

defi.getInitialProps = ({ query: { id } }) => ({ postId: id });

export default defi;
