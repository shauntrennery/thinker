import config from '../config'
import lib from '../lib'
import utils from '../utils'

const INIT = 'INIT'

export const constants = {
  DEFAULT_DIFFICULTY: 'hard',
  DEFAULT_TYPE: 'boolean',
  DEFAULT_AMOUNT: 10,

  LOAD: 'questions.load',
  LOAD_ERROR: 'questions.load.error',
  LOAD_SUCCESS: 'questions.load.success'
}

export const actions = {
  load: (questionType = constants.DEFAULT_TYPE, difficulty = constants.DEFAULT_DIFFICULTY, amount = constants.DEFAULT_AMOUNT) => ({ type: constants.LOAD, difficulty, amount, questionType }),
  loadError: error => ({ type: constants.LOAD_ERROR, error }),
  loadSuccess: payload => ({ type: constants.LOAD_SUCCESS, payload, success: true })
}

const initialState = {
  error: undefined,
  items: []
}

export const reducer = function(state = initialState, action) {
  switch (action.type) {
    case constants.LOAD: {
      return lib._.assign({}, state, { error: undefined, items: [] })
    }

    case constants.LOAD_ERROR: {
      return lib._.assign({}, state, { error: action.error })
    }

    case constants.LOAD_SUCCESS: {
      if (action.payload) {
        return lib._.assign({}, state, { items: action.payload })
      } else {
        return state
      }
    }

    default:
      return state
  }
}

export const selectors = {
  questions: () => state => utils.fromState(state, 'questions'),
  error: () => lib.createSelector(selectors.questions(), state => utils.fromState(state, 'error')),
  items: () => lib.createSelector(selectors.questions(), state => utils.fromState(state, 'items'))
}

export const logic = [
  lib.createLogic({
    type: [INIT, constants.LOAD],
    process({ action }, dispatch, done) {
      let amount = constants.DEFAULT_AMOUNT
      let difficulty = constants.DEFAULT_DIFFICULTY
      let questionType = constants.DEFAULT_TYPE

      if (action.type === constants.LOAD) {
        amount = action.difficulty
        difficulty = action.difficulty
        questionType = action.questionType
      }

      lib.axios
        .get(config.value('questionAPIEndpoint'), {
          params: {
            amount,
            difficulty,
            type: questionType
          }
        })
        .then(response => {
          if (response && response.data && response.data.response_code === 0) {
            dispatch(actions.loadSuccess(response.data.results))
          } else {
            dispatch(actions.loadError(response))
          }
        })
        .catch(err => dispatch(actions.loadError(err)))
        .then(() => done())
    }
  })
]
