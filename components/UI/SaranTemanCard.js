import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 3 - 16;

function SaranTemanCard({ foto, nama }) {
  return (
    <View style={styles.card}>
      <Image style={styles.foto} source={{ uri: foto }} resizeMode="cover" />
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.nama}>User</Text>
      <Button>Ikuti</Button>
    </View>
  );
}

export default SaranTemanCard;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    borderWidth: 0.5,
    borderColor: GlobalStyles.colors.primary800,
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
  },
  foto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: "center",
  },
  nama: {
    fontSize: 14,
    fontFamily: "open-sans",
  },
});
