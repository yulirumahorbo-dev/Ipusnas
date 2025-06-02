import { Image } from "react-native";
import { useEffect, useState, useContext } from "react";
import { GlobalStyles } from "./constants/styles";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import IconButton from "./components/UI/IconButton";
import { StatusBar } from "expo-status-bar";

//Screens
import DetailBuku from "./screens/DetailBuku";
import Linimasa from "./screens/Linimasa/Linimasa";
import Antrian from "./screens/Antrian/Antrian";
import Akun from "./screens/Akun/Akun";
import Beranda from "./screens/Beranda/Beranda";
import Perpustakaan from "./screens/Perpustakaan/Perpustakaan";
import Notifikasi from "./screens/Notifikasi/Notifikasi";
import SemuaRekomendasi from "./screens/Beranda/Aktivitas/SemuaRekomendasi";
import Cari from "./screens/Cari/Cari";
import DetailKategori from "./screens/DetailKategori";
import SemuaKategori from "./screens/Beranda/Buku/SemuaKategori";

import LoginScreen from "./screens/Auth/LoginScreen";
import SignupScreen from "./screens/Auth/SignupScreen";
import Profile from "./screens/Auth/Profile";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{
        width: 40,
        height: 40,
      }}
      source={require("./assets/Images/Logo.png")}
    />
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary0 },
        headerTintColor: GlobalStyles.colors.primary800,
        contentStyle: { backgroundColor: GlobalStyles.colors.primary0 },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Log In" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: "Sign Up" }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: GlobalStyles.colors.primary100 },
      }}
    >
      <Stack.Screen
        name="ScreenOptions"
        component={ScreenOptions}
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

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  useEffect(() => {
    if (!isTryingLogin) {
      SplashScreen.hideAsync();
    }
  }, [isTryingLogin]);

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />;
}

function ScreenOptions() {
  const authCtx = useContext(AuthContext);
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
      {/* <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      /> */}
    </BottomTabs.Navigator>
  );
}

export default function App() {
  const [loaded, error] = useFonts({
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
