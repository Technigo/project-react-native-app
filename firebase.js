// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSTvDwtV4scrjRg3hIcf_fslbyDpW2n10",
  authDomain: "react-native-chat-afc1d.firebaseapp.com",
  projectId: "react-native-chat-afc1d",
  storageBucket: "react-native-chat-afc1d.appspot.com",
  messagingSenderId: "175773051080",
  appId: "1:175773051080:web:8362db30e5cf4d45e75dfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db, auth };
