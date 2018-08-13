import { combineReducers } from 'redux'

import { reducer as app } from './controllers/app'
import { reducer as leaderboard } from './controllers/leaderboard'
import { reducer as questions } from './controllers/questions'
import { reducer as unsplash } from './controllers/unsplash'

const rootReducer = combineReducers({
  app,
  leaderboard,
  questions,
  unsplash
})

export default rootReducer
