import Explanation from '../components/Quizz/Explanation/Explanation';

const about = ({ postId, postNumber, postValue }) => {
  return <div className='container-fluid'>
    <Explanation
      slug={postId}
      number={postNumber}
      value={postValue}
    />
  </div>;
}

about.getInitialProps = ({ query: { id, number, value } }) => ({ postId: id, postNumber: number, postValue: value });

export default about;
