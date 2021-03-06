import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCb7bexlhCdmvviShu2-itpFZJoM5sXuKY",
  authDomain: "crwn-db-d210e.firebaseapp.com",
  databaseURL: "https://crwn-db-d210e.firebaseio.com",
  projectId: "crwn-db-d210e",
  storageBucket: "crwn-db-d210e.appspot.com",
  messagingSenderId: "597511058297",
  appId: "1:597511058297:web:d3749093de324c996db5a8",
  measurementId: "G-B4R4K36C2Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error){
      console.log('error on creating user ', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
