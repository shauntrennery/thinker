import React, { Component } from 'react'

// elements
import { Link } from 'react-router-dom'

class Intro extends Component {
  render() {
    return (
      <div>
        <Link to="/game">Intro</Link>
      </div>
    )
  }
}

export default Intro
