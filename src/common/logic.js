import { logic as appLogic } from './controllers/app'
import { logic as questionsLogic } from './controllers/questions'
import { logic as routerLogic } from './router'
import { logic as unsplashLogic } from './controllers/unsplash'

export default [...appLogic, ...questionsLogic, ...routerLogic, ...unsplashLogic]
