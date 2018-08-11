import React from 'react'
import common from './common'

// elements
import { ConnectedRouter } from 'connected-react-router'

// routes
import routes from './routes'

const App = ({ history }) => {
  return <ConnectedRouter history={history}>{routes}</ConnectedRouter>
}

App.propTypes = {
  history: common.lib.PropTypes.object
}

export default App
