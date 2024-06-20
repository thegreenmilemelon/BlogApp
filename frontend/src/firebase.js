// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("VITE_FIREBASE_API_KEY", import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-01-7d5a3.firebaseapp.com",
  projectId: "blog-app-01-7d5a3",
  storageBucket: "blog-app-01-7d5a3.appspot.com",
  messagingSenderId: "814004098570",
  appId: "1:814004098570:web:77515b4770f5d93b5671f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
