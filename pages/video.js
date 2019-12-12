/* /pages/index.js */
import Entete from "../components/Entete/Entete";
import React from "react";

class Index extends React.Component {
  
//   static getInitialProps ({ query: { id } }) {
//     return { postId: id }
//   }

  render() {

    return (
      <div className="container-fluid">
        <Entete id={this.props.postId}></Entete>
      </div>
    );
  }
}

export default Index;