import { GlobalStyles } from "../../constants/styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Mengikuti from "./Mengikuti";
import UntukMu from "./UntukMu";

const Tab = createMaterialTopTabNavigator();

function Linimasa() {
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
      <Tab.Screen name="Mengikuti" component={Mengikuti} />
      <Tab.Screen name="Untuk Mu" component={UntukMu} />
    </Tab.Navigator>
  );
}

export default Linimasa;
