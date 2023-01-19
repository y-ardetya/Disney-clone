import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBytCTJTk7m1MkNG4IzRp77pS_FFhR8wTg",
  authDomain: "disney-clone-5863c.firebaseapp.com",
  projectId: "disney-clone-5863c",
  storageBucket: "disney-clone-5863c.appspot.com",
  messagingSenderId: "798250445613",
  appId: "1:798250445613:web:02e467195764f5ffb341a4",
  measurementId: "G-T0937E19EX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
