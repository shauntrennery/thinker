import actions from './common/actions'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { createLogicMiddleware } from 'redux-logic'
import logic from './common/logic'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './common/reducers'

// middleware dependencies
const history = createBrowserHistory()
const logicDependencies = {}

// middleware
const middlewares = [routerMiddleware(history), createLogicMiddleware(logic, logicDependencies)]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = [applyMiddleware(...middlewares)]

const store = createStore(connectRouter(history)(rootReducer), composeEnhancers(...enhancers))

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render()
registerServiceWorker()

// hot reloading
if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })

  // reload reducers
  module.hot.accept('./common/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}

// init
store.dispatch(actions.core.init())
