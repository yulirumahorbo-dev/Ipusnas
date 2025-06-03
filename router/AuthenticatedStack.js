import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "../constants/styles";

//Screens
import Notifikasi from "../screens/Notifikasi/Notifikasi";
import DetailBuku from "../screens/DetailBuku";
import SemuaRekomendasi from "../screens/Beranda/Aktivitas/SemuaRekomendasi";
import SemuaKategori from "../screens/Beranda/Buku/SemuaKategori";
import Cari from "../screens/Cari/Cari";
import DetailKategori from "../screens/DetailKategori";
import BottomTabScreen from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: GlobalStyles.colors.primary100 },
      }}
    >
      <Stack.Screen
        name="BottomTabScreen"
        component={BottomTabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          title: "Notifikasi",
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="DetailBuku"
        component={DetailBuku}
        options={{
          title: "Detail",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="SemuaRekomendasi"
        component={SemuaRekomendasi}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SemuaKategori"
        component={SemuaKategori}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cari"
        component={Cari}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailKategori"
        component={DetailKategori}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
