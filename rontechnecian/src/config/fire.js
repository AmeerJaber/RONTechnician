import * as firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCKFFvXPsU9FauR4qNveo80FVAjgvnwvp8",
  authDomain: "rontechnecian.firebaseapp.com",
  projectId: "rontechnecian",
  storageBucket: "rontechnecian.appspot.com",
  messagingSenderId: "465653735755",
  appId: "1:465653735755:web:65a8ba920a188715b2c8ce",
  measurementId: "G-643L6W14R7"
};

const fire = firebase.initializeApp(config);
export default fire;