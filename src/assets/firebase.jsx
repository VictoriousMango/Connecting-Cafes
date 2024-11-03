// Import the functions you need from the SDKs you need
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjYGk6uhaBTjE128ib-rPyUFM8wsIEX_o",
  authDomain: "connecting-cafes.firebaseapp.com",
  projectId: "connecting-cafes",
  storageBucket: "connecting-cafes.appspot.com",
  messagingSenderId: "493664933376",
  appId: "1:493664933376:web:08caf8f09ec4419a02aae5",
  measurementId: "G-3F80TLHEYL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };