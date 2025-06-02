import { StyleSheet, FlatList } from "react-native";
import PostinganCard from "../UI/PostinganCard";

function Postingan({ posts }) {
  function renderPostinganCard(itemData) {
    return <PostinganCard {...itemData.item} />;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={renderPostinganCard}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
      scrollEnabled={false}
    />
  );
}

export default Postingan;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
