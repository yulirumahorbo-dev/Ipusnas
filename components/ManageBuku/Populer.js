import { FlatList, Text } from "react-native";
import SampulBuku from "../UI/SampulBuku";

function Populer({ books }) {
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

export default Populer;
