import React from 'react'
import Card from './../components/Card/Card'
import Menu from './../components/Menu/Menu'
import Explanation from './../components/Quizz/Explanation/Explanation'

class About extends React.Component {
  static getInitialProps({ query: { id, number, value } }) {
    return { postId: id, postNumber: number, postValue: value }
  }

  render() {
    return (
      <div className='container-fluid'>
        <Explanation
          slug={this.props.postId}
          number={this.props.postNumber}
          value={this.props.postValue}
        />
      </div>
    )
  }
}

export default About
