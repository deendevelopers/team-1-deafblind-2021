import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCd5yIJ6TJYC-VUlGfMImKl9tDrd3HUx0E",
    authDomain: "team-1-deafblind-2021.firebaseapp.com",
    projectId: "team-1-deafblind-2021",
    storageBucket: "team-1-deafblind-2021.appspot.com",
    messagingSenderId: "345912712874",
    appId: "1:345912712874:web:24e79f6ab03336bcda7ad3"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firebase services 
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }