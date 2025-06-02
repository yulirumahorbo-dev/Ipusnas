import { Pressable, Text, View, Image, StyleSheet } from "react-native";

function ItemBuku({ sampul, judul, penulis, rating, tersedia }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View>
        <View>
          <Image style={{ width: 60, height: 80 }} source={{ uri: sampul }} />
        </View>

        <View>
          <Text>{judul}</Text>
          <Text>{penulis}</Text>
          <Text>{rating}</Text>
          <Text>{tersedia.toString()}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ItemBuku;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
