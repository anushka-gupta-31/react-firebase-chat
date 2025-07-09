import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2Y_2ZEyzEvtK2dCRjf9Q5e98jdmZwBnU",
  authDomain: "react-firebase-chat-53c13.firebaseapp.com",
  projectId: "react-firebase-chat-53c13",
  storageBucket: "react-firebase-chat-53c13.firebasestorage.app",
  messagingSenderId: "370305111478",
  appId: "1:370305111478:web:ca8bc7d41b989fe5a1dd17",
  measurementId: "G-SVETW7RZ1B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()