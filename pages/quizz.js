import AppShell from '../components/AppShell/AppShell';
import Quizz from '../components/Quizz/Quizz';
import Menu from '../components/Menu/Menu';

function quizz({ postId, postNumber }) {
  return <AppShell 
    appHeader={
      <Menu slug={postId} index={'quizz'} />
    }
    appContent={
      <Quizz className="container" slug={postId} number={postNumber} />
    }
  />;
}

quizz.getInitialProps = ({ query: { id, number } }) => ({ postId: id, postNumber: number });

export default quizz;
