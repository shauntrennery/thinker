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
  beginTime: undefined,
  endTime: undefined,
  score: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.BEGIN: {
      return lib._.assign({}, state, { beginTime: new Date().getTime(), endTime: undefined })
    }

    case constants.END: {
      return lib._.assign({}, state, { endTime: new Date().getTime(), score: action.score })
    }

    default:
      return state
  }
}

export const selectors = {
  app: () => state => utils.fromState(state, 'app'),
  beginTime: () => lib.createSelector(selectors.app(), state => utils.fromState(state, 'beginTime')),
  endTime: () => lib.createSelector(selectors.app(), state => utils.fromState(state, 'endTime')),
  score: () => lib.createSelector(selectors.app(), state => utils.fromState(state, 'score'))
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
  })
]
