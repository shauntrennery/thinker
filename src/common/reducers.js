import { combineReducers } from 'redux'

import { reducer as app } from './controllers/app'
import { reducer as unsplash } from './controllers/unsplash'

const rootReducer = combineReducers({
  app,
  unsplash
})

export default rootReducer
