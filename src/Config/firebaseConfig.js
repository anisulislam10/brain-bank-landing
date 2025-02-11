import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDUIJrwoOa9i8mkSzkKoadXX7ot97zSnJc",
  authDomain: "brainbay007.firebaseapp.com",
  projectId: "brainbay007",
  storageBucket: "brainbay007.appspot.com",
  messagingSenderId: "1010641016845",
  appId: "1:1010641016845:web:5808799dd5155525c45d44",
  measurementId: "G-Q4R9KEWGY7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export Firestore
