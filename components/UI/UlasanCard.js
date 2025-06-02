import { Pressable, StyleSheet, Text, ScrollView } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function UlasanCard({ judul, penulis }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable
        style={({ pressed }) => [
          styles.bookCard,
          { opacity: pressed ? 0.75 : 1 },
        ]}
      >
        <Text numberOfLines={2} style={styles.judul}>
          {judul}
        </Text>
        <Text numberOfLines={2} style={styles.penulis}>
          {penulis}
        </Text>
        <Text>Rating</Text>
        <Text>Tanggal</Text>
        <Text>Ulasan</Text>
        <Text>Ada 1 balasan</Text>
      </Pressable>
    </ScrollView>
  );
}

export default UlasanCard;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: GlobalStyles.colors.primary800,
  },
  bookCard: {
    paddingVertical: 16,
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
