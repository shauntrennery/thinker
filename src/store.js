import { applyMiddleware, compose, createStore } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import createReducer from './common/reducers'

export default function configureStore(initialState = {}, history) {
  const logicDependencies = {}
  const middlewares = [routerMiddleware(history), createLogicMiddleware(core, logicDependencies), createLogicMiddleware(appOne, logicDependencies), createLogicMiddleware(appTwo, logicDependencies), noticeMiddleware]
  const enhancers = [applyMiddleware(...middlewares)]
  const store = createStore(createReducer(), fromJS(initialState), compose(...enhancers))

  if (module.hot) {
    require.ensure(['./common/reducers'], function(require) {
      let reducerModule = require('./common/reducers')

      const createReducers = reducerModule.default
      const nextReducers = createReducers(store.asyncReducers)

      store.replaceReducer(nextReducers)
    })
  }

  // init
  store.dispatch(actions.core.init())

  store.asyncReducers = {}
  return store
}
