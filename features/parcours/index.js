import './index.scss';
import ParcourCard from '../../components/ParcourCard/ParcourCard';

const Parcours = ({ parcours }) => {
  const parcourCards = parcours.map((parcour, key) => <ParcourCard parcour={parcour} key={key} />);
  
  return (
    <div className="parcours">
      <h1>Découvrir les parcours</h1>
      <p>À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.</p>
      <h2>Les parcours</h2>
      <article>{parcourCards}</article>
    </div>
  )
}

export default Parcours;
