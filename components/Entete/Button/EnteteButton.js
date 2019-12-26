import React from "react";

import "./EnteteButton.scss";

const EnteteButton = ({ title, color, slug, chapitre }) => {
  if (chapitre === "Intro") {
    title = 'Commencer';
    href = `/parcours/${slug}/comprendre/0`;
  } else if (chapitre === "quizz") {
    href = `/parcours/${slug}/${chapitre}/0`;
  } else {
    href = `/parcours/${slug}/${chapitre}/1`;
  }

  return (
    <div className="btn-entete__container">
      <a href={href}>
        <div className="entete__button-container">
          <span className="entete__button-title" style={{ color: "#" + color }}>{title}</span>
        </div>
      </a>
    </div>
  );
};

export default EnteteButton;
