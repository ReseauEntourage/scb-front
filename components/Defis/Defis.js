import './Defis.scss';
import { useQuery } from '@apollo/react-hooks';
import QUERY_GQL from './query.gql';

import DefiCard from './DefiCard/DefiCard';

const renderDefiCards = (defis) => {
  return defis.map((defi, key) =>
    <DefiCard key={key} parcours={defi.parcours} defi={defi} />
  );
}

const Defis = () => {
  const { loading, data } = useQuery(QUERY_GQL);

  if (loading) {
    return <div></div>;
  }

  const defis = data.defis;

  return (
    <div className="Defis">
      <h1 className="Defis-title">Passez à l'action</h1>
      <p className="Defis-description">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>

      <h2 className="Defis-subtitle">Découvrez de nouveaux défis</h2>
      { renderDefiCards(defis) }
    </div>
  );
}

export default Defis;
