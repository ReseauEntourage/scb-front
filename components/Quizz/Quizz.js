import React, { useState, useEffect } from 'react'
import './Quizz.scss'

import Menu from './../Menu/Menu'
import QuizzButton from './QuizzButton'
import './QuizzButton.scss'

import './Answer.scss'

import gql from 'graphql-tag'
import { GET_QUIZZ } from './../../graphql/querries'
import { Query } from 'react-apollo'

const Quizz = ({ slug, number, items }) => {
  const [reponse_un_state, setUnState] = useState('not-active')
  const [reponse_deux_state, setDeuxState] = useState('not-active')
  const [reponse_trois_state, setTroisState] = useState('not-active')

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }
  const [state, setState] = useState({ random: 0 })

  const [activeInput, setActiveInput] = useState(0)

  useEffect(() => {
    console.log(state.random)
  }, [state])

  const onButtonClick = data => {
    switch (data) {
      case 'reponse_un':
        setUnState('active')
        setDeuxState('not-active')
        setTroisState('not-active')
        setState(prevState => ({
          ...prevState,
          random: prevState.random
        }))
        break
      case 'reponse_deux':
        setDeuxState('active')
        setUnState('not-active')
        setTroisState('not-active')
        setState(prevState => ({
          ...prevState,
          random: prevState.random
        }))
        break
      case 'reponse_trois':
        setTroisState('active')
        setUnState('not-active')
        setDeuxState('not-active')
        setState(prevState => ({
          ...prevState,
          random: prevState.random
        }))

        break

      default:
        break
    }

    // active !== "active" ? setActive("active") : setActive("not-active")

    setActiveInput(data)
  }

  return (
    <Query query={GET_QUIZZ} variables={{ slug, number }}>
      {({ loading, error, data }) => {
        if (loading) return <div></div>
        return (
          <div className='container'>
            <Menu slug={slug} index={'quizz'} />
            <div className='quizz-container'>
              {data.parcours.map((parcour, key) =>
                parcour.quizzes.map((quizz, key) => (
                  <div className='quizz' key={key}>
                    <div className='quizz__quizz-subtitle'>
                      <h2> {'Quizz'} </h2>
                    </div>
                    <div className='quizz__quizz-question'>
                      <h1> {quizz.titre} </h1>
                    </div>
                    <div className='quizz__quizz-reponses'>
                      <div
                        // ref={answer_un}
                        onClick={() => {
                          onButtonClick('reponse_un')
                        }}
                        className={
                          'answer-container reponse_un ' + reponse_un_state
                        }
                        style={
                          reponse_un_state === 'not-active'
                            ? {
                                border: '1px solid #' + parcour.couleur,
                                color: '#' + parcour.couleur
                              }
                            : {
                                border: '1px solid #' + parcour.couleur,
                                background: '#' + parcour.couleur,
                                color: '#FFF'
                              }
                        }>
                        <div className='answer-container__text'>
                          {quizz.reponse_un}
                        </div>
                      </div>
                      <div
                        // ref={answer_deux}
                        onClick={() => {
                          onButtonClick('reponse_deux')
                        }}
                        className={
                          'answer-container reponse_deux ' + reponse_deux_state
                        }
                        style={
                          reponse_deux_state === 'not-active'
                            ? {
                                border: '1px solid #' + parcour.couleur,
                                color: '#' + parcour.couleur
                              }
                            : {
                                border: '1px solid #' + parcour.couleur,
                                background: '#' + parcour.couleur,
                                color: '#FFF'
                              }
                        }>
                        <div className='answer-container__text'>
                          {quizz.reponse_deux}
                        </div>
                      </div>
                      <div
                        // ref={answer_trois}
                        onClick={() => {
                          onButtonClick('reponse_trois')
                        }}
                        className={
                          'answer-container reponse_trois ' +
                          reponse_trois_state
                        }
                        style={
                          reponse_trois_state === 'not-active'
                            ? {
                                border: '1px solid #' + parcour.couleur,
                                color: '#' + parcour.couleur
                              }
                            : {
                                border: '1px solid #' + parcour.couleur,
                                background: '#' + parcour.couleur,
                                color: '#FFF'
                              }
                        }>
                        <div className='answer-container__text'>
                          {quizz.reponse_trois}
                        </div>
                      </div>
                    </div>

                    <QuizzButton
                      title={'continuer'}
                      slug={slug}
                      color={parcour.couleur}
                      active_value={activeInput}
                      bonne_reponse={quizz.bonne_reponse}
                      number={number}
                      chapitre={quizz.chapitre}
                      items={items}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default Quizz
