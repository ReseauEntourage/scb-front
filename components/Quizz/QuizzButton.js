import React from 'react'
import Link from 'next/link';
import Router from 'next/router'
import './QuizzButton.scss'

const QuizzButton = ({ title, slug, color, active_value, bonne_reponse, explication, number, chapitre }) => {

    return (
        <div className="quizz-quizz__container">
            { active_value === bonne_reponse
                ?
                    // <Link   
                    //     href={`/parcours/?id=${slug}/quizz/?number=${number}/reponse/?value=${true}`}
                    //     as={`/parcours/${slug}/quizz/${number}/reponse/${true}`}
                    // >
                        <a href={`/parcours/${slug}/${chapitre.toLowerCase()}/${number}/reponse/${true}`}>
                            <div className="quizz__button-container" style={{ background: "#" + color }}>
                                <span className="quizz__button-title">
                                    { title }
                                </span>
                            </div>
                        </a>
                    // </Link>
                :
                    // <Link
                        
                    //     href={`/parcours/?id=${slug}/quizz/?number=${number}/reponse/?value=${false}`}
                    //     as={`/parcours/${slug}/quizz/${number}/reponse/${false}`}
                    // >
                        <a href={`/parcours/${slug}/${chapitre.toLowerCase()}/${number}/reponse/${false}`}>
                            <div className="quizz__button-container" style={{ background: "#" + color }}>
                                <span className="quizz__button-title">
                                    { title }
                                </span>
                            </div>
                        </a>
                    // </Link> 

            }
        </div>

        
    )
}  

export default QuizzButton