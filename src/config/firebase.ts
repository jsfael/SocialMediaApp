// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUESPbTr6EwkmPeUsVg9c3kt5B7YBY4A8",
  authDomain: "socialmediaapp-react.firebaseapp.com",
  projectId: "socialmediaapp-react",
  storageBucket: "socialmediaapp-react.firebasestorage.app",
  messagingSenderId: "278545503402",
  appId: "1:278545503402:web:4212dbedbc208773116cd3",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const DB = getFirestore(app);
