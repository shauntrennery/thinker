import lib from '../lib'
import utils from '../utils'

export const constants = {
  BEGIN: 'app.degin',
  END: 'app.end'
}

export const actions = {
  begin: () => ({ type: constants.BEGIN }),
  end: () => ({ type: constants.END })
}

const initialState = {
  timestamp: undefined
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.BEGIN: {
      return lib._.assign({}, state, { timestamp: new Date().getTime() })
    }

    default:
      return state
  }
}

export const selectors = {
  app: () => state => utils.fromState(state, 'app'),
  timestamp: () => lib.createSelector(selectors.app(), state => utils.fromState(state, 'timestamp'))
}

export const logic = [
  lib.createLogic({
    type: constants.BEGIN,
    process({ action }, dispatch, done) {
      dispatch(lib.router.push('/swipe'))
      done()
    }
  })
]
