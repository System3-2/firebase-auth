import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF9bAeTWe4yuWn9xXJ5TuBh0f10Iw7lJc",
  authDomain: "react-auth-78c5a.firebaseapp.com",
  projectId: "react-auth-78c5a",
  storageBucket: "react-auth-78c5a.appspot.com",
  messagingSenderId: "196787539403",
  appId: "1:196787539403:web:00ab5450bbe9f29f46ba4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
