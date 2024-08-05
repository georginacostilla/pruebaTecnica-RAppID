import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvXeoFi0B3u3SQTipZXoM6akk8n7Rpczs",
  authDomain: "cardspoke-28980.firebaseapp.com",
  projectId: "cardspoke-28980",
  storageBucket: "cardspoke-28980.appspot.com",
  messagingSenderId: "246219797792",
  appId: "1:246219797792:web:229f9b310bd96478521345",
  measurementId: "G-3863C7PKBQ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, doc, setDoc, getDoc };