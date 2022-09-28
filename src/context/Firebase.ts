// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFyWqjzKThI3_P95T9P7DHThv-rGE3Pzw',
  authDomain: 'content-generator-b9bba.firebaseapp.com',
  projectId: 'content-generator-b9bba',
  storageBucket: 'content-generator-b9bba.appspot.com',
  messagingSenderId: '856014530647',
  appId: '1:856014530647:web:88936a4b225c538c275b12',
  measurementId: 'G-KGD7MJGWES',
}

// Initialize Firebase
const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
