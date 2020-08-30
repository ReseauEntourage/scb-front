import "./DefiCard.scss";
import { withRouter } from "next/router";

import arrow from "../../static/images/arrow-white.svg";
const DefiCard = ({ defi }) => {
  const parcours = defi.parcours;
  const titles = parcours.map(parcour => parcour.title).join(' — ');

  const gradientColor = parcours
    .map((parcour, index, items) => ({
      color: `#${parcour.color}`,
      start: Math.round(100 * index / items.length),
      end: Math.round(100 * (index+1) / items.length)
    }))
    .map(gradientItem => `${gradientItem.color} ${gradientItem.start}%, ${gradientItem.color} ${gradientItem.end}%`)
    .join(', ');

  return (
    <a className="DefiCard" href={`/defi/${defi.id}`}>
      <div className="DefiCard-container" style={{ background: `linear-gradient(-45deg, ${gradientColor})` }}>
        <div className="DefiCard-container-parcours">{titles}</div>
        <div className="DefiCard-container-title">{defi.title}</div>
        <img className="DefiCard-container-arrow" src={arrow} />
      </div>
    </a>
  );
};

export default withRouter(DefiCard);

