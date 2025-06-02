import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_BOOK } from "../../util/Data";
import Populer from "../../components/ManageBuku/Populer";

function Antrian() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Antrian </Text>

      <View>
        <View style={[styles.kategoriContainer, { marginTop: 8 }]}>
          <Text style={styles.kategori}>Tersedia</Text>
          <TouchableOpacity>
            <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <Populer books={DUMMY_BOOK} />
      </View>

      <View>
        <View style={styles.kategoriContainer}>
          <Text style={styles.kategori}>Semua Antrian</Text>
          <TouchableOpacity>
            <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <Populer books={DUMMY_BOOK} />
      </View>
    </View>
  );
}

export default Antrian;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  headerTitle: {
    marginHorizontal: 16,
    marginTop: 40,
    marginBottom: 8,
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: GlobalStyles.colors.primary800,
    textAlign: "center",
  },
  kategoriContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  kategori: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonLihatSemua: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: GlobalStyles.colors.primary800,
  },
});
