// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbv5sLeNdWG6tlKpabDavpFAro_RzTgpk",
    authDomain: "red-onion-restaurant-2557a.firebaseapp.com",
    projectId: "red-onion-restaurant-2557a",
    storageBucket: "red-onion-restaurant-2557a.appspot.com",
    messagingSenderId: "700236806551",
    appId: "1:700236806551:web:6d233bd5bf5cd0e4db6cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;