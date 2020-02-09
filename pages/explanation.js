import { useQuery } from '@apollo/react-hooks';
import { GET_ORDER } from '../graphql/querries';

import Explanation from '../components/Quizz/Explanation/Explanation';

const explanation = ({ postId, postChapitre, postOrder, postValue }) => {
  const { loading, data } = useQuery(GET_ORDER, {
    variables: { id: postId, chapitre: postChapitre }
  });

  if (loading) {
    return <div></div>;
  }

  return <Explanation
    data={data}
    slug={postId}
    order={postOrder}
    chapitre={postChapitre}
    value={postValue}
  />;
}

explanation.getInitialProps = ({ query: { id, chapitre, order, value } }) => ({ 
  postId: id,
  postChapitre: chapitre,
  postOrder: order,
  postValue: value
});

export default explanation;
