import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import Label from "./Label";
import { GlobalStyles } from "../../constants/styles";

function BukuCardHorizontal({ sampul, judul, penulis, stok }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.75 : 1 }]}
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
  );
}

export default BukuCardHorizontal;

const styles = StyleSheet.create({
  card: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: GlobalStyles.colors.primary800,
    borderBottomColor: GlobalStyles.colors.primary800,
    padding: 16,
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
    fontWeight: "bold",
  },
  penulis: {
    fontSize: 14,
  },
});
