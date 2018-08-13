import { constants as appConstants } from './controllers/app'
import lib from './lib'

const INIT = 'INIT'

export const logic = [
  lib.createLogic({
    type: INIT,
    process({ getState }, dispatch, done) {
      const state = getState()
      const pathname = state.router.location.pathname

      if (pathname !== '/') {
        dispatch(lib.router.push('/'))
      }

      done()
    }
  }),

  lib.createLogic({
    type: appConstants.BEGIN,
    process({ action }, dispatch, done) {
      dispatch(lib.router.push('/swipe'))
      done()
    }
  })
]
