/* eslint-disable no-unused-expressions */
import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaJfsVuXG9_H61DLdJLBu85Ad_7QSFdik',
  authDomain: 'vueuseraccounts.firebaseapp.com',
  databaseURL: 'https://vueuseraccounts.firebaseio.com',
  projectId: 'vueuseraccounts',
  storageBucket: 'vueuseraccounts.appspot.com',
  messagingSenderId: '637582283221',
  appId: '1:637582283221:web:6767725b249ffc0b2fad5c'
}
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase
