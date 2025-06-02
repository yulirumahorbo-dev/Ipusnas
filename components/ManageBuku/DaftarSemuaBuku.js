import { FlatList } from "react-native";
import BukuCard from "../UI/BukuCard";

function DaftarSemuaBuku({ books }) {
  function renderBukuCard(itemData) {
    return <BukuCard {...itemData.item} />;
  }

  return (
    <FlatList
      data={books.slice(0, 100)}
      keyExtractor={(item) => item.id}
      renderItem={renderBukuCard}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginBottom: 16,
      }}
      scrollEnabled={false}
    />
  );
}

export default DaftarSemuaBuku;
