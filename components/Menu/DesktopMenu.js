import React from 'react' 
import scb from './../../static/images/scb.png'

import './DesktopMenu.scss'
const DesktopMenu = () => {
    return (
        <div>
            <div className="desktop_menu">
                <div className="desktop__menu__scb-logo">
                    <a href='/'>
                        <img src={scb} alt="scb logo"/>
                    </a>
                </div>
                <div className="desktop-menu-right">
                    <ul className="desktop-menu__list">
                        <li className="desktop-menu__list--item">
                            <a href="/parcours">
                                <span>Les parcours</span>
                            </a>
                        </li>
                        <li className="desktop-menu__list--item">
                            <a href="/defis">
                                <span>Les défis</span>
                            </a>
                        </li>
                        <li className="desktop-menu__list--item">
                            <a href="/a-propos">
                                <span>A propos</span>
                            </a>
                        </li>
                    </ul>
                    <a href='https://www.entourage.social/' target="_blank">
                        <div className="desktop-menu__entourage-cta">
                            
                            <span className="entourage-text"> Agir avec entourage</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DesktopMenu