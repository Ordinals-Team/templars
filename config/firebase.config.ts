// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
