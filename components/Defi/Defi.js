import './Defi.scss';
import { useQuery } from '@apollo/react-hooks';
import { GET_DEFI } from '../../graphql/querries';
import { Markdown } from 'react-showdown';
import Link from 'next/link';
import { withRouter } from 'next/router';

import backbtn from '../../static/images/back.svg';

const Defi = ({ id }) => {
  const { loading, data } = useQuery(GET_DEFI, {
    variables: { id },
  });

  if (loading) {
    return <div></div>;
  }

  const defi = data.defi;

  const color = defi.parcours
    .map(parcour => parcour.couleur)
    .pop();

  return (
    <div className="defi-container">
      <div className="defi-header" style={{ background: "#" + color }}>
        <Link href={"/defis/"} as={"/defis"}>
          <a>
            <div className="back-button">
              <img src={backbtn} alt="arrow back" />
            </div>
          </a>
        </Link>
        <div className="defi__subtitle">défi</div>
        <h1 className="defi__title">{defi.titre}</h1>
      </div>

      <div className="defi-mardown">
        <Markdown markup={defi.contenu} />
      </div>
    </div>
  );
};

export default withRouter(Defi);
