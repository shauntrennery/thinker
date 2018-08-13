import config from '../config'
import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

export const App = firebase.initializeApp(config.value('firebase'))

export const Auth = App.auth()
export const DB = App.database()
export const Storage = App.storage()
export const TIMESTAMP = firebase.database.ServerValue.TIMESTAMP
