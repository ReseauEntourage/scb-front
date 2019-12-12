import React from 'react'
import Link from 'next/link'
import './DefiCard.scss'
import { withRouter } from 'next/router'

import arrow from './../../static/images/arrow-white.svg'
const DefiCard = ({parcours, defi}) => {
    let color
    let titre
    parcours.map( (parcour) => {
        color = parcour.couleur
        titre = parcour.Titre
    })
    return (
        // <Link href={`/defi/?id=${defi.id}`} as={`/defi/${defi.id}`}>
            <a href={`/defi/${defi.id}`}>
                <div className="defi-card-container" style={{ background: "#" + color }}>
                    <div className="defi-parcours">{titre} </div>
                    <div className="defi__title">{defi.titre} </div>
                    <img className="arrow__defi"src={arrow}/>
                </div>
            </a>
        // </Link>
    )
}

export default withRouter(DefiCard)