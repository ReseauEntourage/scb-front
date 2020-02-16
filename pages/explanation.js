import AppShell from '../components/AppShell/AppShell';
import Explanation from '../components/Explanation/Explanation';

function explanation ({ postId, postChapitre, postOrder, postValue }) {
  return <AppShell
    appContent={
      <Explanation
        slug={postId}
        order={postOrder}
        chapitre={postChapitre}
        value={postValue}
      />
    }
  />;
}

explanation.getInitialProps = ({ query: { id, chapitre, order, value } }) => ({ 
  postId: id,
  postChapitre: chapitre,
  postOrder: order,
  postValue: value
});

export default explanation;
