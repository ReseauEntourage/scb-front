import React from 'react'
import './Explanation.scss'
import EnteteButton from './../../Entete/Button/EnteteButton'
import Menu from './../../Menu/Menu'
import Button from './../../Button/Button'
import validate from './../../../static/images/validate.svg'
import refuse from './../../../static/images/refuse.svg'

import { GET_QUIZZ, GET_ORDER } from './../../../graphql/querries'
import { Query } from 'react-apollo'

const dynamicSort = property => {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function(a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}

const getArrayofLink = data => {
  let newArray = []

  data.parcours.map((parcour, key) => {
    newArray = parcour.textes
      .concat(parcour.quotes)
      .concat(parcour.videos)
      .concat(parcour.quizzes)
  })

  const arr = [...newArray].sort(dynamicSort('ordre'))
  return arr
}

const Explanation = ({ data, slug, order, chapitre, value }) => {
  let items = getArrayofLink(data)
  let number = order
  return (
    <Query query={GET_QUIZZ} variables={{ slug, number }}>
      {({ loading, error, data }) => {
        return (
          <div>
            {data.parcours.map((parcour, key) =>
              parcour.quizzes.map((quizz, key) => (
                <div
                  className='explanation-container'
                  style={{ background: '#' + parcour.couleur }}
                  key={key}>
                  <div className='explanation__status-container'>
                    {value == 'true' ? (
                      <div>
                        <img
                          className='validation-icon'
                          src={validate}
                          alt='bonne reponse svg'
                        />
                        <div className='validation'> Réponse correcte </div>
                      </div>
                    ) : (
                      <div>
                        <img
                          className='validation-icon'
                          src={refuse}
                          alt='mauvaise reponse svg'
                        />
                        <div className='validation'> Réponse incorrecte </div>
                      </div>
                    )}
                    <div className='explanation__text'>{quizz.explication}</div>
                    {items.pop().ordre !== order ? (
                      <Button
                        title={'continuer'}
                        link={'/parcours/'}
                        order={order}
                        color={parcour.couleur}
                        slug={slug}
                        chapitre={chapitre}
                        next={false}
                      />
                    ) : (
                      <Button
                        title={'continuer'}
                        link={'/parcours/'}
                        order={order}
                        color={parcour.couleur}
                        slug={slug}
                        chapitre={chapitre}
                        next={true}
                      />
                    )}
                  </div>
                  {/* <EnteteButton 
                                            title={"continuer"} 
                                            color={parcour.couleur}
                                            chapitre={"quizz"}
                                            slug={slug}
                                        /> */}
                </div>
              ))
            )}
          </div>
        )
      }}
    </Query>
  )
}

export default Explanation
