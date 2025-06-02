import { useNavigation } from "@react-navigation/native";
import { Pressable, Image, StyleSheet } from "react-native";

function SampulBuku({ id, sampul }) {
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
    </Pressable>
  );
}

export default SampulBuku;

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
  sampul: {
    width: 120,
    height: 180,
    borderWidth: 0.25,
  },
});
