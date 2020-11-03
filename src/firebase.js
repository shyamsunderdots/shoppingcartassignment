import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const  firebaseConfig = {
  apiKey: "AIzaSyA13j6m9rNIUTYZa15XJ9Pl2TPQDnOlY7I",
  authDomain: "shoppingmanager-1f26c.firebaseapp.com",
  databaseURL: "https://shoppingmanager-1f26c.firebaseio.com",
  projectId: "shoppingmanager-1f26c",
  storageBucket: "shoppingmanager-1f26c.appspot.com",
  messagingSenderId: "449166564801",
  appId: "1:449166564801:web:f55234405b37fa04d2a340",
  measurementId: "G-PX2W6FX7QT"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const ingredientsCollection = db.collection('ingredients')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  ingredientsCollection,
}