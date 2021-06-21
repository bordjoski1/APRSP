import * as firebase from "firebase";  
  
var firebaseConfig = {
    apiKey: "AIzaSyA3DtRJ86tq89m5vQASpWKPjWw1MWNXu_Q",
    authDomain: "market-24e58.firebaseapp.com",
    projectId: "market-24e58",
    storageBucket: "market-24e58.appspot.com",
    messagingSenderId: "102302625469",
    appId: "1:102302625469:web:c38a9f97c2e20328c391d4",
    measurementId: "G-F0RLT26WYZ"
  }; 
  
// Initialize Firebase  
var fireDb = firebase.initializeApp(firebaseConfig);  
  
export default fireDb.database().ref(); 