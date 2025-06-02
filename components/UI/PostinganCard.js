import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import Label from "./Label";
import { GlobalStyles } from "../../constants/styles";
import IconButton from "./IconButton";

function PostinganCard({
  foto,
  nama,
  tanggal,
  keterangan,
  sampul,
  judul,
  penulis,
  stok,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={{ uri: foto }} resizeMode="cover" />
      <View>
        <View style={styles.namaContainer}>
          <Text style={styles.nama}>{nama}</Text>
          <Text style={styles.tanggal}>{tanggal}</Text>
        </View>
        <Text style={styles.keterangan}>{keterangan}</Text>
        <Pressable
          style={({ pressed }) => [
            styles.bookCard,
            { opacity: pressed ? 0.75 : 1 },
          ]}
        >
          <Image
            style={styles.sampul}
            source={{ uri: sampul }}
            resizeMode="contain"
          />
          <View style={{ marginRight: 16 }}>
            <View style={{ flexDirection: "row" }}>
              {stok === 0 ? (
                <Label
                  backgroundColor={GlobalStyles.colors.gray100}
                  color={GlobalStyles.colors.gray700}
                >
                  Tidak Tersedia
                </Label>
              ) : (
                <Label
                  backgroundColor={GlobalStyles.colors.green100}
                  color={GlobalStyles.colors.green300}
                >
                  Tersedia
                </Label>
              )}
            </View>

            <Text numberOfLines={2} style={styles.judul}>
              {judul}
            </Text>
            <Text numberOfLines={2} style={styles.penulis}>
              {penulis}
            </Text>
          </View>
        </Pressable>

        <View style={styles.buttons}>
          <IconButton
            icon="heart-outline"
            color={GlobalStyles.colors.primary800}
            size={24}
          />
          <IconButton
            icon="chatbubbles-outline"
            color={GlobalStyles.colors.primary800}
            size={24}
          />
        </View>
      </View>
    </View>
  );
}

export default PostinganCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: GlobalStyles.colors.primary800,
  },
  foto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  namaContainer: { flexDirection: "row", alignItems: "center" },
  nama: {
    fontSize: 14,
    fontFamily: "open-sans-bold",
    marginRight: 8,
  },
  tanggal: {
    fontSize: 12,
    fontFamily: "open-sans",
  },
  keterangan: {
    fontSize: 14,
    fontFamily: "open-sans",
  },
  bookCard: {
    marginVertical: 16,
    flexDirection: "row",
  },
  sampul: {
    width: 80,
    height: 120,
    alignSelf: "center",
    borderWidth: 0.25,
    borderColor: GlobalStyles.colors.primary800,
    marginRight: 16,
  },
  judul: {
    maxWidth: 220,
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
  penulis: {
    fontSize: 14,
    fontFamily: "open-sans",
  },
  buttons: {
    flexDirection: "row",
    maxWidth: 60,
    justifyContent: "space-between",
  },
});
