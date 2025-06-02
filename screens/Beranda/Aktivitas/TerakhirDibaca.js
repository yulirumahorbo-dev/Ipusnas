import { Text, Image, StyleSheet, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../../../constants/styles";

function TerakhirDibaca({ books }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.75 : 1 }]}
    >
      <LinearGradient
        colors={["#d3d3d3", "#ffffff"]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.65, 0.35]}
      />

      <View style={styles.shadowBox}>
        <Image
          style={styles.sampul}
          source={{ uri: books[2].sampul }}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.judul}>{books[2].judul}</Text>
      <Text style={styles.penulis}>{books[2].penulis}</Text>
    </Pressable>
  );
}

export default TerakhirDibaca;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
    alignItems: "center",
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  shadowBox: {
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 24,
    width: 100,
    height: 150,
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
    width: 100,
    height: 150,
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
