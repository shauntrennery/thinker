import lib from '../lib'
import utils from '../utils'

const INIT = 'INIT'

export const constants = {
  DEFAULT_WIDTH: 1024,
  DEFAULT_HEIGHT: 683,
  DEFAULT_ORIENTATION: 'landscape',

  RANDOM: 'unsplash.random',
  RANDOM_ERROR: 'unsplash.random.error',
  RANDOM_SUCCESS: 'unsplash.random.success'
}

export const actions = {
  random: (query, featured = true) => ({ type: constants.RANDOM, query, featured }),
  randomError: error => ({ type: constants.RANDOM_ERROR, error }),
  randomSuccess: payload => ({ type: constants.RANDOM_SUCCESS, payload, success: true })
}

const initialState = {
  current: undefined,
  error: undefined
}

export const reducer = function(state = initialState, action) {
  switch (action.type) {
    case constants.RANDOM: {
      return lib._.assign({}, state, { error: undefined })
    }

    case constants.RANDOM_ERROR: {
      return lib._.assign({}, state, { error: action.error })
    }

    case constants.RANDOM_SUCCESS: {
      if (action.payload) {
        return lib._.assign({}, state, { current: action.payload.urls.regular, error: undefined })
      } else {
        return state
      }
    }

    default:
      return state
  }
}

export const selectors = {
  unsplash: () => state => utils.fromState(state, 'unsplash'),
  current: () => lib.createSelector(selectors.unsplash(), state => utils.fromState(state, 'current')),
  error: () => lib.createSelector(selectors.unsplash(), state => utils.fromState(state, 'error'))
}

export const logic = [
  lib.createLogic({
    type: [INIT, constants.RANDOM],
    process({ action }, dispatch, done) {
      let featured = true
      let query = undefined

      if (action.type === constants.RANDOM) {
        featured = action.featured
        query = action.query
      }

      lib.unsplash.photos
        .getRandomPhoto({ featured, query, w: constants.DEFAULT_WIDTH, h: constants.DEFAULT_HEIGHT, orientation: constants.DEFAULT_ORIENTATION })
        .then(lib.toJson)
        .then(json => dispatch(actions.randomSuccess(json)))
        .catch(err => dispatch(actions.randomError(err)))
        .then(() => done())
    }
  })
]
