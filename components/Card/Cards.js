import React from 'react'
import Card from './Card'
import { Query } from 'react-apollo'
import { GET_PARCOURS } from './../../graphql/querries'

const Cards = () => {
    return (
        <Query query={ GET_PARCOURS } >
            {({ loading, error, data }) => {
                return (
                    <div className="cards-container">
                    {
                        data.parcours.map( ( parcour, key ) => (
                            <Card
                                title={parcour.Titre}
                                color_1={parcour.couleur}
                                color_2={parcour.couleur_2}
                                duration={parcour.duration}
                                link={parcour.url_slug}
                                img={parcour.card_personnage.url}
                                key={key}
                            />
                        ))
                    }
                    </div>
                )
            }}
        </Query>
        
    )
}

export default Cards