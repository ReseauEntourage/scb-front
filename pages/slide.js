import AppShell from '../components/AppShell/AppShell';
import Slide from '../components/Slide/Slide';
import Menu from '../components/Menu/Menu';

function slide({ postId, postChapitre, postOrder }) {
  return <AppShell 
    appHeader={
      <Menu slug={postId} />
    }
    appContent={
      <Slide id={postId} order={postOrder} chapitre={postChapitre} />
    }
  />
}

slide.getInitialProps = ({ query: { id, chapitre, order } }) => ({
  postId: id,
  postChapitre: chapitre,
  postOrder: order
});

export default slide;
