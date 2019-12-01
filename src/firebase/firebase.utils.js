import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtZRcXKTG9EuLStMFp51UDSv0Iu7P5nXs",
  authDomain: "crwn-db-658f6.firebaseapp.com",
  databaseURL: "https://crwn-db-658f6.firebaseio.com",
  projectId: "crwn-db-658f6",
  storageBucket: "crwn-db-658f6.appspot.com",
  messagingSenderId: "950467477939",
  appId: "1:950467477939:web:39576e59222372e4c98bc6",
  measurementId: "G-C5N8HR0Q3Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
