import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCy1iW-oYM9d7ORuoUGCDumYq_TT4ODoz0",
    authDomain: "olx-clone-f6f4e.firebaseapp.com",
    projectId: "olx-clone-f6f4e",
    storageBucket: "olx-clone-f6f4e.appspot.com",
    messagingSenderId: "175483268010",
    appId: "1:175483268010:web:77097366bd4a109765d9d3",
    measurementId: "G-YY28JBWH8G"
  };

  export default firebase.initializeApp(firebaseConfig) 