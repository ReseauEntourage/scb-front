import Explanation from '../components/Quizz/Explanation/Explanation';

const explanation = ({ postId, postChapitre, postOrder, postValue }) => {
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
