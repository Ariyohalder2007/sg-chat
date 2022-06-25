// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPry9AoEX_3e1ENf2zfCOt9luUojQFxqY",
  authDomain: "sg-chat-app.firebaseapp.com",
  projectId: "sg-chat-app",
  storageBucket: "sg-chat-app.appspot.com",
  messagingSenderId: "339002577964",
  appId: "1:339002577964:web:6df9dc0da5552c10526d89",
  measurementId: "G-E05LENZB3K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
