import React from "react";

import Defi from './../components/Defi/Defi'

class DefiPage extends React.Component {

  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }
  
  render() {
    return (
      <div className="container-fluid">
        <Defi id={this.props.postId}/>
      </div>
    );
  }
}

export default DefiPage;