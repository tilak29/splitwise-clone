// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr_vzaMnAN8-7j9zfUUms8kcPYGoh5pG4",
  authDomain: "react-auth-65a81.firebaseapp.com",
  projectId: "react-auth-65a81",
  storageBucket: "react-auth-65a81.appspot.com",
  messagingSenderId: "514726261903",
  appId: "1:514726261903:web:316b6984cb9293ec1decfa",
  measurementId: "G-YJ6C2PFB0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

