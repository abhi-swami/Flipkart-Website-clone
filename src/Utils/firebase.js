// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2FODcKosgWadhPCXEicp6_BE5mZW1TlE",
  authDomain: "flipkart-authentication-e8cfe.firebaseapp.com",
  projectId: "flipkart-authentication-e8cfe",
  storageBucket: "flipkart-authentication-e8cfe.appspot.com",
  messagingSenderId: "408498964448",
  appId: "1:408498964448:web:3b7f3b0ad91935ae89cd85",
  measurementId: "G-X2EQSF6FNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
