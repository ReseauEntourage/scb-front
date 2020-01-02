import React from "react";
import "./QuizzButton.scss";

const QuizzButton = ({
  title,
  slug,
  color,
  active_value,
  bonne_reponse,
  number,
  chapitre
}) => {
  return (
    <div className="quizz-quizz__container">
      {active_value === bonne_reponse ? (
        <a
          href={`/parcours/${slug}/${chapitre.toLowerCase()}/${number}/reponse/${true}`}
        >
          <div
            className="quizz__button-container"
            style={{ background: "#" + color }}
          >
            <span className="quizz__button-title">{title}</span>
          </div>
        </a>
      ) : (
        <a
          href={`/parcours/${slug}/${chapitre.toLowerCase()}/${number}/reponse/${false}`}
        >
          <div
            className="quizz__button-container"
            style={{ background: "#" + color }}
          >
            <span className="quizz__button-title">{title}</span>
          </div>
        </a>
      )}
    </div>
  );
};

export default QuizzButton;
