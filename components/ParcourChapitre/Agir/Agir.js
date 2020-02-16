import EnteteButton from "../../EnteteButton/EnteteButton";
import BackgroundImage from "../../BackgroundImage/BackgroundImage";

import agir_img from "../../../static/images/agir_chapitre.png";

const Agir = ({ parcour, slug }) => {
  return (
    <div className="Agir">
      <BackgroundImage
        mobile_img={parcour.background_mobile.url}
        desktop_img={parcour.background_desktop.url}
      />
      <h2>Partie 3</h2>
      <h1>Agir</h1>
      <img src={agir_img} alt="chapitre img" />
      <p>Dernière étape :<br />Passer à l’action</p>
      <EnteteButton
        title={"commencer"}
        color={parcour.couleur}
        slug={slug} 
        chapitre="agir"
      />
    </div>
  );
};

export default Agir;
