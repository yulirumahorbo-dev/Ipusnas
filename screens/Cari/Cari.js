import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import IconTextInput from "../../components/UI/IconTextInput";
import IconButton from "../../components/UI/IconButton";
import { useState } from "react";

function Cari({ navigation }) {
  const [search, setSearch] = useState("");
  function backHandler() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerButtonContainer}>
        <IconButton
          style={{ marginRight: 16 }}
          onPress={backHandler}
          icon="arrow-back"
          color={GlobalStyles.colors.primary800}
          size={24}
        />
        <IconTextInput
          search={search}
          setSearch={setSearch}
          icon="search"
          color={GlobalStyles.colors.primary800}
          size={24}
          placeholder="Cari buku, artikel, video, dll."
        />
      </View>
    </View>
  );
}

export default Cari;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: GlobalStyles.colors.primary0,
  },
  headerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
});
