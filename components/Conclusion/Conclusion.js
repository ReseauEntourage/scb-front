import './Conclusion.scss';

import { useQuery } from '@apollo/react-hooks';
import { GET_CONCLUSION_INFO } from '../../graphql/querries';
import Link from 'next/link';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

import ShareButton from './ShareButton/ShareButton';

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const chooseOneChallenge = data => {
  let choosenOne;
  if (data.parcours) {
    for (const parcour of data.parcours) {
      let index = getRandomInt(parcour.defis.length);
      for (let i in parcour.defis) {
        if (i == index) {
          choosenOne = parcour.defis[i];
        }
      }
    }
  }
  return choosenOne;
};
const Conclusion = ({ slug }) => {
  const { loading, data } = useQuery(GET_CONCLUSION_INFO, {
    variables: { slug }
  });

  if (loading) {
    return <div></div>;
  }

  let defi = chooseOneChallenge(data);

  return (
    <div>
      {data.parcours.map((parcour, key) => (
        <div className="conclusion-container" key={key}>
          <div className="conclusion__defis-container">
            <h2 className="defis-container--title_h2">Votre Défis :</h2>
            <h1 className="defis-container--title_h1">{defi.titre}</h1>
            <Link href={`/defi/?id=${defi.id}`} as={`/defi/${defi.id}`}>
              <a>
                <div className="defi__button--container">
                  <span className="button--text" style={{ color: "#" + parcour.couleur }}>passer à l'action</span>
                </div>
              </a>
            </Link>
          </div>
          {parcour.background_mobile ? (
            <BackgroundImage
              img={parcour.background_mobile.url}
              desktop_img={parcour.background_desktop.url}
            />
          ) : (
            ""
          )}
          <ShareButton color={parcour.couleur} />
        </div>
      ))}
    </div>
  );
};

export default Conclusion;
