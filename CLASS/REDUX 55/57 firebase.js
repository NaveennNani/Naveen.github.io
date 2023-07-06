import firebase from "firebase/compat/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAG0pBpppZVxssjZWiIdPHNmbX3BhVcz6w",
  authDomain: "authentication-project-724c4.firebaseapp.com",
  projectId: "authentication-project-724c4",
  storageBucket: "authentication-project-724c4.appspot.com",
  messagingSenderId: "238342979529",
  appId: "1:238342979529:web:fbd849d808658f7ce53218"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app)

// Google Authentication
export const provider = new GoogleAuthProvider()