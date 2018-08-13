import React, { Component, Fragment } from 'react'
import common from '../common'

// elements
import Card from '../components/Card'
import Swipeable from 'react-swipy'

const Button = common.lib.styled.button`
  background-color: ${props => (props.left ? '#fd5068' : '#48CF95')};
  border-radius: 4px;
  font-size: 1.6rem;
  letter-spacing: 0.02em;
  color: #fff;
  cursor: pointer;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-width: 1px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 7px 10px;
  margin: 20px;
  ${props => (props.left ? 'margin-left: 0' : 'margin-right: 0')};
  width: 120px;
`

const SwipeableContainer = common.lib.styled.div`
  position: relative;
  width: 280px;
  height: 320px;
  margin: 10px auto 0 auto;
`

class Swipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: props.questions || [],
      score: 0,
      swipeDirection: undefined
    }
  }

  componentWillReceiveProps = nextProps => {
    if (!common.lib._.isEqual(this.props.questions, nextProps.questions)) {
      this.setState({ questions: nextProps.questions, score: 0, swipeDirection: undefined })
    }
  }

  handleAfterSwipe = () => {
    const question = this.state.questions[0]
    const swipeDirection = this.state.swipeDirection

    let isCorrect = 0

    if (question) {
      if (question.correct_answer === 'True' && swipeDirection === 'right') {
        isCorrect = 1
      } else if (question.correct_answer === 'False' && swipeDirection === 'left') {
        isCorrect = 1
      }
    }

    this.setState(
      ({ questions, score }) => ({ questions: questions.slice(1, questions.length), score: score + isCorrect }),
      () => {
        if (this.state.questions.length === 0) {
          this.props.end(this.state.score)
        } else if (this.state.questions.length > 0) {
          this.props.changeBackground(this.state.questions[0].category.replace(': ', ', '))
        }
      }
    )
  }

  handleSwipe = swipeDirection => {
    this.setState({ swipeDirection })
  }

  render() {
    const { questions } = this.state

    return (
      <Fragment>
        {questions.length > 0 && (
          <SwipeableContainer>
            <Swipeable
              buttons={({ right, left }) => (
                <div>
                  <Button left onClick={left}>
                    False
                  </Button>
                  <Button right onClick={right}>
                    True
                  </Button>
                </div>
              )}
              onAfterSwipe={this.handleAfterSwipe}
              onSwipe={this.handleSwipe}>
              <Card question={questions[0]} />
            </Swipeable>
            {questions.length > 1 && <Card zIndex={-1} question={questions[1]} />}
          </SwipeableContainer>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = common.lib.createStructuredSelector({
  questions: common.selectors.questions.items()
})

function mapDispatchToProps(dispatch) {
  return {
    changeBackground: query => dispatch(common.actions.unsplash.random(query)),
    end: score => dispatch(common.actions.app.end(score))
  }
}

export default common.lib.connect(
  mapStateToProps,
  mapDispatchToProps
)(Swipe)
