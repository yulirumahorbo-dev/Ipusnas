import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
import { getBlobFromUri } from "./image-utils";

export async function uploadProfileImage(uri, userId) {
  const imageRef = ref(storage, `profile_images/${userId}.jpg`);
  const blob = await getBlobFromUri(uri);

  await uploadBytes(imageRef, blob);
  const downloadURL = await getDownloadURL(imageRef);
  return downloadURL;
}
