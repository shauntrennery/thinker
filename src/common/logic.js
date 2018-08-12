import { logic as appLogic } from './controllers/app'
import { logic as unsplashLogic } from './controllers/unsplash'

export default [...appLogic, ...unsplashLogic]
