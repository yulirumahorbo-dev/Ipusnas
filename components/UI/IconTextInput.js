import { View, StyleSheet, TextInput, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

function IconTextInput({ icon, size, color, search, setSearch, placeholder }) {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name={icon} size={size} color={color} />
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder={placeholder}
        placeholderTextColor={GlobalStyles.colors.primary800}
        style={styles.textInput}
      />
      {search.length > 0 && (
        <Pressable onPress={() => setSearch("")}>
          <Ionicons name="close" size={20} color={color} style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
}

export default IconTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: GlobalStyles.colors.primary800,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { marginHorizontal: 4 },
  textInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: "open-sans",
  },
});
