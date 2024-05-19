// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC_TMKm2U7a9Ajp_r77tHsEMbP8-OolKE",
  authDomain: "restauran-web-app.firebaseapp.com",
  projectId: "restauran-web-app",
  storageBucket: "restauran-web-app.appspot.com",
  messagingSenderId: "756352647490",
  appId: "1:756352647490:web:1d723a7645db80cd3608db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);