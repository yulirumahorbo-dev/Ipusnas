import { StyleSheet, Text, View } from "react-native";

function Label({ children, backgroundColor, color }) {
  return (
    <View style={[styles.card, (backgroundColor = { backgroundColor })]}>
      <Text style={[styles.title, (color = { color })]}>{children}</Text>
    </View>
  );
}

export default Label;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    padding: 4,
  },
  title: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 10,
  },
});
