import React from 'react'
import { Query } from 'react-apollo'
import { GET_PARCOURS } from './../graphql/querries'
import './../components/Parcours/Parcours.scss'
import Menu from './../components/Menu/Menu'
import Footer from './../components/Footer/Footer'

import Card from './../components/Card/Card'
const Parcours = () => {
  return (
    <Query query={GET_PARCOURS}>
      {({ loading, error, data }) => {
        return (
          <div className='parcours-container'>
            <Menu slug={null} />

            <div className='parcours-container__defis-list'>
              <h1 className='parcours-container-title_1'>
                Découvrir les parcours
              </h1>
              <div className='parcours-container-text'>
                <p>
                  À travers des parcours thématiques, retrouvez des vidéos, des
                  quiz et des témoignages pour aller vers les personnes
                  sans-abri de votre quartier.{' '}
                </p>
              </div>
              <h2 className='parcours-container-title_h2'> Les parcours</h2>
              {data.parcours.map((parcour, key) => (
                <Card
                  title={parcour.Titre}
                  color_1={parcour.couleur}
                  color_2={parcour.couleur_2}
                  duration={parcour.duration}
                  link={parcour.url_slug}
                  img={parcour.card_personnage.url}
                  key={key}
                />
              ))}
            </div>
            <Footer />
          </div>
        )
      }}
    </Query>
  )
}

export default Parcours
