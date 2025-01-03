// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ZZlH83MoTRGk7N_AYd6pFDFuzjGfm98",
  authDomain: "netflixgpt-49a1f.firebaseapp.com",
  projectId: "netflixgpt-49a1f",
  storageBucket: "netflixgpt-49a1f.firebasestorage.app",
  messagingSenderId: "604330869840",
  appId: "1:604330869840:web:fca0bef54da506b679bd55",
  measurementId: "G-VN3XGEX898",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
