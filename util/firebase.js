import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiVNGW05WUn3PEgcjG2Sle8Epju1hIFj4",
  authDomain:
    "https://ipusnas-19cc3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ipusnas-19cc3",
  storageBucket: "ipusnas-19cc3.firebasestorage.app",
  messagingSenderId: "480724020948",
  appId: "1:480724020948:android:5302d5c9447555a7815541",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
