import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";
import SaranTeman from "../../components/ManagePengguna/SaranTeman";
import { DUMMY_USER, DUMMY_POST } from "../../util/Data";
import Postingan from "../../components/ManagePengguna/Postingan";

function UntukMu() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 16 }}>
        <View style={styles.kategoriContainer}>
          <Text style={styles.kategori}>Rekomendasi Teman</Text>
          <TouchableOpacity>
            <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <SaranTeman users={DUMMY_USER} />
      </View>

      <Postingan posts={DUMMY_POST} />
    </ScrollView>
  );
}

export default UntukMu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  kategoriContainer: {
    marginTop: 16,
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
