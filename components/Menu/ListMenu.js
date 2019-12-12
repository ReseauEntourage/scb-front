import React, { Component } from 'react'

import './Menu.scss'

import scb from './../../static/images/scb.png'
import close from './../../static/images/close.svg'

export default class ListMenu extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            newMap: new Map()
        }
    }
    componentDidMount() {
        const { data, nb } = this.props

        this.setState({
                newMap: this.getArrayofLink(data)
            }
        )
    }

    dynamicSort = (property) => {
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    fieldSorter = (fields) => (a, b) => fields.map(o => {
        let dir = 1;
        if (o[0] === '-') { dir = -1; o=o.substring(1); }
        return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
    }).reduce((p, n) => p ? p : n, 0)


    getArrayofLink = (data) => {
        
        let newArray = []
        data.parcours.map( ( parcour, key) => {
            newArray = parcour.textes.concat(parcour.quotes).concat(parcour.videos).concat(parcour.quizzes)
        })
        const arr = [...newArray].sort(this.fieldSorter(['-chapitre', 'ordre']))

        return arr
    
    }
    
    render() {
        const {handleCloseMenuIntro, slug} = this.props
        const arr = Array.from(this.state.newMap)
        return (
            <div className="menu__inside-menu__container">
                <div className="menu__sidebar__top-container">
                    <div className="menu__sidebar-close-container" onClick={ handleCloseMenuIntro }>
                        <img src={close} alt="" className="menu__sidebar-close"/>
                    </div>
                </div>
                <ul className="menu--intra">
                    <h2 className="menu--intra__title"> Comprendre </h2>
                    { arr.map(( valeur, key) => {
                        if(valeur.chapitre === "Comprendre") {
                            return (  
                                <li key={key}> 
                                    <a href={`/parcours/${slug}/${valeur.chapitre.toLowerCase()}/${valeur.ordre}`}>
                                        <div className="number"> { key + 3} </div>
                                        <span className="title"> { valeur.titre }</span>
                                    </a>
                                </li>
                            )
                        } else return null
                        
                    })}
                    <h2 className="menu--intra__title"> Changer de Regard </h2>
                    { arr.map(( valeur, key) => {
                        if(valeur.chapitre === "Changer") {
                            return (  
                                <li key={key}> 
                                    <a href={`/parcours/${slug}/${valeur.chapitre.toLowerCase()}/${valeur.ordre}`}>
                                        <div className="number"> { key + 3} </div>
                                        <span className="title"> { valeur.titre }</span>
                                    </a>
                                </li>
                            )
                        } else return null
                        
                    })}
                    <h2 className="menu--intra__title"> Agir </h2>
                    { arr.map(( valeur, key) => {
                        if(valeur.chapitre === "Agir") {
                            return (  
                                <li key={key}> 
                                    <a href={`/parcours/${slug}/${valeur.chapitre.toLowerCase()}/${valeur.ordre}`}>
                                        <div className="number"> { key + 3} </div>
                                        <span className="title"> { valeur.titre }</span>
                                    </a>
                                </li>
                            )
                        } else return null
                        
                    })}
                </ul>
            </div>
        )
    
    }
}