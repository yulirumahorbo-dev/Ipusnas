import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DetailBukuCard from "../components/UI/DetailBukuCard";
import { DUMMY_BOOK } from "../util/Data";
import { GlobalStyles } from "../constants/styles";
import DeskripsiBuku from "../components/UI/DeskripsiBuku";

function DetailBuku({ route }) {
  const bukuId = route.params.bukuId;

  const bukuTerpilih = DUMMY_BOOK.find((buku) => buku.id === bukuId);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={[styles.judul, { textAlign: "center", fontSize: 18 }]}>
        {bukuTerpilih.judul}
      </Text>

      <View style={styles.shadowBox}>
        <Image style={styles.sampul} source={{ uri: bukuTerpilih.sampul }} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "open-sans", fontSize: 14 }}>oleh </Text>
        <TouchableOpacity>
          <Text style={styles.penulis}>{bukuTerpilih.penulis}</Text>
        </TouchableOpacity>
      </View>

      <DetailBukuCard
        rating={bukuTerpilih.rating}
        ukuranFile={bukuTerpilih.ukuranFile}
        jumlahBuku={bukuTerpilih.jumlahBuku}
        stok={bukuTerpilih.stok}
      />

      <DeskripsiBuku deskripsi={bukuTerpilih.deskripsi} />

      <View>
        <Text style={styles.judul}>Tentang Buku Ini</Text>
        <Text style={styles.keterangan}>Jumlah Pembaca</Text>
        <Text style={styles.detailKeterangan}>
          {bukuTerpilih.jumlahPembaca}
        </Text>

        <Text style={styles.keterangan}>Penerbit</Text>
        <Text style={styles.detailKeterangan}>{bukuTerpilih.penerbit}</Text>

        <Text style={styles.keterangan}>Tahun Terbit</Text>
        <Text style={styles.detailKeterangan}>{bukuTerpilih.tahunTerbit}</Text>

        <Text style={styles.keterangan}>EISBN</Text>
        <Text style={styles.detailKeterangan}>{bukuTerpilih.EISBN}</Text>

        <Text style={styles.keterangan}>Kategori</Text>
        <Text style={styles.detailKeterangan}>{bukuTerpilih.kategori}</Text>
      </View>

      <View>
        <Text>ULASAN</Text>
      </View>

      {/* Flatlist Buku Serupa */}
    </ScrollView>
  );
}

export default DetailBuku;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  shadowBox: {
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 24,
    width: 120,
    height: 180,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  sampul: {
    width: 120,
    height: 180,
    resizeMode: "cover",
  },
  penulis: {
    textDecorationLine: "underline",
    fontFamily: "open-sans",
    color: GlobalStyles.colors.primary700,
    fontSize: 14,
  },
  judul: { fontFamily: "open-sans-bold", fontSize: 16, marginBottom: 8 },
  keterangan: {
    color: GlobalStyles.colors.primary800,
    fontFamily: "open-sans",
    fontSize: 12,
  },
  detailKeterangan: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    marginBottom: 8,
  },
});
