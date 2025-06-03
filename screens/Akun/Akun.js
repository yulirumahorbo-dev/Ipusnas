import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { AuthContext } from "../../store/auth-context";
import IconTextButton from "../../components/UI/IconTextButton";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

function Akun() {
  const authCtx = useContext(AuthContext);
  const { userData, isLoading } = authCtx;

  if (isLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (!userData) {
    return <Text style={styles.loadingText}>User data not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Akun</Text>
      <Pressable
        style={({ pressed }) => [
          styles.akunCard,
          { opacity: pressed ? 0.75 : 1 },
        ]}
      >
        <Image
          style={styles.foto}
          source={{
            uri: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
          }}
          resizeMode="cover"
        />
        <Text style={styles.nama}>Name: {userData.name}</Text>
        <Text style={styles.email}>Email: {userData.email}</Text>
      </Pressable>

      <View style={{ marginHorizontal: 16 }}>
        {/* mode: dark, light, sepia. 3 jenis tulisan */}
        <IconTextButton
          icon="invert-mode-outline"
          size={24}
          color={GlobalStyles.colors.primary800}
          placeholder="Reading Mode"
          style={styles.menu}
        />

        <IconTextButton
          icon="help-circle-outline"
          size={24}
          color={GlobalStyles.colors.primary800}
          placeholder="Bantuan"
          style={styles.menu}
        />

        <IconTextButton
          icon="star-outline"
          size={24}
          color={GlobalStyles.colors.primary800}
          placeholder="Umpan Balik Aplikasi"
          style={styles.menu}
        />

        <IconTextButton
          icon="newspaper-outline"
          size={24}
          color={GlobalStyles.colors.primary800}
          placeholder="Syarat dan Ketentuan"
          style={styles.menu}
        />

        <IconTextButton
          icon="shield-checkmark-outline"
          size={24}
          color={GlobalStyles.colors.primary800}
          placeholder="Kebijakan Privasi"
          style={styles.menu}
        />

        <IconTextButton
          icon="information-circle-outline"
          size={24}
          color={GlobalStyles.colors.primary800}
          placeholder="Tentang Aplikasi Ipusnas"
          style={styles.menu}
        />
        <IconTextButton
          icon="exit-outline"
          size={24}
          color={"red"}
          placeholder="Keluar Akun"
          onPress={authCtx.logout}
          style={styles.menu}
          fontColor={"red"}
        />
      </View>
    </View>
  );
}

export default Akun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  headerTitle: {
    marginHorizontal: 16,
    marginTop: 40,
    marginBottom: 8,
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: GlobalStyles.colors.primary800,
    textAlign: "center",
  },
  akunCard: {
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary800,
    marginVertical: 16,
    paddingVertical: 16,
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 18,
  },
  nama: {
    fontSize: 16,
    fontFamily: "open-sans-bold",
    color: GlobalStyles.colors.primary0,
  },
  email: {
    fontSize: 14,
    fontFamily: "open-sans",
    color: GlobalStyles.colors.primary0,
  },
  card: {
    paddingVertical: 8,
  },
  menu: {
    borderWidth: 0,
    marginVertical: 2,
    fontFamily: "open-sans-bold",
  },
  loadingText: {
    flex: 1,
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
});
