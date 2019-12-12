import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_ENTETE_PER_ID, GET_ENTETE_PER_SLUG } from '../../graphql/querries'
import React, { Component } from 'react'
import Router from 'next/router'

import './Entete.scss'

/**
 * Import Components
 */
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import Button from './../Button/Button'

import backbtn from './../../static/images/back.svg'
import clock from './../../static/images/clock.svg'

import EnteteButton from './Button/EnteteButton'
import SCBCharacter from './../SCBCharacter/SCBCharacter'

export default class Entete extends Component {
    
    render() {
        const { id, enumeration } = this.props

        let ordre = 1
        return (
            <Query query={ GET_ENTETE_PER_SLUG  } variables={ { id, enumeration } }>
                {({ loading, error, data }) => {
                    if (error) return <Error></Error>
                    if (loading) return <div>Loading</div>

                    let quizzes_length 
                    for(const parcour of data.parcours) {
                        quizzes_length = parcour.quizzes.length
                    }
                    return (
                        <div>
                        {
                            enumeration === "Intro" 
                            ? 
                            <div className="entete-container">
                            { 
                                data.parcours.map( (parcour, key) => ( 
                                parcour.entetes.map( (entete, key) => (
                                    <div className="entete-container" key={key}>
                                        <BackgroundImage img={parcour.background_mobile.url} desktop_img={parcour.background_desktop.url}></BackgroundImage>
                                        <div className="back-button" onClick={() => Router.back()} >
                                            <img src={backbtn} alt="arrow back" />
                                        </div>
                                        <div className="data-container"> 
                                            <div className="entete__time-container">
                                                <img className="svg-clock" src={clock} alt="clock img"/>
                                                <span className="time-text"> { parcour.duration } MIN</span>
                                            </div> 
                                            <h1 className="data-title">{ entete.Titre }</h1>
                                        </div>
                                        <SCBCharacter 
                                            image={ parcour.personnage.url } 
                                            character_name={ parcour.character_name }
                                            character_texte={ entete.texte_personnage }
                                            color={parcour.couleur}
                                            param={'entete'}
                                        />
                                        <EnteteButton title={"commencer"} color={parcour.couleur} slug={parcour.url_slug} chapitre={enumeration} quizz={quizzes_length}></EnteteButton>
                                    </div>
                                ))
                                    
                                ))
                            }
                            </div> 
                            :
                            <div className="entete-container">
                            { 
                                data.parcours.map( (parcour, key) => ( 
                                parcour.entetes.map( (entete, key) => (
                                    <div className="entete-container" key={key}>
                                        <BackgroundImage img={entete.background.url}></BackgroundImage>
                                        <div className="back-button" onClick={() => Router.back()} >
                                            <img src={backbtn} alt="arrow back" />
                                        </div>
                                        <div className="data-container"> 
                                            <div className="entete__time-container">
                                                <img className="svg-clock" src={clock} alt="clock img"/>
                                                <span className="time-text"> { entete.duree } MIN</span>
                                            </div> 
                                            <h1 className="data-title">{ entete.Titre }</h1>
                                        </div>
                                        <SCBCharacter 
                                            image={ parcour.personnage.url } 
                                            character_name={ parcour.character_name }
                                            character_texte={ entete.texte_personnage }
                                            color={parcour.couleur}
                                            param={'entete'}
                                        />
                                        <EnteteButton title={"commencer"} color={parcour.couleur} slug={parcour.url_slug} chapitre={enumeration}></EnteteButton>
                                    </div>
                                ))
                                    
                                ))
                            }
                            </div> 
                        }
                        </div>
                        
                    )
                }}
            </Query>
        )
    }
    
}

