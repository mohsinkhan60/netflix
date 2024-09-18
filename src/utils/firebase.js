// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpup5s9aQbveKdH17ZuGKOv_nOQMlnR64",
  authDomain: "netlify-project-732aa.firebaseapp.com",
  projectId: "netlify-project-732aa",
  storageBucket: "netlify-project-732aa.appspot.com",
  messagingSenderId: "738277819063",
  appId: "1:738277819063:web:b2e01530234fdd436d8332",
  measurementId: "G-Z7NKNSJBW0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);