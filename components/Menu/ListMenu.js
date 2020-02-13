import { useState } from 'react';

import './Menu.scss';

import close from '../../static/images/close.svg';

const fieldSorter = fields => (a, b) =>
  fields
    .map(o => {
      let dir = 1;
      if (o[0] === "-") {
        dir = -1;
        o = o.substring(1);
      }
      return a[o] > b[o] ? dir : a[o] < b[o] ? -dir : 0;
    })
    .reduce((p, n) => (p ? p : n), 0);

const getArrayofLink = data => {
  let newArray = [];
  data.parcours.map((parcour, key) => {
    newArray = parcour.textes
      .concat(parcour.quotes)
      .concat(parcour.videos)
      .concat(parcour.quizzes);
  });
  const arr = [...newArray].sort(fieldSorter(["-chapitre", "ordre"]));

  return arr;
};

const ListMenu = ({ handleCloseMenuIntro, slug, data }) => {
  const [newMap] = useState(getArrayofLink(data));

  const arr = Array.from(newMap);
  return <div className="menu__inside-menu__container">
      <div className="menu__sidebar__top-container">
        <div
          className="menu__sidebar-close-container"
          onClick={handleCloseMenuIntro}
        >
          <img src={close} alt="" className="menu__sidebar-close" />
        </div>
      </div>
      <ul className="menu--intra">
        <h2 className="menu--intra__title"> Comprendre </h2>
        {arr.map((valeur, key) => {
          if (valeur.chapitre === "Comprendre") {
            return (
              <li key={key}>
                <a
                  href={`/parcours/${slug}/${valeur.chapitre.toLowerCase()}/${
                    valeur.ordre
                  }`}
                >
                  <div className="number"> {key + 3} </div>
                  <span className="title"> {valeur.titre}</span>
                </a>
              </li>
            );
          } else return null;
        })}
        <h2 className="menu--intra__title"> Changer de Regard </h2>
        {arr.map((valeur, key) => {
          if (valeur.chapitre === "Changer") {
            return (
              <li key={key}>
                <a
                  href={`/parcours/${slug}/${valeur.chapitre.toLowerCase()}/${
                    valeur.ordre
                  }`}
                >
                  <div className="number"> {key + 3} </div>
                  <span className="title"> {valeur.titre}</span>
                </a>
              </li>
            );
          } else return null;
        })}
        <h2 className="menu--intra__title"> Agir </h2>
        {arr.map((valeur, key) => {
          if (valeur.chapitre === "Agir") {
            return (
              <li key={key}>
                <a
                  href={`/parcours/${slug}/${valeur.chapitre.toLowerCase()}/${
                    valeur.ordre
                  }`}
                >
                  <div className="number"> {key + 3} </div>
                  <span className="title"> {valeur.titre}</span>
                </a>
              </li>
            );
          } else return null;
        })}
      </ul>
  </div>;
}

export default ListMenu;