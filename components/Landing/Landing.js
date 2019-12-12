import React from 'react'

import Menu from './../Menu/Menu'
import Cards from "./../Card/Cards"
import Footer from './../Footer/Footer'
import './Landing.scss'

import landing1 from  './../../static/images/landing.png'
import landing from './../../static/images/landing.png'

import comprendre from './../../static/images/comprendre_landing.png'
import changer from './../../static/images/changer_landing.png'
import agir from './../../static/images/agir_landing.png'


import { Query } from 'react-apollo'
import { GET_PARCOURS } from './../../graphql/querries'
import { useState, useEffect } from 'react';





class Landing extends React.Component {
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
        
        render() {
            return (
                <div className="home-container"> 
                    <Menu slug={null}/>
                    <div className="home-container__container">
                        <div className="home-image__container">
                            <img src={this.state.width < 992 ? landing : landing1} alt="" className="home__image"/>
                        </div>
                        <div className="home__introduction--container">
                            <h1 className="home__introduction--title">Découvrez le monde la rue</h1>
                            <p className="home__introduction--text">
                                À travers des parcours thématiques, retrouvez des vidéos, des quiz et des témoignages pour aller vers les personnes sans-abri de votre quartier.
                            </p>
                            <p className="home__introduction--text">
                                Chaque parcours, élaboré par des professionnels et des personnes de la rue, se décline en 3 étapes.                    
                            </p>
                            <img src="./../static/images/wave.svg" alt="" style={{width: "100%", height: "auto"}} className="svg-img"/>
                        </div>
                        <div className="home__steps--container">
                            <div className="home__step">
                                <img src={comprendre} alt="img step" className="img_step"/>
                                <h2 className="home__step--title">Et si on comprenait ?</h2>
                                <p className="home__step--text">Première étape : mieux comprendre le monde de la rue.</p>
                            </div>
                            <div className="home__step">
                                <img src={changer} alt="img step" className="img_step"/>
                                <h2 className="home__step--title">Et si on changeait de regard ?</h2>
                                <p className="home__step--text">Chacun à notre niveau, nous pouvons agir, mais cela implique d’adopter le bonne posture.</p>
                            </div>
                            <div className="home__step">
                                <img src={agir} alt="img step" className="img_step"/>
                                <h2 className="home__step--title">Et si on agissait ?</h2>
                                <p className="home__step--text">Tous acteur de la solidarité, à son échelle: voici des conseils concrets pour passer à l’action !</p>
                            </div>
                            <img src="./../static/images/wave_2.svg" alt="" style={{width: "100%", height: "auto"}} className="svg-img"/>
    
                        </div>
    
                        <div className="home__parcours--container">
                            <h2 className="home__parcours--title">Découvrir les parcours</h2>
                            <Cards/>
                            
                        </div>
    
                        <Footer />
                    </div>
                
                </div>
            )
        }
        
}

export default Landing