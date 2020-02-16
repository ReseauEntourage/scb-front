import './Parcours.scss';

import Cards from '../Cards/Cards';

const Parcours = () => {
  return (
    <div className="parcours-container">
      <div className='parcours-container__defis-list'>
        <h1 className='parcours-container-title_1'>Découvrir les parcours</h1>
        <div className='parcours-container-text'>
          <p>À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.</p>
        </div>
        <h2 className='parcours-container-title_h2'> Les parcours</h2>
        <Cards />
      </div>
    </div>
  )
}

export default Parcours;
