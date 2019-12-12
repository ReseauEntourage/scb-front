import React from 'react'
import './SCBCharacter.scss'


const SCBCharacter = ({ image, character_name, character_texte, color, param}) => {
    return (
        <div className={`character-container ${param === 'entete' ? 'entete' : 'quote' }`}>
            <div className="character__bubble">
                <p> { character_texte }</p>
                <span style={{ color: "#" + color }}>{ character_name }</span>
            </div>
            <img src={`http://localhost:1337${image}`} alt="character image" className="character__image"/>
        </div>
    )
}


export default SCBCharacter
