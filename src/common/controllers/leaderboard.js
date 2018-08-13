import lib from '../lib'
import utils from '../utils'

const INIT = 'INIT'

export const constants = {
  LEADERBOARD_SIZE: 10,

  RECORD_SCORE: 'leaderboard.score.record',
  SCORE_ADDED: 'leaderboard.score.added',
  SCORE_REMOVED: 'leaderboard.score.removed'
}

export const actions = {
  recordScore: (name, score, time) => ({ type: constants.RECORD_SCORE, name, score, time }),
  scoreAdded: snapshot => ({ type: constants.SCORE_ADDED, snapshot }),
  scoreRemoved: snapshot => ({ type: constants.SCORE_REMOVED, snapshot })
}

// firebase references
let _ref = undefined
let _view = undefined

const initialState = {
  leaders: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const selectors = {
  leaderboard: () => state => utils.fromState(state, 'leaderboard'),
  leaders: () => lib.createSelector(selectors.leaderboard(), state => utils.fromState(state, 'leaders'))
}

export const logic = [
  lib.createLogic({
    type: INIT,
    process({ action }, dispatch, done) {
      _ref = lib.fb.DB.ref('/leaderboard')
      _view = _ref.limitToLast(constants.LEADERBOARD_SIZE)

      _view.on('child_added', snapshot => dispatch(actions.scoreAdded(snapshot)))
      _view.on('child_removed', snapshot => dispatch(actions.scoreRemoved(snapshot)))

      done()
    }
  })
]
