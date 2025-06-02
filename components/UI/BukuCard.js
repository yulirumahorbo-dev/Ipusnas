import {
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from "react-native";
import Label from "./Label";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2.08 - 16;

function BukuCard({ id, sampul, judul, penulis, stok }) {
  const navigation = useNavigation();

  function pilihBukuHandler() {
    navigation.navigate("DetailBuku", { bukuId: id });
  }

  return (
    <Pressable
      onPress={pilihBukuHandler}
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.75 : 1 }]}
    >
      <Image
        style={styles.sampul}
        source={{ uri: sampul }}
        resizeMode="contain"
      />
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
    </Pressable>
  );
}

export default BukuCard;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    borderWidth: 0.5,
    borderColor: GlobalStyles.colors.primary800,
    borderRadius: 16,
    padding: 16,
  },
  sampul: {
    width: 140,
    height: 210,
    alignSelf: "center",
    borderWidth: 0.25,
    borderColor: GlobalStyles.colors.primary800,
    marginBottom: 8,
  },
  judul: {
    fontSize: 16,
    fontWeight: "bold",
  },
  penulis: {
    fontSize: 14,
  },
});
