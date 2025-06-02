import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchUser(userId) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    throw new Error("User not found");
  }

  return userSnap.data();
}

export async function updateUserProfile(userId, updates) {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, updates);
}
