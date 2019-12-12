import React from 'react';
import Quizz from './../components/Quizz/Quizz'

export default class Quizz_page extends React.Component {

    static getInitialProps ({ query: { id, number } }) {
      return { postId: id, postNumber: number }
    }
    
    render() {
      return (
        <div className="container-fluid">
          <Quizz slug={this.props.postId} number={this.props.postNumber} />
        </div>
      );
    }
}