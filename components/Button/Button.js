import React, { Component } from 'react';
// import Link from 'next/link';

import './Button.scss'

export default class Button extends Component {
    
    constructor (props) {
        super(props)
        this.nextChapitre = ""
        this.change = false
        this.chapitres = ["comprendre", "changer", "agir"]
    }

    defineChapitre = (chapitre) => {
        
        switch (chapitre) {
            case "comprendre":
                this.nextChapitre = "changer"
                break;
            case "changer":
                this.nextChapitre = "agir"
                break;
            case "agir":
                this.nextChapitre = "conclusion"
                break;
            default:
                this.nextChapitre = chapitre
                break;
        }
        
    }

    render() {
        const { title, link, color, slug, order, param, chapitre, next } = this.props
        
        let nextLink = parseInt(order) + 1
        if( next ) {
            this.change = true
            this.defineChapitre(chapitre)
            
        } else {
            this.nextChapitre = chapitre
        }

        return (
            <div className="btn-container">
            {
                this.nextChapitre === "conclusion" 
                ?
                    // <Link href={`/parcours/?id=${slug}/conclusion`} as={`/parcours/${slug}/conclusion`}>
                        <a href={`/parcours/${slug}/conclusion`}>
                            <div className={`button-container ${param === 'quote' ? 'quote' : '' }`} style={{ background: "#" + color }}>
                                <span className="button-title">
                                    { title }
                                </span>
                            </div>
                        </a>
                    // </Link>
                :   ( this.change === false 
                        ?
                        // <Link href={`/parcours/?id=${slug}/?chapitre=${this.nextChapitre}/?order=${order}`} as={`/parcours/${slug}/${this.nextChapitre}/${nextLink}`}>
                            <a href={`/parcours/${slug}/${this.nextChapitre}/${nextLink}`}>
                                <div className={`button-container ${param === 'quote' ? 'quote' : '' }`} style={{ background: "#" + color }}>
                                    <span className="button-title">
                                        { title }
                                    </span>
                                </div>
                            </a>
                        // </Link>
                        :
                        // <Link href={`/parcours/?id=${slug}/?chapitre=${this.nextChapitre}/?order=0`} as={`/parcours/${slug}/${this.nextChapitre}/0`}>
                            <a href={`/parcours/${slug}/${this.nextChapitre}/0`}>
                                <div className={`button-container ${param === 'quote' ? 'quote' : '' }`} style={{ background: "#" + color }}>
                                    <span className="button-title">
                                        { title }
                                    </span>
                                </div>
                            </a>
                        // </Link>
                    )
            }
            
            </div>
        )
    }  
}