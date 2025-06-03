import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "../constants/styles";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

//Screens
import Beranda from "../screens/Beranda/Beranda";
import Linimasa from "../screens/Linimasa/Linimasa";
import Perpustakaan from "../screens/Perpustakaan/Perpustakaan";
import Antrian from "../screens/Antrian/Antrian";
import Akun from "../screens/Akun/Akun";

const BottomTabs = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{
        width: 40,
        height: 40,
      }}
      source={require("../assets/Images/Logo.png")}
    />
  );
}

export default function BottomTabScreen() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let ionName;
          size = 23;
          if (route.name === "Beranda") {
            ionName = focused ? "home" : "home-outline";
            size = focused ? size + 1 : size - 2;
          } else if (route.name === "Linimasa") {
            ionName = focused ? "film" : "film-outline";
            size = focused ? size + 1 : size - 2;
          } else if (route.name === "Perpustakaan") {
            ionName = focused ? "library" : "library-outline";
            size = focused ? size + 1 : size - 2;
          } else if (route.name === "Antrian") {
            ionName = focused ? "heart" : "heart-outline";
            size = focused ? size + 1 : size - 2;
          } else {
            ionName = focused ? "person" : "person-outline";
            size = focused ? size + 1 : size - 2;
          }
          return <Ionicons name={ionName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary0,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarInactiveTintColor: GlobalStyles.colors.primary100,
        tabBarActiveTintColor: GlobalStyles.colors.primary800,
        tabBarLabelStyle: { fontSize: 10, fontFamily: "open-sans-bold" },
      })}
    >
      <BottomTabs.Screen
        name="Beranda"
        component={Beranda}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="Linimasa"
        component={Linimasa}
        options={{
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <BottomTabs.Screen
        name="Perpustakaan"
        component={Perpustakaan}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Antrian"
        component={Antrian}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Akun"
        component={Akun}
        options={{
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
}
