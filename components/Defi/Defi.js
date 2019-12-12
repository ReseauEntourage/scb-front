import React from 'react'
import { Query } from 'react-apollo'
import { GET_DEFI } from './../../graphql/querries'
import { Markdown } from 'react-showdown';
import './Defi.scss'
import Menu from './../Menu/Menu'
import Link from 'next/link'

import backbtn from './../../static/images/back.svg'
import { withRouter } from 'next/router'

const Defi = ({ id }) => {
    
    return (
        <Query query={GET_DEFI} variables={{ id }}>
        {({ loading, error, data}) => {
            let color
            data.defi.parcours.map(( parcour) => {
                color = parcour.couleur
            })
            if (loading) return <div></div>
            return (
                <div className="defi-container">
                    <Menu slug={ null }/>
                    <div className="defi-header" style={{ background: "#"+ color}}>
                        <Link href={"/defis/"} as={"/defis"}>
                            <a>
                                <div className="back-button">
                                    <img src={backbtn} alt="arrow back" />
                                </div>
                            </a>
                        </Link>
                        <div className="defi__subtitle">défi</div>
                        <h1 className="defi__title">{data.defi.titre}</h1>
                        
                    </div>
                    
                    <div className="defi-mardown"> 
                        <Markdown markup={ data.defi.contenu } />    
                    </div>
                    
                </div>

            )
        }}
        </Query>
        
    )
}

export default withRouter(Defi)