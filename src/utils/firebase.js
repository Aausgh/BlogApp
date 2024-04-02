// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "blogapp-419107.firebaseapp.com",
    projectId: "blogapp-419107",
    storageBucket: "blogapp-419107.appspot.com",
    messagingSenderId: "212173903996",
    appId: "1:212173903996:web:a81d97dd0997338dc711f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);