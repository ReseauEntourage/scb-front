import React from 'react'
import Menu from './../Menu/Menu'
import Link from 'next/link'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_CONCLUSION_INFO } from './../../graphql/querries'
import BackgroundImage from '../BackgroundImage/BackgroundImage'

import './Conclusion.scss'

import ShareButton from './ShareButton/ShareButton'

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

const chooseOneChallenge = data => {
  let choosenOne
  for (const parcour of data.parcours) {
    let index = getRandomInt(parcour.defis.length)
    for (let i in parcour.defis) {
      if (i == index) {
        choosenOne = parcour.defis[i]
      }
    }
  }

  return choosenOne
}
const Conclusion = ({ slug }) => {
  return (
    <Query query={GET_CONCLUSION_INFO} variables={{ slug }}>
      {({ loading, error, data }) => {
        let defi = chooseOneChallenge(data)
        return (
          <div>
            {data.parcours.map((parcour, key) => (
              <div key={key}>
                <div>
                  <Menu slug={slug} index={'conclusion'} />
                  <div className='conclusion-container'>
                    <div className='conclusion__defis-container'>
                      <h2 className='defis-container--title_h2'>
                        Votre Défis :{' '}
                      </h2>
                      <h1 className='defis-container--title_h1'>
                        {defi.titre}
                      </h1>

                      <Link
                        href={`/defi/?id=${defi.id}`}
                        as={`/defi/${defi.id}`}>
                        <a>
                          <div className='defi__button--container'>
                            <span
                              className='button--text'
                              style={{ color: '#' + parcour.couleur }}>
                              {' '}
                              passer à l'action{' '}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </div>
                    <BackgroundImage
                      img={parcour.background_mobile.url}
                      desktop_img={
                        parcour.background_desktop.url
                      }></BackgroundImage>

                    <ShareButton color={parcour.couleur} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }}
    </Query>
  )
}

export default Conclusion
