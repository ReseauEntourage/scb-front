import './index.scss';
import { getDefis } from '../../services';
import DefiCard from '../../components/DefiCard/DefiCard';

const Defis = () => {
  const data = getDefis();
  if (!data) { return (<div>...</div>); }

  const defis = data.map((defi, key) => <DefiCard key={key} defi={defi} />);

  return (
    <div className="defis">
      <h1>Passez à l'action</h1>
      <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>

      <h2>Découvrez de nouveaux défis</h2>
      { defis }
    </div>
  );
}

export default Defis;
