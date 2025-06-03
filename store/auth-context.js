import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: null,
  userData: null,
  isAuthenticated: false,
  isLoading: true,
  authenticate: (token, userData) => {},
  setUserData: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const [userData, setUserDataState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStoreAuth() {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        const storedUserData = await AsyncStorage.getItem("userData");

        if (storedToken) {
          setAuthToken(storedToken);
        }

        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setUserDataState(parsedUserData);
          console.log("✅ Restored userData from storage:", parsedUserData);
        }
      } catch (error) {
        console.log("Failed to load auth data from storage", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadStoreAuth();
  }, []);

  async function authenticate(token, userData) {
    setAuthToken(token);
    setUserDataState(userData);

    try {
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      console.log("✅ Stored token and userData successfully");
    } catch (error) {
      console.log("❌ Failed to store auth data", error);
    }
  }

  async function setUserData(data) {
    setUserDataState(data);

    try {
      await AsyncStorage.setItem("userData", JSON.stringify(data));
      console.log("✅ Updated userData in storage");
    } catch (error) {
      console.log("❌ Failed to update userData in storage", error);
    }
  }

  async function logout() {
    setAuthToken(null);
    setUserDataState(null);

    try {
      await AsyncStorage.multiRemove(["token", "userData"]);
      console.log("✅ Cleared auth storage on logout");
    } catch (error) {
      console.log("❌ Failed to clear auth storage on logout", error);
    }
  }

  const value = {
    token: authToken,
    userData: userData,
    setUserData: setUserData,
    isLoading: isLoading,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
