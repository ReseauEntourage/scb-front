import React from 'react'

import './ShareButton.scss'

import { MessengerIcon, WhatsappIcon } from './Icons/Icons'
const ShareButton = ({ color }) => {
    return (
        <div className="buttons-container">
            <h2 className="social-sharing--title">Partager cette histoire avec vos amis</h2>
            <div className="button__social__sharing-container">
                <a href={"fb-messenger://share/?link=https://video-react.js.org/&app_id=123456789"}> 
                    <div className="share-button messenger-share__button">
                        <div className="share-button__icon__text--container">
                            <MessengerIcon color={ color } />
                            <span className="button__text messenger" style={{ color: "#" + color }}>Messenger</span>
                        </div>
                    </div>
                </a>
                <a href={"https://api.whatsapp.com/send?text=https://video-react.js.org"} data-action="share/whatsapp/share">
                    <div className="share-button whatsapp-share__button">
                        <div className="share-button__icon__text--container">
                            <WhatsappIcon color={ color } />
                            <span className="button__text whatsapp" style={{ color: "#" + color }}>Whatsapp</span>
                        </div>
                    </div>
                </a>
            </div>
            <a href="/parcours">
                <div className="button__next-container">
                    <span className="button__text" >Retour aux parcours</span>
                </div>
            </a>
            
        </div>
    )
}

export default ShareButton