// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGStVEKCezePd0cnYnHTqCRyLfTy5ln1g",
  authDomain: "mukunda-zimbabwe.firebaseapp.com",
  projectId: "mukunda-zimbabwe",
  storageBucket: "mukunda-zimbabwe.appspot.com",
  messagingSenderId: "68510142287",
  appId: "1:68510142287:web:732a87862b648cdde0bf3a",
  measurementId: "G-BG21Y2J4ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);