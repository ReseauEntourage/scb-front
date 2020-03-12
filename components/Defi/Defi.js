import './Defi.scss';
import { useQuery } from '@apollo/react-hooks';
import QUERY_GQL from './query.gql';

import { Markdown } from 'react-showdown';
import Link from 'next/link';
import { withRouter } from 'next/router';

import backbtn from '../../static/images/back.svg';

const Defi = ({ id }) => {
  const { loading, data } = useQuery(QUERY_GQL, {
    variables: { id },
  });

  if (loading) {
    return <div></div>;
  }

  const defi = data.defi;

  const parcours = defi.parcours;

  const gradientColor = parcours
    .map((parcour, index, items) => ({
      color: `#${parcour.couleur}`,
      start: Math.round(100 * index / items.length),
      end: Math.round(100 * (index+1) / items.length)
    }))
    .map(gradientItem => `${gradientItem.color} ${gradientItem.start}%, ${gradientItem.color} ${gradientItem.end}%`)
    .join(', ');

  return (
    <div className="Defi">
      <div className="Defi-header" style={{ background: `linear-gradient(-45deg, ${gradientColor})` }}>
        <Link href={"/defis/"} as={"/defis"}>
          <a>
            <div className="back-button">
              <img src={backbtn} alt="arrow back" />
            </div>
          </a>
        </Link>
        <div className="Defi-header-subtitle">défi</div>
        <h1 className="Defi-header-title">{defi.titre}</h1>
      </div>

      <div className="Defi-mardown">
        <Markdown markup={defi.contenu} />
      </div>
    </div>
  );
};

export default withRouter(Defi);
