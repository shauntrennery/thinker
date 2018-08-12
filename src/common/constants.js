import { constants as app } from './controllers/app'
import { constants as questions } from './controllers/questions'
import { constants as unsplash } from './controllers/unsplash'

const init = 'INIT'
const axiosRequest = 'AXIOS.REQUEST'
const axiosResponse = 'AXIOS.RESPONSE'

export default {
  init,

  axios: {
    request: axiosRequest,
    response: axiosResponse
  },

  app,
  questions,
  unsplash
}
