import { StyleSheet, FlatList } from "react-native";
import SampulBuku from "../UI/SampulBuku";

function Rekomendasi({ books }) {
  function renderSampulBuku(itemData) {
    return <SampulBuku {...itemData.item} />;
  }

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id}
      renderItem={renderSampulBuku}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
    />
  );
}

export default Rekomendasi;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
