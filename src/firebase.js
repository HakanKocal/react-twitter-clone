import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "***********",
    authDomain: "***********",
    projectId: "***********",
    storageBucket: "***********",
    messagingSenderId: "***********",
    appId: "***********",
    measurementId: "***********",
  };

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig)

var db = firebaseApp.firestore()

export default db