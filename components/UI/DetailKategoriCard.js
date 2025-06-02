import { StyleSheet, View, Text } from "react-native";

function DetailKategoriCard({ kategori }) {
  return (
    <View style={styles.details}>
      <Text>{kategori}</Text>
    </View>
  );
}

export default DetailKategoriCard;

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
});
