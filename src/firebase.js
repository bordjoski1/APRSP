import app from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase';

  
var config = {
    apiKey: "AIzaSyA3DtRJ86tq89m5vQASpWKPjWw1MWNXu_Q",
    authDomain: "market-24e58.firebaseapp.com",
    projectId: "market-24e58",
    storageBucket: "market-24e58.appspot.com",
    messagingSenderId: "102302625469",
    appId: "1:102302625469:web:c38a9f97c2e20328c391d4",
    measurementId: "G-F0RLT26WYZ"
  }; 
  
  // class Firebase {
  //   constructor() {
  //     app.initializeApp(config);

  //     this.auth = app.auth();
  //   }

  //   doCreateUserWithEmailAndPassword = (email, password) =>
  //   this.auth.createUserWithEmailAndPassword(email, password);

  //   doSignInWithEmailAndPassword = (email, password) =>
  //   this.auth.signInWithEmailAndPassword(email, password);

  //   doSignOut = () => this.auth.signOut();

  // }

const firebaseApp=firebase.initializeApp(config);
const db=firebase.firestore();

const auth = firebase.auth();

export {db, auth};

// export default Firebase