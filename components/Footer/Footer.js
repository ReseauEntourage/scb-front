import React from 'react'
import './Footer.scss'

import instagram from './../../static/images/instagram.svg'
import fb from './../../static/images/fb.svg'


const Footer = () => {
    return (
        <div className="footer-container">
            <ul className="footer__list">
                <li className="footer__list-item">
                    <a>
                        <span> Télécharger le livret </span>
                    </a>
                </li>
                <li className="footer__list-item">
                    <a>
                        <span> Une question  ? </span>
                    </a>
                </li>
                <li className="footer__list-item">
                    <a href="https://s3-eu-west-1.amazonaws.com/entourage-ressources/mentions-legales.pdf" target="_blank">
                        <span> Mentions légales </span>
                    </a>
                </li>
            </ul>
            <div className="footer__social">
                <a>
                    <span> Rejoignez le réseau ! </span>
                </a>
                <div className="footer__social--list">
                    <a href="https://www.instagram.com/reseauentourage/">
                        <div className="footer__social--instagram">
                            <img src={instagram} />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/EntourageReseauCivique/">
                        <div className="footer__social--facebook">
                            <img src={fb} />
                        </div>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer