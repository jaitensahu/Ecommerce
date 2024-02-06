// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2FUUBr6Kje_D-TEl8hObYfJ_mc87igvk",
  authDomain: "kharido-g.firebaseapp.com",
  projectId: "kharido-g",
  storageBucket: "kharido-g.appspot.com",
  messagingSenderId: "977197755182",
  appId: "1:977197755182:web:f0f6e58496b9975dc3a8bf",
  measurementId: "G-Y8YL4WT3CR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
export const auth = getAuth();
export const db = getFirestore(app);
