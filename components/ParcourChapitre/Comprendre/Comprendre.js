import EnteteButton from "../../EnteteButton/EnteteButton";
import BackgroundImage from "../../BackgroundImage/BackgroundImage";

import comprendre_img from "../../../static/images/comprendre_landing.png";

const Comprendre = ({ parcour, slug }) => {
  return (
    <div className="Comprendre">
      <BackgroundImage
        mobile_img={parcour.background_mobile.url}
        desktop_img={parcour.background_desktop.url}
      />
      <h2>Partie 1</h2>
      <h1>Comprendre</h1>
      <img src={comprendre_img} alt="chapitre img" />
      <p>Première étape :<br />Comprendre pour agir</p>
      <EnteteButton
        title={"commencer"}
        color={parcour.couleur}
        slug={slug} 
        chapitre="comprendre"
      />
    </div>
  );
};

export default Comprendre;
