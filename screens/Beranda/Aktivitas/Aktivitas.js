import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { DUMMY_BOOK } from "../../../util/Data";

import TerakhirDibaca from "./TerakhirDibaca";
import Rekomendasi from "../../../components/ManageBuku/Rekomendasi";

TouchableOpacity;
function Aktivitas({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.kategori}>Terakhir Dibaca</Text>
      <TerakhirDibaca books={DUMMY_BOOK} />

      {/* Rekomendasi */}
      <View style={[styles.kategoriContainer, { marginTop: 20 }]}>
        <Text style={styles.kategori}>Rekomendasi</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SemuaRekomendasi", DUMMY_BOOK)}
        >
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Rekomendasi books={DUMMY_BOOK} />

      {/* ePustaka */}
      <View style={styles.kategoriContainer}>
        <Text style={styles.kategori}>ePustaka</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SemuaRekomendasi", DUMMY_BOOK)}
        >
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Rekomendasi books={DUMMY_BOOK} />

      {/* Layanan Perpustakaan RI */}
      <View style={styles.kategoriContainer}>
        <Text style={styles.kategori}>Layanan Perpustakaan RI</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SemuaRekomendasi", DUMMY_BOOK)}
        >
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Rekomendasi books={DUMMY_BOOK} />

      {/* Artikel */}
      <View style={styles.kategoriContainer}>
        <Text style={styles.kategori}>Artikel</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SemuaRekomendasi", DUMMY_BOOK)}
        >
          <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Rekomendasi books={DUMMY_BOOK} />
    </ScrollView>
  );
}

export default Aktivitas;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
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
