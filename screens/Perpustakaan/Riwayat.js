import { StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import DaftarSemuaBuku from "../../components/ManageBuku/DaftarSemuaBuku";
import { DUMMY_BOOK } from "../../util/Data";

function Riwayat() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DaftarSemuaBuku books={DUMMY_BOOK} />
    </ScrollView>
  );
}

export default Riwayat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary0,
    paddingTop: 8,
    paddingBottom: 124,
  },
});
