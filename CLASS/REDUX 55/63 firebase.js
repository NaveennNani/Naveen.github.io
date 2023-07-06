import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAGXUrqMxgOnkdrRYDiAQZ-sTwL5TjBMUA",
  authDomain: "shopper-app-d3382.firebaseapp.com",
  projectId: "shopper-app-d3382",
  storageBucket: "shopper-app-d3382.appspot.com",
  messagingSenderId: "597305825203",
  appId: "1:597305825203:web:1550dacdcada45115e1dc6"
};


// To connect to firebase App
const app = firebase.initializeApp(firebaseConfig)


// To connect to firestore database
export const myDatabase = firebase.firestore()

// To connect to firebase Google Authentication

// getAuth --> this method will helps our react application to connect with the authentication which is present
// GoogleAuthprovider --> this is a class that will help our react app to connect with google authentication

export const auth = getAuth(app) // auth--> authentication system
export const provider = new GoogleAuthProvider() // provider--> google authentication