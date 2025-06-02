import {
  FlatList,
  Pressable,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import IconButton from "../../../components/UI/IconButton";

function SemuaKategori({ route, navigation }) {
  const kategori = route.params;

  function renderKategoriCard(itemData) {
    function pilihKategoriHandler() {
      navigation.navigate("DetailKategori", { kategoriId: itemData.item.id });
    }
    return (
      <Pressable onPress={pilihKategoriHandler} style={styles.card}>
        <Text style={styles.kategori}>{itemData.item.kategori}</Text>
      </Pressable>
    );
  }

  const sortedKategori = [...kategori].sort((a, b) =>
    a.kategori.localeCompare(b.kategori)
  );

  function backHandler() {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerButtonContainer}>
        <IconButton
          style={{ marginRight: 16 }}
          onPress={backHandler}
          icon="arrow-back"
          color={GlobalStyles.colors.primary800}
          size={24}
        />
        <Text style={styles.headerTitle}>Kategori</Text>
      </View>
      <FlatList
        data={sortedKategori}
        keyExtractor={(item) => item.id}
        renderItem={renderKategoriCard}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

export default SemuaKategori;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary0,
    paddingBottom: 124,
  },
  headerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 40,
  },
  headerTitle: {
    flex: 1,
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: GlobalStyles.colors.primary800,
  },
  card: {
    marginHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: GlobalStyles.colors.gray500,
    borderBottomWidth: 0.5,
  },
  kategori: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
