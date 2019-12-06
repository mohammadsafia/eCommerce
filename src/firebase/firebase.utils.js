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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
