import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Aktivitas from "./Aktivitas/Aktivitas";
import Buku from "./Buku/Buku";
import Video from "./Video/Video";
import Audio from "./Audio/Audio";
import IconButton from "../../components/UI/IconButton";
import IconTextButton from "../../components/UI/IconTextButton";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarActiveTintColor: GlobalStyles.colors.primary800,
        tabBarInactiveTintColor: GlobalStyles.colors.primary100,
        tabBarIndicatorStyle: {
          backgroundColor: GlobalStyles.colors.primary800,
        },
        tabBarStyle: { borderBottomWidth: 0, elevation: 0, shadowOpacity: 0 },
      }}
    >
      <Tab.Screen name="Aktivitas" component={Aktivitas} />
      <Tab.Screen name="Buku" component={Buku} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Audio" component={Audio} />
    </Tab.Navigator>
  );
}
//Header: Search Bar and Button Notifikasi
function Beranda({ navigation }) {
  const [fetchedMessage, setFetchedMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://auth-8b5c1-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [token]);

  function cariBukuHandler() {
    navigation.navigate("Cari");
  }

  function notifikasiHandler() {
    navigation.navigate("Notifikasi");
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerButtonContainer}>
        <IconTextButton
          onPress={cariBukuHandler}
          icon="search"
          color={GlobalStyles.colors.primary800}
          size={24}
          placeholder="Cari buku, artikel, video, dll."
          style={{ flex: 1 }}
        />
        <IconButton
          style={{ marginLeft: 16 }}
          onPress={notifikasiHandler}
          icon="notifications"
          color={GlobalStyles.colors.primary800}
          size={32}
        />
      </View>

      {/* Scrollable card*/}
      <TopTabs />
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  headerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
});
