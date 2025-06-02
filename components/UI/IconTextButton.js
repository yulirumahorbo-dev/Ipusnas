import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

function IconTextButton({
  icon,
  size,
  color,
  onPress,
  placeholder,
  style,
  fontColor,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        { opacity: pressed ? 0.75 : 1 },
        style,
      ]}
    >
      <Ionicons style={styles.icon} name={icon} size={size} color={color} />
      <Text style={[styles.placeholder, { color: fontColor }]}>
        {placeholder}
      </Text>
    </Pressable>
  );
}

export default IconTextButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: GlobalStyles.colors.primary800,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  icon: { marginHorizontal: 4 },
  placeholder: {
    flex: 1,
    fontSize: 16,
    fontFamily: "open-sans",
    color: GlobalStyles.colors.primary800,
  },
});
