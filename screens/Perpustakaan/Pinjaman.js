import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import DaftarSemuaBuku from "../../components/ManageBuku/DaftarSemuaBuku";
import { DUMMY_BOOK } from "../../util/Data";

function Pinjaman() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DaftarSemuaBuku books={DUMMY_BOOK} />
    </ScrollView>
  );
}

export default Pinjaman;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary0,
    paddingTop: 8,
    paddingBottom: 124,
  },
});
