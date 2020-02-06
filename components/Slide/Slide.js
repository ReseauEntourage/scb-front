
import { useQuery } from '@apollo/react-hooks';
import { GET_CUSTOM, GET_ORDER } from '../../graphql/querries';
import Video from '../Video/Video';
import Texte from '../Texte/Texte';
import Quote from '../Quote/Quote';
import Quizz from '../Quizz/Quizz';

const dynamicSort = property => {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  }
}

const getArrayofLink = data => {
  let newArray = [];

  data.parcours.map(parcour => {
    newArray = parcour.textes
      .concat(parcour.quotes)
      .concat(parcour.videos)
      .concat(parcour.quizzes);
  })

  const arr = [...newArray].sort(dynamicSort('ordre'));
  return arr;
}

const Slide = ({ id, order, chapitre }) => {
  const { loading: orderLoading, data: orderData } = useQuery(GET_ORDER, {
    variables: { id, chapitre }
  });

  if (orderLoading) {
    return <div></div>;
  }

  const items = getArrayofLink(orderData);
  
  const { loading, data } = useQuery(GET_CUSTOM, {
    variables: { id, order, chapitre }
  });

  if (loading) {
    return <div></div>;
  }

  return (
    <div>
      {data.parcours.map((parcour, key) => (
        <div key={key}>
          {parcour.textes.length !== 0 ? (
            <Texte
              texte={parcour.textes}
              color={parcour.couleur}
              order={order}
              slug={parcour.url_slug}
              key={key}
              items={items}
              chapitre={chapitre}
            />
          ) : parcour.videos.length !== 0 ? (
            <Video
              video={parcour.videos}
              color={parcour.couleur}
              order={order}
              slug={parcour.url_slug}
              key={key}
              items={items}
              chapitre={chapitre}
            />
          ) : parcour.quotes.length !== 0 ? (
            <Quote
              quote={parcour.quotes}
              color={parcour.couleur}
              order={order}
              slug={parcour.url_slug}
              key={key}
              character={parcour.personnage.url}
              character_name={parcour.character_name}
              items={items}
              chapitre={chapitre}
            />
          ) : parcour.quizzes.length !== 0 ? (
            <Quizz slug={parcour.url_slug} number={'5'} items={items} />
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default Slide;
