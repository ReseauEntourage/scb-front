import React from 'react'
import DefiCard from './../components/Defi/DefiCard'
import Menu from './../components/Menu/Menu'
import './../components/Defi/Defis.scss'
import { Query } from 'react-apollo'
import { GET_ALL_DEFIS } from './../graphql/querries'
import { withRouter } from 'next/router'

import Footer from './../components/Footer/Footer'

import Link from 'next/link'

const Defis = () => {
    return (
        <Query query={GET_ALL_DEFIS}>
        {({ loading, error, data}) => {
            if (loading) return <div>Loading</div>
            return (
                <div className="defis-container">
                    <Menu slug={ null }/>

                    <div className="defis-container__defis-list">
                        <h1 className="defis-container-title_1">Passez à l'action</h1>
                        <div className="defis-container-text">
                            <p>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                            </p>
                        </div>
                        <h2 className="defis-container-title_h2">Découvrez de nouveaux défis</h2>
                        {
                            data.defis.map( (defi, key) => (
                                <DefiCard key={key} parcours={defi.parcours} defi={defi}/>
                            ))
                        }
                    </div>
                    <Footer />
                </div>
            )
        }}
       </Query>  
    )
}

export default withRouter(Defis)