import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function Audio() {
  return (
    <View style={styles.container}>
      <Text>Audio Screen</Text>
    </View>
  );
}

export default Audio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: GlobalStyles.colors.primary0,
  },
});
