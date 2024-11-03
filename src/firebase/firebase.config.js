// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPaHt3-rhGwWZehqQFXkoqisuEFgjgk68",
  authDomain: "baalabook.firebaseapp.com",
  projectId: "baalabook",
  storageBucket: "baalabook.firebasestorage.app",
  messagingSenderId: "1062262259891",
  appId: "1:1062262259891:web:e92e9dc023853870d170c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);