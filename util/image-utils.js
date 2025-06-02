export async function getBlobFromUri(uri) {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
}
