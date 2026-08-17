
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-7d59f.firebaseapp.com",
  projectId: "authexamnotes-7d59f",
  storageBucket: "authexamnotes-7d59f.firebasestorage.app",
  messagingSenderId: "1008157755213",
  appId: "1:1008157755213:web:10b1755662852279f6d904"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}