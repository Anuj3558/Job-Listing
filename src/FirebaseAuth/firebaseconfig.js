// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeWjbhN-jzURmF_bf_vVzslBETD7XYcZA",
  authDomain: "job-listing-90831.firebaseapp.com",
  projectId: "job-listing-90831",
  storageBucket: "job-listing-90831.appspot.com",
  messagingSenderId: "381688848608",
  appId: "1:381688848608:web:ca7e59efe345f5e6a57085",
  measurementId: "G-ZPBG99YL3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
