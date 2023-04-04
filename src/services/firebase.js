// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLhvQmXkIPVcKqbugfO3TZugVRexp6Rjo",
  authDomain: "hopi-e6758.firebaseapp.com",
  projectId: "hopi-e6758",
  storageBucket: "hopi-e6758.appspot.com",
  messagingSenderId: "454721718599",
  appId: "1:454721718599:web:de73da6eb117d0802be462",
  measurementId: "G-HV093QYFNF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
