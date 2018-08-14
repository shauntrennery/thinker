import React, { Component, Fragment } from 'react'
import common from '../common'

const Button = common.lib.styled.button`
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
  margin: 25px auto 45px;
  width: 120px;
`

const Copy = common.lib.styled.p`
  color: #424242;
  font-size: 18px;
  line-height: 24px;
  margin: 20px 0;
`

const Form = common.lib.styled.form`
  margin: 40px 20px 20px;
`

const Input = common.lib.styled.input`
  width: 240px;
  height: 30px;
  background-color: #fff;
  border: 1px solid ${props => (props.invalid ? '#ff0000' : '#E1E4E8')};
  border-radius: 4px;
  padding: 5px 10px;
  color: #424242;
  font-size: 18px;
  line-height: 24px;
`

const PlayAgain = common.lib.styled.div`
  color: #9b9b9b;
  text-decoration: none;
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
  constructor(props) {
    super(props)

    this.state = {
      invalid: false,
      name: ''
    }
  }

  handleNameChange = e => {
    this.setState({ invalid: false, name: e.target.value })
  }

  handlePlayAgainClick = () => {
    this.props.playAgain()
  }

  handleSubmit = e => {
    e.preventDefault()

    const { beginTime, endTime, score } = this.props

    const name = this.state.name
    const time = (endTime - beginTime) / 1000

    if (name) {
      this.props.recordScore(name, score, time)
    } else {
      this.setState({ invalid: true })
    }
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
        <Form onSubmit={this.handleSubmit}>
          <Input invalid={this.state.invalid} maxLength={15} name="name" onChange={this.handleNameChange} placeholder="Your name" type="text" value={this.state.name} />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>

        <PlayAgain onClick={this.handlePlayAgainClick}>Play Again</PlayAgain>
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
    playAgain: () => dispatch(common.actions.app.begin()),
    recordScore: (name, score, time) => dispatch(common.actions.leaderboard.recordScore(name, score, time))
  }
}

export default common.lib.connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver)
