import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_API_ID;
const config = {
  apiKey: API_KEY,
  authDomain: "crown-db-b5c9d.firebaseapp.com",
  databaseURL: "https://crown-db-b5c9d.firebaseio.com",
  projectId: "crown-db-b5c9d",
  storageBucket: "crown-db-b5c9d.appspot.com",
  messagingSenderId: "698868360577",
  appId: API_ID,
  measurementId: "G-2YSKT3NM2V"
};

export const createUserProfileDocument = async (userAuth, additionalDate) => {
  if (!userAuth) return;
  const userRef = firestore.doc("/users/128feeee");
  const snapShot = await userRef.get();
  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
