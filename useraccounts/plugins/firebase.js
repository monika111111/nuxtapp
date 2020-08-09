/* eslint-disable no-unused-expressions */
import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '**',
  authDomain: '**',
  databaseURL: '**',
  projectId: '**',
  storageBucket: '**',
  messagingSenderId: '**',
  appId: '**'
}
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase
