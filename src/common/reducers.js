import { combineReducers } from 'redux'

import { reducer as app } from './controllers/app'

const rootReducer = combineReducers({
  app
})

export default rootReducer
