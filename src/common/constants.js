import { constants as app } from './controllers/app'

const init = 'INIT'
const axiosRequest = 'AXIOS.REQUEST'
const axiosResponse = 'AXIOS.RESPONSE'

export default {
  init,

  axios: {
    request: axiosRequest,
    response: axiosResponse
  },

  app
}
