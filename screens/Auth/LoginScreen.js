import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { login } from "../../util/auth";
import { AuthContext } from "../../store/auth-context";
import { fetchUser } from "../../util/firebase-user";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const { token, localId } = await login(email, password);
      authCtx.authenticate(token, email);

      const userData = await fetchUser(localId);
      authCtx.setUserData(userData);
      console.log("Fetched userData:", userData);
    } catch (error) {
      console.log("Login error:", error.response?.data || error.message);
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
