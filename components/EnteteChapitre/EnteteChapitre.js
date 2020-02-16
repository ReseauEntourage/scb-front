import "./EnteteChapitre.scss";
import { useState, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_ENTETE_PER_SLUG } from "../../graphql/querries";
import EnteteButton from "../EnteteButton/EnteteButton";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

import comprendre_img from "../../static/images/comprendre_landing.png";
import changer_img from "../../static/images/changer_landing.png";
import agir_img from "../../static/images/agir_chapitre.png";

const renderParcourBackgroundImage = parcour => {
  return parcour.background_mobile && parcour.background_desktop
    ? <BackgroundImage mobile_img={parcour.background_mobile.url} desktop_img={parcour.background_desktop.url} />
    : "";
}

const renderComprendreEntete = width => {
  return (
    <div className="entete__chapitre-container-data">
      <h2 className="entete__chapitre-h2" style={{ textTransform: "uppercase" }}>Partie 1</h2>
      <h1 className="entete__chapitre-h1">Comprendre</h1>
      <img
        src={comprendre_img}
        alt="chapitre img"
        style={ width > 992 ? { width: "230px", height: "auto" } : { width: "120px", height: "auto" } }
        className="entete__chapitre--image"
      />
      <div className="entete__chapitre--text-container">
        <p className="entete__chapitre--text">Première étape : Comprendre pour agir</p>
      </div>
    </div>
  );
}

const renderChangerEntete = width => {
  return (
    <div className="entete__chapitre-container-data">
      <h2 className="entete__chapitre-h2" style={{ textTransform: "uppercase" }}>Partie 2</h2>
      <h1 className="entete__chapitre-h1" style={{ textTransform: "capitalize" }}>Changer</h1>
      <img
        src={changer_img}
        alt="chapitre img"
        style={ width > 992 ? { width: "230px", height: "auto" } : { width: "120px", height: "auto" } }
        className="entete__chapitre--image"
      />
      <div className="entete__chapitre--text-container">
        <p className="entete__chapitre--text">Comprendre que l’on est une partie essentielle de la solution</p>
      </div>
    </div>
  );
}

const renderAgirEntete = width => {
  return (
    <div className="entete__chapitre-container-data">
      <h2 className="entete__chapitre-h2" style={{ textTransform: "uppercase" }}>Partie 3</h2>
      <h1 className="entete__chapitre-h1" style={{ textTransform: "capitalize" }}>Agir</h1>
      <img
        src={agir_img}
        alt="chapitre img"
        style={ width > 992 ? { width: "auto", height: "260px" } : { width: "auto", height: "150px" } }
        className="entete__chapitre--image"
      />
      <div className="entete__chapitre--text-container">
        <p className="entete__chapitre--text">Passer à l’action</p>
      </div>
    </div>
  );
}

const EnteteChapitre = ({ id, enumeration }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }
  }, [])

  const { loading, data } = useQuery(GET_ENTETE_PER_SLUG, {
    variables: { id, enumeration }
  });

  if (loading) {
    return <div></div>;
  }

  const parcours = data.parcours.map((parcour, key) => 
    <div className="chapitre-container" key={key}>
      { renderParcourBackgroundImage(parcour) }
      <div className="entete__chapitre-container-data">
        {enumeration === "comprendre" ? renderComprendreEntete(width) : ""}
        {enumeration === "changer" ? renderChangerEntete(width) : ""}
        {enumeration === "agir" ? renderAgirEntete(width) : ""}
      </div>
      <EnteteButton title={"commencer"} color={parcour.couleur} slug={id} chapitre={enumeration} />
    </div>
  );

  return <div className="entete__chapitre-global-container">{parcours}</div>;
};

export default EnteteChapitre;
