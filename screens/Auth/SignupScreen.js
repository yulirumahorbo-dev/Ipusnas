import { useContext, useState } from "react";
import { Alert } from "react-native";

import { createUser, storeUser } from "../../util/auth";
import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ name, email, password }) {
    setIsAuthenticating(true);
    try {
      const { token, localId } = await createUser(email, password);

      await storeUser(localId, {
        name: name,
        email,
        createdAt: new Date().toISOString(),
      });
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authetication failed!",
        "Could not create user, please check your input and try again later."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
