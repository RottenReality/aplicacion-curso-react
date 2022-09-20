// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKOS7nitRqjD41mcbhGjIK7n9w7SEHBQ",
  authDomain: "kalon-ecommerce.firebaseapp.com",
  projectId: "kalon-ecommerce",
  storageBucket: "kalon-ecommerce.appspot.com",
  messagingSenderId: "459929938547",
  appId: "1:459929938547:web:d1f5c682a2079edf581806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)