import Explanation from '../Explanation/Explanation';

function About({ postId, postOrder, postValue }) {
  return <Explanation slug={postId} order={postOrder} value={postValue} />;
}

export default About;
