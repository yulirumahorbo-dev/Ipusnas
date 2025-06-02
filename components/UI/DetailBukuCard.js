import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

function DetailBukuCard({ rating, ukuranFile, jumlahBuku, stok }) {
  return (
    <View style={styles.card}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
          borderRightWidth: 0.5,
          borderRightColor: GlobalStyles.colors.primary800,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text>{rating} </Text>
          <Ionicons
            name="star"
            size={16}
            color={GlobalStyles.colors.accent500}
          />
        </View>
        <Text>4 Ulasan</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
          borderRightWidth: 0.5,
          borderRightColor: GlobalStyles.colors.primary800,
        }}
      >
        <Text>{ukuranFile}</Text>
        <Text>MB</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
          borderRightWidth: 0.5,
          borderRightColor: GlobalStyles.colors.primary800,
        }}
      >
        <Text>{jumlahBuku}</Text>
        <Text>Jumlah Buku</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text>{stok}</Text>
        <Text>Tersedia</Text>
      </View>
    </View>
  );
}

export default DetailBukuCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginBottom: 8,
  },
});
