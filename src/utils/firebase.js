// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaI64Rw-ODDNLvKBOU1O1FF-xNxv1mp5Q",
  authDomain: "netflixgpt-27f8e.firebaseapp.com",
  projectId: "netflixgpt-27f8e",
  storageBucket: "netflixgpt-27f8e.firebasestorage.app",
  messagingSenderId: "514889726629",
  appId: "1:514889726629:web:4ddb9d5b965c73b54fab4c",
  measurementId: "G-7C071G483L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
