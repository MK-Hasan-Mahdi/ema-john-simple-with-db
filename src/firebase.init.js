// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtcMEZ0kDZcWNColebl6uK_Pjjpb1sKug",
    authDomain: "ema-john-firebase-9348f.firebaseapp.com",
    projectId: "ema-john-firebase-9348f",
    storageBucket: "ema-john-firebase-9348f.appspot.com",
    messagingSenderId: "940214966613",
    appId: "1:940214966613:web:579e32384b698e22cbb7dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;