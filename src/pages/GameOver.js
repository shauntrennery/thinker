import React, { Component, Fragment } from 'react'
import common from '../common'

const Button = common.lib.styled.div`
  background-color: #fd5068;
  border-radius: 4px;
  font-size: 1.6rem;
  letter-spacing: 0.02em;
  color: #fff;
  cursor: pointer;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-width: 1px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  display: block;
  margin: 25px auto;
  width: 180px;
`

const Copy = common.lib.styled.p`
  color: #424242;
  font-size: 18px;
  line-height: 24px;
  margin: 20px 0 160px 0;
`

const Score = common.lib.styled.h1`
  font-size: 2.6em;
  letter-spacing: 2px;
  text-align: center;
  color: #ff735d;
  font-weight: 800;
`

const Title = common.lib.styled.p`
  color: #424242;
  font-size: 22px;
  line-height: 24px;
  margin: 30px 10px 20px 10px;
  font-weight: bold;
`

class GameOver extends Component {
  handlePlayAgainClick = () => {
    this.props.playAgain()
  }

  render() {
    const { beginTime, endTime, score } = this.props

    return (
      <Fragment>
        <Title>You scored</Title>
        <Score>
          {score}
          /10
        </Score>
        <Copy>in {((endTime - beginTime) / 1000).toFixed(2)} seconds</Copy>
        <Button onClick={this.handlePlayAgainClick}>Play Again</Button>
      </Fragment>
    )
  }
}

const mapStateToProps = common.lib.createStructuredSelector({
  beginTime: common.selectors.app.beginTime(),
  endTime: common.selectors.app.endTime(),
  score: common.selectors.app.score()
})

function mapDispatchToProps(dispatch) {
  return {
    playAgain: () => dispatch(common.actions.app.begin())
  }
}

export default common.lib.connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver)
