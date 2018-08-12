import React, { Component, Fragment } from 'react'
import common from '../common'

// elements
import { Link } from 'react-router-dom'

const Button = common.lib.styled(Link)`
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
  padding: 7px 10px;
  display: block;
  margin: 25px auto;
  width: 120px;
`

const Copy = common.lib.styled.p`
  color: #424242;
  font-size: 18px;
  line-height: 24px;
  margin: 20px 0 40px 0;
`

const Leaderboard = common.lib.styled(Link)`
  color: #9b9b9b;
  text-decoration: none;
`

const SubTitle = common.lib.styled.p`
  color: #424242;
  font-size: 22px;
  line-height: 24px;
  margin: 30px 10px;
  font-weight: bold;
`

const Title = common.lib.styled.h1`
  font-size: 2.6em;
  letter-spacing: -1px;
  text-align: center;
  color: #ff735d;
  font-weight: 800;
`

class Intro extends Component {
  render() {
    return (
      <Fragment>
        <Title>thinker...</Title>
        <SubTitle>Welcome to the trivia challenge taking the world by storm.</SubTitle>
        <Copy>
          Get your name on the <u>global leaderboard</u> by swiping through the following 10 questions in the <u>quickest</u> time.
        </Copy>
        <Button to="/game">Begin</Button>
        <Leaderboard to="/leaderboard">Leaderboard</Leaderboard>
      </Fragment>
    )
  }
}

export default Intro
