import './index.scss';
import { getParcours } from '../../services';
import ParcourCard from '../../components/ParcourCard/ParcourCard';

const Parcours = () => {
  const data = getParcours();
  if (!data) { return (<div>...</div>); }

  const parcours = data.map((parcour, key) => <ParcourCard parcour={parcour} key={key} />);
  
  return (
    <div className="parcours">
      <h1>Découvrir les parcours</h1>
      <p>À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.</p>
      <h2>Les parcours</h2>
      <article>{parcours}</article>
    </div>
  )
}

export default Parcours;
