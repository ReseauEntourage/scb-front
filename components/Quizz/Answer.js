import React, { useState } from 'react'
import './Answer.scss'

const Answer = ({ text, color, onTitleChange }) => {
    const [ active, setActive ] = useState('not-active')
    const answer = React.useRef(null)

    // const onButtonClick = () => {
    //     active !== "active" ? setActive("active") : setActive("not-active")
    // }

    return (
        <div ref={answer} onClick={onTitleChange}
            className={"answer-container " + active}  
            style={ active === "not-active" 
            ? { border: "1px solid #" + color, color: "#" + color } 
            : {background: "#F9572D", color: "#FFF" }}
            >

            <div className="answer-container__text">
                { text }
            </div>
        </div>
    )
}

export default Answer