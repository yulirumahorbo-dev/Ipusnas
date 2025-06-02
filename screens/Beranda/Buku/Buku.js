import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import Populer from "../../../components/ManageBuku/Populer";
import { DUMMY_BOOK, DUMMY_KATEGORI } from "../../../util/Data";
import Kategori from "../../../components/ManageBuku/Kategori";

function Buku({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Kategori */}
      <View style={[styles.kategoriContainer, { marginTop: 8 }]}>
        <Text style={styles.kategori}>Kategori Buku</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SemuaKategori", DUMMY_KATEGORI)}
        >
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Kategori kategori={DUMMY_KATEGORI} />

      {/* Populer */}
      <View style={[styles.kategoriContainer, { marginTop: 20 }]}>
        <Text style={styles.kategori}>Buku Populer</Text>
        <TouchableOpacity>
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Populer books={DUMMY_BOOK} />

      {/* Rekomendsi berdasarkan kategori */}
      <View style={styles.kategoriContainer}>
        <Text style={styles.kategori}>Rekomendasi</Text>
        <TouchableOpacity>
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Text>(buku Pengembangan Diri)</Text>
      <Populer books={DUMMY_BOOK} />

      {/* Rekomendsi berdasarkan nama penulis */}
      <View style={styles.kategoriContainer}>
        <Text style={styles.kategori}>Rekomendasi</Text>
        <TouchableOpacity>
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Text>(buku lainnya dari Dee Lestari)</Text>
      <Populer books={DUMMY_BOOK} />

      {/* Rekomendsi berdasarkan penerbit */}
      <View style={styles.kategoriContainer}>
        <Text style={styles.kategori}>Rekomendasi</Text>
        <TouchableOpacity>
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Text>(buku lainnya dari Penerbit Gramedia)</Text>
      <Populer books={DUMMY_BOOK} />

      {/* Penerbit */}
      <View style={styles.kategoriContainer}>
        <Text style={styles.kategori}>Penerbit</Text>
        <TouchableOpacity>
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Kategori kategori={DUMMY_KATEGORI} />
    </ScrollView>
  );
}

export default Buku;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary0,
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
