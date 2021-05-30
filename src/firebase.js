import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDqGYkrcpsnNdyldDtYXVASzXwi6eaCOw",
  authDomain: "clone-f0dd0.firebaseapp.com",
  projectId: "clone-f0dd0",
  storageBucket: "clone-f0dd0.appspot.com",
  messagingSenderId: "712918888496",
  appId: "1:712918888496:web:d5b9ffe515b4fdd90dfdf5",
});

const db = firebase.firestore();

export { db, firebaseApp };
