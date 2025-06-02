import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function SemuaPopulasi() {
  return (
    <View style={styles.container}>
      <Text>SemuaPopulasi Screen</Text>
    </View>
  );
}

export default SemuaPopulasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary0,
  },
});
