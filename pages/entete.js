import Entete from '../components/Entete/Entete'
import React from 'react'

class Index extends React.Component {
  static getInitialProps({ query: { id, chapitre } }) {
    return { postId: id, postChapitre: chapitre }
  }

  render() {
    return (
      <div className='container-fluid'>
        <Entete
          id={this.props.postId}
          enumeration={this.props.postChapitre}></Entete>
      </div>
    )
  }
}

export default Index
