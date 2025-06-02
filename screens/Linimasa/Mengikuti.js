import { ScrollView, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_POST } from "../../util/Data";
import Postingan from "../../components/ManagePengguna/Postingan";

function Mengikuti() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Postingan posts={DUMMY_POST} />
    </ScrollView>
  );
}

export default Mengikuti;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary0,
  },
});
