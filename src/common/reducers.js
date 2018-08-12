import { combineReducers } from 'redux'

import { reducer as app } from './controllers/app'
import { reducer as questions } from './controllers/questions'
import { reducer as unsplash } from './controllers/unsplash'

const rootReducer = combineReducers({
  app,
  questions,
  unsplash
})

export default rootReducer
