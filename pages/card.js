import Card from "../components/Card/Card"
import React from "react"

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_PARCOURS } from './../graphql/querries'

import Menu from './../components/Menu/Menu'

class Cards extends React.Component {
  render() {
    return (
        <Query query={ GET_PARCOURS } >
            {({ loading, error, data }) => {
                return (
                    <div className="container">
                    
                        <Menu/>
                        <div className="cards-container" style={{ marginTop: "100px" }}>
                        {
                            data.parcours.map( ( parcour, key ) => (
                                <Card
                                    title={parcour.Titre}
                                    color_1={parcour.couleur}
                                    color_2={parcour.couleur_2}
                                    duration={parcour.entete.duree}
                                    link={parcour.url_slug}
                                    img={parcour.card_personnage.url}
                                    key={key}
                                />
                            ))
                        }
                        </div>
                    </div>
                )
            }}
        </Query>
    )
  }
}

export default Cards;