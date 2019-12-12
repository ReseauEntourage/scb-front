import React from "react"
import Menu from './../Menu/Menu'

import './Texte.scss'
import Button from './../Button/Button'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_TEXTE_INFO } from './../../graphql/querries'
import { Markdown } from 'react-showdown';


const Texte = ( { id, texte, color, order, slug, items, chapitre } ) => {
        return (
        <Query query={ GET_TEXTE_INFO } variables={ { slug, order, chapitre } }>
        {({ loading, error, data }) => {
            if (loading) return <div></div>
            return(
                <div className="container">
                <Menu slug={ slug }/>
                <div className="video-container">
                { 
                    data.parcours.map( ( parcour, key) => (
                        // parcour.textes.length === 0 ? <Error statusCode={404}>Erreur</Error> : 
                        parcour.textes.map( ( text ) => (
                            <div className="video-content" key={key}>
                            <div className="video__video-subtitle">
                                <h2> { chapitre } </h2>
                            </div>
                            <div className="video__video-name">
                                <h1> { text.titre } </h1>
                            </div>
                            <div className="video__video-text-container">
                                <Markdown markup={ text.paragraphe } />
                                
                                {/* { 
                                    paragraphes.map( (paragraphe, key) => (
                                        <p className="video__paragraphe" key={key}> { paragraphe } </p>
                                    ) ) 
                                } */}
                            </div>
                            {
                                items.pop().ordre !== order 
                                ?   
                                    <Button 
                                        title={"continuer"} 
                                        link={ "/parcours/" } 
                                        order={order}
                                        color={color} 
                                        slug={slug}
                                        chapitre={chapitre}
                                        next={false}
                                    />
                                :   
                                    <Button 
                                        title={"continuer"} 
                                        link={ "/parcours/" } 
                                        order={order} 
                                        color={color} 
                                        slug={slug}
                                        chapitre={chapitre}
                                        next={true}
                                    />
                            }
                            
                        </div>
                        ))
                        
                    ))
                }
                </div>
            </div>
        )
        }}
        </Query>
        
    )
}
    
    
    

export default Texte