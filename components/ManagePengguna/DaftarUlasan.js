import { StyleSheet, FlatList } from "react-native";
import UlasanCard from "../UI/UlasanCard";

function DaftarUlasan({ ulasan }) {
  function renderUlasanCard(itemData) {
    return <UlasanCard {...itemData.item} />;
  }

  return (
    <FlatList
      data={ulasan}
      keyExtractor={(item) => item.id}
      renderItem={renderUlasanCard}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
}

export default DaftarUlasan;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
