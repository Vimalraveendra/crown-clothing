import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_ID = process.env.REACT_APP_API_ID;

const config = {
  apiKey: "AIzaSyBnNxMVQgn9XfBK_ML12KR5owIqFaHiT4k",
  authDomain: "crown-db-b5c9d.firebaseapp.com",
  databaseURL: "https://crown-db-b5c9d.firebaseio.com",
  projectId: "crown-db-b5c9d",
  storageBucket: "crown-db-b5c9d.appspot.com",
  messagingSenderId: "698868360577",
  appId: "11:698868360577:web:678993686b337f8fd2b480",
  measurementId: "G-2YSKT3NM2V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
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
      console.log("error creating a user", error.message);
    }
  }
  return userRef;
};
export const convertCollectionsSnapshotToMap = collections => {
  // collections is the querysnapshot array
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
