import './ParcourCard.scss';
import Link from 'next/link';
import Morph from '../Morph/Morph';

const ParcourCard = ({ parcour }) => {
  const backgroundColor = `#${parcour.color}`;
  const href = `/parcours/${parcour.title_slug}`;

  const character = parcour.character && 
    <div className="card__img">
      <img src={`http://localhost:1337${parcour.character.avatar.url}`} alt="character" />
    </div>;

  return (
    <Link href={href}>
      <div className="card-container" style={{ backgroundColor }}>
        <div className="card__data-container">
          <h2 className="card__title-container">{parcour.title}</h2>
          <div className="card__time-container">
            <img
              className="svg-clock"
              src="../../static/images/clock.svg"
              alt="clock img"
            />
            <span className="time-text">{parcour.duration} MIN</span>
          </div>
        </div>
        { character }
        <Morph color={'fff'} />
      </div>
    </Link>
  );
}

export default ParcourCard;
