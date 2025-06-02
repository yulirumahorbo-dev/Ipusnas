import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DUMMY_BOOK, DUMMY_KATEGORI } from "../util/Data";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import DaftarSemuaBuku from "../components/ManageBuku/DaftarSemuaBuku";

function DetailKategori({ route, navigation }) {
  const kategoriId = route.params.kategoriId;

  const kategoriTerpilih = DUMMY_KATEGORI.find(
    (kategori) => kategori.id === kategoriId
  );

  const BukuKategori = DUMMY_BOOK.filter(
    (buku) => buku.kategori_id === kategoriTerpilih.id
  );

  function backHandler() {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerButtonContainer}>
        <IconButton
          style={{ marginRight: 16 }}
          onPress={backHandler}
          icon="arrow-back"
          color={GlobalStyles.colors.primary800}
          size={24}
        />
        <Text style={styles.headerTitle}>{kategoriTerpilih.kategori}</Text>
      </View>

      <DaftarSemuaBuku books={BukuKategori} />
    </ScrollView>
  );
}

export default DetailKategori;

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
