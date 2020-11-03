import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDx5pFa99nw4eL0qOvGI6lUPcSaEUHGttM",
    authDomain: "vue-js-receipe-book.firebaseapp.com",
    databaseURL: "https://vue-js-receipe-book.firebaseio.com",
    projectId: "vue-js-receipe-book",
    storageBucket: "vue-js-receipe-book.appspot.com",
    messagingSenderId: "841103243255",
    appId: "1:841103243255:web:ddcea5eb1accb6a07ba0f2",
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