import React, { useContext, useEffect, useState } from "react";
import { View, Button, Alert, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../../store/auth-context";
import { updateUserProfile } from "../../util/firebase-user";
import { uploadProfileImage } from "../../util/upload-image";

export default function Profile() {
  const { userData, setUserData } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState(userData?.photoURL || "");

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Please allow photo access to update your profile image."
        );
      }
    })();
  }, []);

  const pickImageHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "Images",
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        const uploadedURL = await uploadProfileImage(imageUri, userData.uid);
        await updateUserProfile(userData.uid, { photoURL: uploadedURL });
        setUserData({ ...userData, photoURL: uploadedURL });
        setPhotoURL(uploadedURL);
        Alert.alert("Sukses", "Foto profil berhasil diperbarui!");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Terjadi kesalahan saat upload gambar.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            photoURL ||
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
        }}
        style={styles.avatar}
      />
      <Button title="Pilih Foto Profil" onPress={pickImageHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: "#ccc",
  },
});
