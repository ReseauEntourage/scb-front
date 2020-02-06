import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ORDER } from '../graphql/querries';

import Explanation from '../components/Quizz/Explanation/Explanation';

class explanation extends React.Component {
  static getInitialProps({ query: { id, chapitre, order, value } }) {
    return {
      postId: id,
      postChapitre: chapitre,
      postOrder: order,
      postValue: value
    };
  }

  render() {
    const { postId, postChapitre } = this.props;

    const { loading, data } = useQuery(GET_ORDER, {
      variables: { id: postId, chapitre: postChapitre }
    });

    if (loading) {
      return <div></div>;
    }

    return <Explanation
      data={data}
      slug={this.props.postId}
      order={this.props.postOrder}
      chapitre={this.props.postChapitre}
      value={this.props.postValue}></Explanation>;
  }
}

export default explanation;
