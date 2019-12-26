import React from "react";
import "./DefiCard.scss";
import { withRouter } from "next/router";

import arrow from "../../static/images/arrow-white.svg";
const DefiCard = ({ parcours, defi }) => {
  let color;
  let titre;
  parcours.map(parcour => {
    color = parcour.couleur;
    titre = parcour.Titre;
  });
  return (
    <a href={`/defi/${defi.id}`}>
      <div className="defi-card-container" style={{ background: "#" + color }}>
        <div className="defi-parcours">{titre} </div>
        <div className="defi__title">{defi.titre} </div>
        <img className="arrow__defi" src={arrow} />
      </div>
    </a>
  );
};

export default withRouter(DefiCard);
