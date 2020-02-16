import EnteteButton from "../../EnteteButton/EnteteButton";
import BackgroundImage from "../../BackgroundImage/BackgroundImage";

import changer_img from "../../../static/images/changer_landing.png";

const Changer = ({ parcour, slug }) => {
  return (
    <div className="Changer">
      <BackgroundImage
        mobile_img={parcour.background_mobile.url}
        desktop_img={parcour.background_desktop.url}
      />
      <h2>Partie 2</h2>
      <h1>Changer</h1>
      <img src={changer_img} alt="chapitre img" />
      <p>Deuxième étape :<br />Comprendre que l’on est une partie essentielle de la solution</p>
      <EnteteButton
        title={"commencer"}
        color={parcour.couleur}
        slug={slug} 
        chapitre="changer"
      />
    </div>
  );
};

export default Changer;
