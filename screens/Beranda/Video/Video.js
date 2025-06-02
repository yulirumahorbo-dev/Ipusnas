import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function Video() {
  return (
    <View style={styles.container}>
      <Text>Video Screen</Text>
    </View>
  );
}

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: GlobalStyles.colors.primary0,
  },
});
