import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TEXT } from '../graphql/querries';
/* /pages/index.js */

class Cards extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      paragraphes: []
    };
  }

  subStringData = (text) => {
    if (text.paragraphe.includes("\n")) {
      const res = text.paragraphe.split("\n");

      return res;
    }
    return text;
  }

  render() {  
    const { loading, data } = useQuery(GET_TEXT);

    if (loading) {
      return <div></div>;
    }

    data.parcour.textes.map(text => {
      this.state.paragraphes = this.subStringData(text);
    });

    return <div className="texxt">
      {this.state.paragraphes.map(paragraphe => (
        <p className="tex"> {paragraphe} </p>
      ))}
    </div>;
  }
}

export default Cards;
