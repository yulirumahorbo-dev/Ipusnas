import { ScrollView, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import DaftarUlasan from "../../components/ManagePengguna/DaftarUlasan";
import { DUMMY_ULASAN } from "../../util/Data";

function Ulasan() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DaftarUlasan ulasan={DUMMY_ULASAN} />
    </ScrollView>
  );
}

export default Ulasan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: GlobalStyles.colors.primary0,
    paddingBottom: 124,
  },
});
