import React from 'react'
import EnteteButton from './../Entete/Button/EnteteButton'
import BackgroundImage from './../BackgroundImage/BackgroundImage'
import './EnteteChapitre.scss'

import comprendre_img from './../../static/images/comprendre_landing.png'
import changer_img from './../../static/images/changer_landing.png'
import agir_img from './../../static/images/agir_chapitre.png'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_ENTETE_PER_ID, GET_ENTETE_PER_SLUG } from '../../graphql/querries'

class EnteteChapitre extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render () {
    const {id, enumeration, isDesktop} = this.props
    return (
        <Query query={ GET_ENTETE_PER_SLUG  } variables={ { id, enumeration } }>
            {({ loading, error, data }) => {
                if (error) return <Error></Error>
                if (loading) return <div>Loading</div>
                return (
                    <div className="entete__chapitre-global-container">     
                        {
                            data.parcours.map(( parcour, key) => (
                                <div className="chapitre-container" key={key}>
                                    <BackgroundImage img={parcour.background_mobile.url} desktop_img={parcour.background_desktop.url}/>
                                    {/* <div className="back-button" onClick={() => Router.back()} >
                                        <img src={backbtn} alt="arrow back" />
                                    </div> */}
                                    <div className="entete__chapitre-container-data"> 
                                        <h2 className="entete__chapitre-h2" style={{ textTransform: "uppercase" }}>{ `Partie ${ enumeration === "comprendre" ? 1 : ( enumeration === "changer" ? 2 : 3 ) }` }</h2>
                                        <h1 className="entete__chapitre-h1" style={{ textTransform: "capitalize" }}>{ enumeration }</h1>
                                        <img 
                                            src={enumeration === "comprendre" 
                                            ? comprendre_img 
                                                : ( enumeration === "changer" 
                                                ? changer_img 
                                                : agir_img 
                                                ) 
                                            } 
                                            alt="chapitre img" 
                                            style={ this.state.width > 992
                                                ? { 
                                                    width: `${enumeration === "agir" 
                                                        ? "auto" 
                                                        : "230px"}`, 
                                                    height: `${enumeration === "agir" 
                                                        ? "260px" 
                                                        : "auto"}`
                                                }
                                                : {
                                                    width: `${enumeration === "agir" 
                                                        ? "auto" 
                                                        : "120px"}`, 
                                                    height: `${enumeration === "agir" 
                                                        ? "150px" 
                                                        : "auto"}` 
                                                }   
                                                
                                            } 
                                            className="entete__chapitre--image"
                                        />
                                        <div className="entete__chapitre--text-container">
                                            <p className="entete__chapitre--text"> 
                                                { enumeration === "comprendre"
                                                    ? "Première étape : Comprendre pour agir"
                                                    : ( enumeration === "changer"
                                                        ? "Deuxième étape : Comprendre que l’on est une partie essentielle de la solution"
                                                        : "Dernière étape : Passer à l’action"
                                                    )
                                                } 
                                            </p>
                                        </div>
                                    </div>
                                    <EnteteButton title={"commencer"} color={parcour.couleur} slug={id} chapitre={enumeration}></EnteteButton>
                                </div>
                            ))
                        }  
                        
                    </div> 
                )
            }}
        </Query>
        
        )
    }
}

export default EnteteChapitre