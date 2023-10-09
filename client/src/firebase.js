// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-23a2f.firebaseapp.com",
  projectId: "mern-estate-23a2f",
  storageBucket: "mern-estate-23a2f.appspot.com",
  messagingSenderId: "825045233173",
  appId: "1:825045233173:web:e01ed325eb04d9c400e81c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
