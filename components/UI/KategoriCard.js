import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 3 - 16;

function KategoriCard({ kategori, id }) {
  const navigation = useNavigation();

  function pilihKategoriHandler() {
    navigation.navigate("DetailKategori", { kategoriId: id });
  }

  return (
    <Pressable
      onPress={pilihKategoriHandler}
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.75 : 1 }]}
    >
      <Text style={styles.title}>{kategori}</Text>
    </Pressable>
  );
}

export default KategoriCard;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    borderWidth: 0.5,
    borderColor: GlobalStyles.colors.primary800,
    borderRadius: 16,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: GlobalStyles.colors.primary800,
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 14,
  },
});
