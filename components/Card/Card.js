import React, { Component } from 'react';
import Link from 'next/link';

import Morph from './Morph/Morph'

import './Card.scss'

export default class Card extends Component {
    
    render() {
        const { title, color_1, color_2, duration, link, img } = this.props

        return (
            <Link href={`/parcours/?id=${link}/introduction`} as={`/parcours/${link}/introduction`}>
                <a>
                    <div className="card-container" style={{ background: "#" + color_1 }}>
                        <div className="card__data-container">
                            <h2 className="card__title-container">{ title }</h2>
                            <div className="card__time-container">
                                <img className="svg-clock" src="./../../static/images/clock.svg" alt="clock img"/>
                                <span className="time-text"> { duration } MIN</span>
                            </div> 
                        </div>
                        <div className="card__img">
                            <img src={`http://localhost:1337${img}`} alt="character"/>
                        </div>
                        <Morph color={ color_2 }/>
                    </div>
                </a>
            </Link>
        )
    }
}