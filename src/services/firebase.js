import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
const firebaseConfig = {
  apiKey: "AIzaSyD1XINhJqXS_kCpDF0nfUu7BtZjLwTXx-g",
  authDomain: "chatapp-fe1be.firebaseapp.com",
  projectId: "chatapp-fe1be",
  storageBucket: "chatapp-fe1be.appspot.com",
  messagingSenderId: "768971688334",
  appId: "1:768971688334:web:bbd94c3155f66921d43cdf",
  measurementId: "G-RY7GQT0TB3"
};

// Checking if app already initialize then don't initialize again
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { db, auth, googleProvider, storage };
