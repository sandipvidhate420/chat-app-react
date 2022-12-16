import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAs4FNXr9x7BX66SRL0V2cBoud1eamirHs",
  authDomain: "chat-app-react-99d47.firebaseapp.com",
  projectId: "chat-app-react-99d47",
  storageBucket: "chat-app-react-99d47.appspot.com",
  messagingSenderId: "808552094542",
  appId: "1:808552094542:web:469774b9cbe8b01f295c1f"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
