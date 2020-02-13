import { useQuery } from '@apollo/react-hooks';
import { GET_TEXT } from '../graphql/querries';

const subStringData = (text) => {
  if (text.paragraphe.includes("\n")) {
    const res = text.paragraphe.split("\n");

    return res;
  }
  return text;
};

const Text = () => {
  const { loading, data } = useQuery(GET_TEXT);

  if (loading) {
    return <div></div>;
  }

  const paragraphes = data.parcour.textes
    .map(text => subStringData(text))
    .map(paragraphe => <p className="tex"> {paragraphe} </p>);

  return <div className="texxt">{paragraphes}</div>;
}

export default Text;
