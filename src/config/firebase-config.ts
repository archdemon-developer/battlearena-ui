import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx6-JfuKjepW3snHxNxG_qHlExtSWXDgI",
  authDomain: "battlearena-6c22a.firebaseapp.com",
  projectId: "battlearena-6c22a",
  storageBucket: "battlearena-6c22a.appspot.com",
  messagingSenderId: "702008328327",
  appId: "1:702008328327:web:daeb0163f3881703d67822",
  measurementId: "G-SGLFHSXHLS",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export default FIREBASE_APP;
