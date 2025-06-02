import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Notifikasi() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Text>Notifikasi Screen</Text>
      </View>
    </ScrollView>
  );
}

export default Notifikasi;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary0,
  },
});
