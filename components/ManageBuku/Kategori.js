import { FlatList } from "react-native";
import KategoriCard from "../UI/KategoriCard";

function Kategori({ kategori }) {
  function renderKategoriCard(itemData) {
    return <KategoriCard {...itemData.item} />;
  }

  return (
    <FlatList
      data={kategori.slice(0, 6)}
      keyExtractor={(item) => item.id}
      renderItem={renderKategoriCard}
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: "space-between",
        marginVertical: 8,
      }}
      scrollEnabled={false}
    />
  );
}

export default Kategori;
