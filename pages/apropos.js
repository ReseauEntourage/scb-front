import React from 'react'
import Menu from './../components/Menu/Menu'

import './../components/APropos/APropos.scss'

import ensemble from './../static/images/18.png'
import table from './../static/images/19.png'
import joie from './../static/images/20.png'
const APropos = () => {
    return (
        <div className="apropos-container">
            <Menu slug={null} />
            <h2 className="a-propos__title_h2">A propos de nous</h2>
            <h1 className="a-propos__title_h1">La vocation d’Entourage est de redonner un réseau à ceux qui n’ont plus de réseau.</h1>
            <div className="a-propos__text-container">
                <p>
                    À la rue, on souffre du froid, de la faim… mais surtout de solitude. Aider une personne SDF, ce n’est pas simplement lui donner un toit, un emploi, ou répondre à ses besoins primaires, c’est avant tout lui redonner son humanité, sa place dans la société.
                </p>
                <p>
                    La lutte contre l’exclusion n’est pas seulement l’affaire des pouvoirs publics et des associations : chacun de nous, au quotidien, par notre attention, pouvons être une partie de la solution.
                </p>
            </div>
            <div className="a-propos__items">
                <div className="a-propos__item">
                    <img src={ensemble} className="item__image" alt="a propos image"/>
                    <h3>Sensibiliser et guider</h3>
                    <p>
                        Nous développons des contenus pédagogiques pour faire changer le regard de chacun sur la grande précarité et lever les freins qui empêchent d’aller vers les personnes SDF.
                    </p>
                </div>

                <div className="a-propos__item">
                    <img src={joie} className="item__image" alt="a propos image"/>
                    <h3>Faire agir ensemble</h3>
                    <p>
                    Nous avons développé un réseau social sur mobile, l’application Entourage, pour permettre à chacun d’agir à son échelle, dans son quartier. Sur le réseau, habitants, associations et personnes SDF peuvent se connecter pour échanger et mener ensemble des actions solidaires. Rejoignez les 62 000 voisins solidaires qui ont déjà mené plus de 5 600 actions de solidarité !                    </p>
                </div>

                <div className="a-propos__item">
                    <img src={table} className="item__image" alt="a propos image"/>
                    <h3>Favoriser la rencontre</h3>
                    <p>
                    Partager des moments ensemble, entre voisins, avec et sans abri :  Entourage est présent dans les quartiers à travers l’organisation d’activités conviviales pour faire se rencontrer les habitants du quartier : apéros, pique-niques, rencontres sportives, projections-débats, soirées jeux… Vous souhaitez co-organiser un événement avec nous ? Contactez-nous !
                    </p>
                </div>
            </div>
        </div>
    )
}
export default APropos