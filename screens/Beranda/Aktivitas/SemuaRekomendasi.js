import { ScrollView, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import DaftarSemuaBuku from "../../../components/ManageBuku/DaftarSemuaBuku";
import IconButton from "../../../components/UI/IconButton";

function SemuaRekomendasi({ route, navigation }) {
  const books = route.params;

  function backHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerButtonContainer}>
        <IconButton
          style={{ marginRight: 16 }}
          onPress={backHandler}
          icon="arrow-back"
          color={GlobalStyles.colors.primary800}
          size={24}
        />
        <Text style={styles.headerTitle}>Rekomendasi</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DaftarSemuaBuku books={books} />
      </ScrollView>
    </View>
  );
}

export default SemuaRekomendasi;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary0,
    paddingBottom: 124,
  },
  headerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 40,
    marginBottom: 8,
  },
  headerTitle: {
    flex: 1,
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: GlobalStyles.colors.primary800,
  },
});
