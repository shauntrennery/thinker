import React, { Component, Fragment } from 'react'
import common from '../common'

const CardContainer = common.lib.styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #E1E4E8;
  width: 280px;
  height: 320px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  display: flex;
  alignItems: center;
  justify-content: center;
  top: 0;
  z-index: ${props => props.zIndex};
`

const CardContent = common.lib.styled.div`
  margin: 20px;
`

const Category = common.lib.styled.h3`
  color: #424242;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 0 0 20px 0;
`

const Question = common.lib.styled.p`
  color: #424242;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`

class Card extends Component {
  static propTypes = {
    question: common.lib.PropTypes.object,
    zIndex: common.lib.PropTypes.number
  }

  static defaultProps = {
    zIndex: 0
  }

  renderQuestion() {
    const { question } = this.props

    if (question) {
      return (
        <Fragment>
          <Category>{question.category}</Category>
          <Question dangerouslySetInnerHTML={{ __html: question.question }} />
        </Fragment>
      )
    }
  }

  render() {
    const { zIndex } = this.props

    return (
      <CardContainer zIndex={zIndex}>
        <CardContent>{this.renderQuestion()}</CardContent>
      </CardContainer>
    )
  }
}

export default Card
