import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6JEnVZ4OYt3Sz-LsWojgFM1LF1XNkoSA",
  authDomain: "book-santa-app-2b8f0.firebaseapp.com",
  projectId: "book-santa-app-2b8f0",
  storageBucket: "book-santa-app-2b8f0.appspot.com",
  messagingSenderId: "173383375412",
  appId: "1:173383375412:web:8dcab67f8edac5bb70c861",
  measurementId: "G-05SXB4T4FR"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
