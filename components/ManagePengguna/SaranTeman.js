import { StyleSheet, FlatList } from "react-native";
import SaranTemanCard from "../UI/SaranTemanCard";

function SaranTeman({ users }) {
  function renderSaranTeman(itemData) {
    return <SaranTemanCard {...itemData.item} />;
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={renderSaranTeman}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginVertical: 16 }}
    />
  );
}

export default SaranTeman;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
