// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKFFvXPsU9FauR4qNveo80FVAjgvnwvp8",
  authDomain: "rontechnecian.firebaseapp.com",
  projectId: "rontechnecian",
  storageBucket: "rontechnecian.appspot.com",
  messagingSenderId: "465653735755",
  appId: "1:465653735755:web:65a8ba920a188715b2c8ce",
  measurementId: "G-643L6W14R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);