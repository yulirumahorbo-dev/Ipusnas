import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const API_KEY = "AIzaSyDiVNGW05WUn3PEgcjG2Sle8Epju1hIFj4";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  const localId = response.data.localId;

  return { token, localId };
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

export async function storeUser(userId, userData) {
  const userRef = doc(db, "users", userId);
  await setDoc(userRef, userData);
}
