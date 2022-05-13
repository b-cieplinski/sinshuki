// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAac8bI-Zh6XjNMux7fehg4WtOmFOWTKBE",
  authDomain: "sinshuki.firebaseapp.com",
  projectId: "sinshuki",
  storageBucket: "sinshuki.appspot.com",
  messagingSenderId: "751018123167",
  appId: "1:751018123167:web:c9b1952bf6a212d5f467aa"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };