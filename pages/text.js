/* /pages/index.js */
import React from 'react';

import { Query } from 'react-apollo';
import { GET_TEXT } from '../graphql/querries';

import Menu from '../components/Menu/Menu';

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
    return (
      <Query query={GET_TEXT} >
        {({ loading, error, data }) => {
          data.parcour.textes.map(text => {
            this.state.paragraphes = this.subStringData(text);
          })

          return (
            <div className="container">
              <Menu />
              <div className="texxt">
                {this.state.paragraphes.map(paragraphe => (
                  <p className="tex"> {paragraphe} </p>
                ))}
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Cards;
