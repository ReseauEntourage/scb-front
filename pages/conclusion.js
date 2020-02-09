import AppShell from '../components/AppShell/AppShell';
import Conclusion from '../components/Conclusion/Conclusion';
import Menu from '../components/Menu/Menu';

function conclusion({ postId }) {
  return <AppShell 
    appHeader={
      <Menu slug={postId} index={"conclusion"} />
    }
    appContent={
      <Conclusion slug={postId}/>
    }
  />
}

conclusion.getInitialProps = ({ query: { id } }) => ({ postId: id });

export default conclusion;
