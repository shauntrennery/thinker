import React, { Component, Fragment } from 'react'
import common from '../common'

// elements
import { Link } from 'react-router-dom'

const Back = common.lib.styled(Link)`
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
  width: 160px;
`

const List = common.lib.styled.ol`
  color: #424242;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #E1E4E8;
  margin: 40px 0 40px 10px;
  text-align: left;
  list-style-type: decimal;
`

const ListItem = common.lib.styled.li`
  padding: 5px;
  border-bottom: 1px solid #efefef;
  font-size: 12px;
`

const Title = common.lib.styled.h1`
  font-size: 2em;
  letter-spacing: 0px;
  text-align: center;
  color: #ff735d;
  font-weight: 800;
`

class Leaderboard extends Component {
  render() {
    const { leaders } = this.props

    let listItems = []

    for (let i = 0; i < 10; i++) {
      const leader = leaders[i]
      console.log(leader)
      listItems.push(<ListItem key={`item-${i}`}>{leader ? `${leader.name} - ${leader.score}/10 ${leader.time.toFixed(2)}s - ${common.utils.formatDate(leader.timestamp)}` : '...'}</ListItem>)
    }

    return (
      <Fragment>
        <Title>Top 10 thinkers...</Title>
        <List>{listItems}</List>
        <Back to="/">Let's Play</Back>
      </Fragment>
    )
  }
}

const mapStateToProps = common.lib.createStructuredSelector({
  leaders: common.selectors.leaderboard.leaders()
})

export default common.lib.connect(mapStateToProps)(Leaderboard)
