import './Defis.scss';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_DEFIS } from '../../graphql/querries';

import DefiCard from '../Defi/DefiCard';
import Footer from '../Footer/Footer';

const Defis = () => {
  const { loading, data } = useQuery(GET_ALL_DEFIS);

  if (loading) {
    return <div></div>;
  }

  const defis = data.defis.map((defi, key) =>
    <DefiCard key={key} parcours={defi.parcours} defi={defi} />
  );

  return (
    <div className="defis-container">
      <div className="defis-container__defis-list">
        <h1 className="defis-container-title_1">Passez à l'action</h1>
        <div className="defis-container-text">
          <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
        </div>
        <h2 className="defis-container-title_h2">Découvrez de nouveaux défis</h2>
        {defis}
      </div>
      <Footer />
    </div>
  );
}

export default Defis;
