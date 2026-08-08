
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lanaai-e0f35.firebaseapp.com",
  projectId: "lanaai-e0f35",
  storageBucket: "lanaai-e0f35.firebasestorage.app",
  messagingSenderId: "127152954028",
  appId: "1:127152954028:web:4f3cf48e301b0327d45d09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()