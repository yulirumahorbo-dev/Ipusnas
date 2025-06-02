import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Pinjaman from "./Pinjaman";
import Ulasan from "./Ulasan";
import Riwayat from "./Riwayat";

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16 },
        tabBarActiveTintColor: GlobalStyles.colors.primary800,
        tabBarInactiveTintColor: GlobalStyles.colors.primary100,
        tabBarIndicatorStyle: {
          backgroundColor: GlobalStyles.colors.primary800,
        },
      }}
    >
      <Tab.Screen name="Pinjaman" component={Pinjaman} />
      <Tab.Screen name="Ulasan" component={Ulasan} />
      <Tab.Screen name="Riwayat" component={Riwayat} />
    </Tab.Navigator>
  );
}

function Perpustakaan() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Perpustakaan</Text>

      <TopTabs />
    </View>
  );
}

export default Perpustakaan;

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
});
