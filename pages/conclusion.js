import React from 'react';

import Conclusion from '../components/Conclusion/Conclusion';

class Index extends React.Component {

  static getInitialProps ({ query: { id } }) {
    return { postId: id };
  }
  
  render() {
    return (
      <Conclusion slug={this.props.postId}/>
    )
  }
}

export default Index;
