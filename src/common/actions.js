import { actions as app } from './controllers/app'
import { actions as leaderboard } from './controllers/leaderboard'
import { actions as questions } from './controllers/questions'
import { actions as unsplash } from './controllers/unsplash'

import constants from './constants'

// core
const init = () => ({ type: constants.init })
const axiosRequest = url => ({ type: constants.axios.request, url })
const axiosResponse = url => ({ type: constants.axios.response, url })

export default {
  core: {
    init,
    axiosRequest,
    axiosResponse
  },

  app,
  leaderboard,
  questions,
  unsplash
}
