import './Explanation.scss';
import { useQuery } from '@apollo/react-hooks';
import { GET_QUIZZ } from '../../../graphql/querries';

import Button from '../../Button/Button';
import validate from '../../../static/images/validate.svg';
import refuse from '../../../static/images/refuse.svg';

const dynamicSort = property => {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
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
  });

  const arr = [...newArray].sort(dynamicSort('ordre'));
  return arr;
}

const Explanation = ({ slug, order, chapitre, value }) => {
  const { loading, data } = useQuery(GET_QUIZZ, {
    variables: { slug, order }
  });

  if (loading) {
    return <div></div>;
  }

  let items = getArrayofLink(data);

  return <div>
    {data.parcours.map((parcour, key) =>
      parcour.quizzes.map((quizz, key) => (
        <div
          className='explanation-container'
          style={{ background: '#' + parcour.couleur }}
          key={key}>
          <div className='explanation__status-container'>
            {value == 'true' ? (
              <div>
                <img className='validation-icon' src={validate} alt='bonne reponse svg'/>
                <div className='validation'> Réponse correcte </div>
              </div>
            ) : (
              <div>
                <img className='validation-icon' src={refuse} alt='mauvaise reponse svg'/>
                <div className='validation'> Réponse incorrecte </div>
              </div>
            )}
            <div className='explanation__text'>{quizz.explication}</div>
            {items.pop().ordre !== order ? (
              <Button
                title={'continuer'}
                link={'/parcours/'}
                order={order}
                color={parcour.couleur}
                slug={slug}
                chapitre={chapitre}
                next={false}
              />
            ) : (
              <Button
                title={'continuer'}
                link={'/parcours/'}
                order={order}
                color={parcour.couleur}
                slug={slug}
                chapitre={chapitre}
                next={true}
              />
            )}
          </div>
        </div>
      ))
    )}
  </div>;
}

export default Explanation;
