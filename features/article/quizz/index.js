import './index.scss';
import ResponseCard from '../../../components/ResponseCard/ResponseCard';

const Quizz = ({ article }) => {
  const quizz = article.content.pop();

  const responses = quizz.response.map((response, key) => <ResponseCard response={response} key={key} />);

  return (
    <div className='quizz'>
      <h2>{article.chapitre.title}</h2>
      <h1>{quizz.question}</h1>
      <div className='quizz__quizz-reponses'>{responses}</div>
    </div>
  );
}

export default Quizz
