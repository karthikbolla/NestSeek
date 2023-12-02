// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nest-seek.firebaseapp.com",
  projectId: "nest-seek",
  storageBucket: "nest-seek.appspot.com",
  messagingSenderId: "669315593115",
  appId: "1:669315593115:web:702cdea00c98bcc858a73e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);