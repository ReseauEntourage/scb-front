import React from 'react'

import { Query } from 'react-apollo'
import { GET_ORDER } from './../graphql/querries'
import Explanation from '../components/Quizz/Explanation/Explanation'

class explanation extends React.Component {
  static getInitialProps({ query: { id, chapitre, order, value } }) {
    return {
      postId: id,
      postChapitre: chapitre,
      postOrder: order,
      postValue: value
    }
  }

  render() {
    return (
      <Query
        query={GET_ORDER}
        variables={{
          id: this.props.postId,
          chapitre: this.props.postChapitre
        }}>
        {({ loading, error, data }) => {
          return (
            <Explanation
              data={data}
              slug={this.props.postId}
              order={this.props.postOrder}
              chapitre={this.props.postChapitre}
              value={this.props.postValue}></Explanation>
          )
        }}
      </Query>
    )
  }
}

export default explanation
