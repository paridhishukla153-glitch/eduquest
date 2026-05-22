import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkzB-q2quIrEWbDurtdOlLQhg3-JEwerQ",
  authDomain: "eduquest-735ac.firebaseapp.com",
  projectId: "eduquest-735ac",
  storageBucket: "eduquest-735ac.firebasestorage.app",
  messagingSenderId: "536677044006",
  appId: "1:536677044006:web:2f09210256e507356dfbe7",
  measurementId: "G-DF9HL5D5E4"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider =
  new GoogleAuthProvider();