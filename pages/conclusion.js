import Entete from "../components/Entete/Entete";
import React from "react";

import Conclusion from './../components/Conclusion/Conclusion'

class Index extends React.Component {

  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }
  
  render() {
    return (
        <Conclusion slug={this.props.postId}/>
        // <a href={"fb-messenger://share/?link=https://graphql.org/&app_id=123456789"}> Send In Messenger </a>
    )
  }
}

export default Index;