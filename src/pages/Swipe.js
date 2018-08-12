import React, { Component } from 'react'
import common from '../common'

// elements
import Cards, { Card } from 'react-swipe-card'

// https://github.com/goncy/react-swipy

class Swipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  render() {
    const { questions } = this.props

    let cards = []

    common.lib._.forEach(questions, (question, index) => {
      cards.push(
        <Card key={`card-${index}`}>
          <h3>{question.category}</h3>
        </Card>
      )
    })

    return <Cards>{cards}</Cards>
  }
}

const mapStateToProps = common.lib.createStructuredSelector({
  questions: common.selectors.questions.items()
})

export default common.lib.connect(mapStateToProps)(Swipe)
