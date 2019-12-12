import EnteteChapitre from "../components/EnteteChapitre/EnteteChapitre";
import React from "react";


class Index extends React.Component {

  static getInitialProps ({ query: { id, chapitre } }) {
    return { postId: id, postChapitre: chapitre }
  }
  
  render() {
    return (
      <div className="container-fluid">
        <EnteteChapitre id={this.props.postId} enumeration={this.props.postChapitre}></EnteteChapitre>
      </div>
    );
  }
}

export default Index;