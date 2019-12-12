import React from 'react'
import Link from 'next/link'

import './EnteteButton.scss'

const EnteteButton = ({ title, color, slug, chapitre, quizz }) => {
  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  let choosenQuizz = getRandomInt(quizz)
  let final = choosenQuizz + 1

  return (
    <div className='btn-entete__container'>
      {chapitre === 'Intro' ? (
        // <Link href={`/parcours/?id=${slug}/quizz/?number=${final}`} as={`/parcours/${slug}/quizz/${final}`}>
        <a href={`/parcours/${slug}/comprendre/0`}>
          <div className='entete__button-container'>
            <span
              className='entete__button-title'
              style={{ color: '#' + color }}>
              {'Commencer'}
            </span>
          </div>
        </a>
      ) : // </Link>

      chapitre === 'quizz' ? (
        // <Link href={`/parcours/?id=${slug}/?chapitre=comprendre/?order=0`} as={`/parcours/${slug}/comprendre/0`}>
        <a href={`/parcours/${slug}/${chapitre}/0`}>
          <div className='entete__button-container'>
            <span
              className='entete__button-title'
              style={{ color: '#' + color }}>
              {title}
            </span>
          </div>
        </a>
      ) : (
        // </Link>
        // <Link href={`/parcours/?id=${slug}/?chapitre=${chapitre}/?order=1`} as={`/parcours/${slug}/${chapitre}/1`}>
        <a href={`/parcours/${slug}/${chapitre}/1`}>
          <div className='entete__button-container'>
            <span
              className='entete__button-title'
              style={{ color: '#' + color }}>
              {title}
            </span>
          </div>
        </a>
      )
      // </Link>
      }
    </div>
  )
}

export default EnteteButton
