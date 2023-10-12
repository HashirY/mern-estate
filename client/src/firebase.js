// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cc779.firebaseapp.com",
  projectId: "mern-estate-cc779",
  storageBucket: "mern-estate-cc779.appspot.com",
  messagingSenderId: "730502159561",
  appId: "1:730502159561:web:6d331e3c26ca7ed4164118",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
