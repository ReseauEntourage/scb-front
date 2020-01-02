import React from "react";
import EnteteButton from "../Entete/Button/EnteteButton";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import "./EnteteChapitre.scss";

import comprendre_img from "../../static/images/comprendre_landing.png";
import changer_img from "../../static/images/changer_landing.png";
import agir_img from "../../static/images/agir_chapitre.png";

import { Query } from "react-apollo";
import { GET_ENTETE_PER_SLUG } from "../../graphql/querries";

class EnteteChapitre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  renderComprendreEntete() {
    return (
      <div className="entete__chapitre-container-data">
        <h2
          className="entete__chapitre-h2"
          style={{ textTransform: "uppercase" }}
        >
          Partie 1
        </h2>
        <h1 className="entete__chapitre-h1">Comprendre</h1>
        <img
          src={comprendre_img}
          alt="chapitre img"
          style={
            this.state.width > 992
              ? { width: "230px", height: "auto" }
              : { width: "120px", height: "auto" }
          }
          className="entete__chapitre--image"
        />
        <div className="entete__chapitre--text-container">
          <p className="entete__chapitre--text">
            Première étape : Comprendre pour agir
          </p>
        </div>
      </div>
    );
  }
  renderChangerEntete() {
    return (
      <div className="entete__chapitre-container-data">
        <h2
          className="entete__chapitre-h2"
          style={{ textTransform: "uppercase" }}
        >
          Partie 2
        </h2>
        <h1
          className="entete__chapitre-h1"
          style={{ textTransform: "capitalize" }}
        >
          Changer
        </h1>
        <img
          src={changer_img}
          alt="chapitre img"
          style={
            this.state.width > 992
              ? { width: "230px", height: "auto" }
              : { width: "120px", height: "auto" }
          }
          className="entete__chapitre--image"
        />
        <div className="entete__chapitre--text-container">
          <p className="entete__chapitre--text">
            Comprendre que l’on est une partie essentielle de la solution
          </p>
        </div>
      </div>
    );
  }
  renderAgirEntete() {
    return (
      <div className="entete__chapitre-container-data">
        <h2
          className="entete__chapitre-h2"
          style={{ textTransform: "uppercase" }}
        >
          Partie 3
        </h2>
        <h1
          className="entete__chapitre-h1"
          style={{ textTransform: "capitalize" }}
        >
          Agir
        </h1>
        <img
          src={agir_img}
          alt="chapitre img"
          style={
            this.state.width > 992
              ? { width: "auto", height: "260px" }
              : { width: "auto", height: "150px" }
          }
          className="entete__chapitre--image"
        />
        <div className="entete__chapitre--text-container">
          <p className="entete__chapitre--text"> Passer à l’action</p>
        </div>
      </div>
    );
  }

  render() {
    const { id, enumeration, isDesktop } = this.props;
    return (
      <Query query={GET_ENTETE_PER_SLUG} variables={{ id, enumeration }}>
        {({ loading, error, data }) => {
          if (error) return <Error></Error>;
          if (loading) return <div>Loading</div>;
          return (
            <div className="entete__chapitre-global-container">
              {data.parcours.map((parcour, key) => (
                <div className="chapitre-container" key={key}>
                  {parcour.background_mobile && parcour.background_desktop ? (
                    <BackgroundImage
                      img={parcour.background_mobile.url}
                      desktop_img={parcour.background_desktop.url}
                    />
                  ) : (
                    ""
                  )}
                  {/* <div className="back-button" onClick={() => Router.back()} >
                                        <img src={backbtn} alt="arrow back" />
                                    </div> */}
                  <div className="entete__chapitre-container-data">
                    {enumeration === "comprendre"
                      ? this.renderComprendreEntete()
                      : ""}
                    {enumeration === "changer"
                      ? this.renderChangerEntete()
                      : ""}
                    {enumeration === "agir" ? this.renderAgirEntete() : ""}
                  </div>
                  <EnteteButton
                    title={"commencer"}
                    color={parcour.couleur}
                    slug={id}
                    chapitre={enumeration}
                  ></EnteteButton>
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default EnteteChapitre;
