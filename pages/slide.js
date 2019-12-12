import React from 'react'

import { Query } from 'react-apollo'
import { GET_CUSTOM, GET_ORDER } from './../graphql/querries'
import Video from './../components/Video/Video'
import Texte from './../components/Texte/Texte'
import Quote from './../components/Quote/Quote'
import Quizz from './../components/Quizz/Quizz'

const dynamicSort = property => {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function(a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}

const getArrayofLink = data => {
  let newArray = []

  data.parcours.map((parcour, key) => {
    newArray = parcour.textes
      .concat(parcour.quotes)
      .concat(parcour.videos)
      .concat(parcour.quizzes)
  })

  const arr = [...newArray].sort(dynamicSort('ordre'))
  return arr
}

const Custom = ({ data, id, order, chapitre }) => {
  let items = getArrayofLink(data)
  return (
    <Query query={GET_CUSTOM} variables={{ id, order, chapitre }}>
      {({ loading, error, data }) => {
        if (loading) return <div></div>
        return (
          <div>
            {data.parcours.map((parcour, key) => (
              <div key={key}>
                {parcour.textes.length !== 0 ? (
                  <Texte
                    texte={parcour.textes}
                    color={parcour.couleur}
                    order={order}
                    slug={parcour.url_slug}
                    key={key}
                    items={items}
                    chapitre={chapitre}
                  />
                ) : parcour.videos.length !== 0 ? (
                  <Video
                    video={parcour.videos}
                    color={parcour.couleur}
                    order={order}
                    slug={parcour.url_slug}
                    key={key}
                    items={items}
                    chapitre={chapitre}
                  />
                ) : parcour.quotes.length !== 0 ? (
                  <Quote
                    quote={parcour.quotes}
                    color={parcour.couleur}
                    order={order}
                    slug={parcour.url_slug}
                    key={key}
                    character={parcour.personnage.url}
                    character_name={parcour.character_name}
                    items={items}
                    chapitre={chapitre}
                  />
                ) : parcour.quizzes.length !== 0 ? (
                  <Quizz slug={parcour.url_slug} number={'5'} items={items} />
                ) : null}
              </div>
            ))}
          </div>
        )
      }}
    </Query>
  )
}

class Slide extends React.Component {
  static getInitialProps({ query: { id, chapitre, order } }) {
    return { postId: id, postChapitre: chapitre, postOrder: order }
  }

  render() {
    return (
      <Query
        query={GET_ORDER}
        variables={{
          id: this.props.postId,
          chapitre: this.props.postChapitre
        }}>
        {({ loading, error, data }) => {
          return (
            <Custom
              data={data}
              id={this.props.postId}
              order={this.props.postOrder}
              chapitre={this.props.postChapitre}></Custom>
          )
        }}
      </Query>
    )
  }
}

export default Slide
