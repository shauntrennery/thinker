import { actions as unsplashActions } from './unsplash'
import lib from '../lib'
import { selectors as questionsSelectors } from './questions'
import utils from '../utils'

export const constants = {
  BEGIN: 'app.degin',
  END: 'app.end'
}

export const actions = {
  begin: () => ({ type: constants.BEGIN }),
  end: score => ({ type: constants.END, score })
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
    process({ getState }, dispatch, done) {
      const state = getState()
      const questions = questionsSelectors.items()(state)

      if (questions && questions.length > 0) {
        dispatch(unsplashActions.random(questions[0].category.replace(': ', ', ')))
      }

      done()
    }
  }),

  lib.createLogic({
    type: constants.END,
    process({ action }, dispatch, done) {
      console.log(action.score)
      done()
    }
  })
]
