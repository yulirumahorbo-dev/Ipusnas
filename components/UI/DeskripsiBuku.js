import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

function DeskripsiBuku({ deskripsi, maxLength = 150 }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const isLongText = deskripsi.length > maxLength;
  const displayText = expanded
    ? deskripsi
    : deskripsi.slice(0, maxLength) + (isLongText ? "..." : "");

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Sinopsis</Text>
      <Text style={styles.teksDeskripsi}>{displayText}</Text>
      {isLongText && (
        <TouchableOpacity onPress={toggleExpanded}>
          {expanded ? (
            <View style={styles.buttonContainer}>
              <Ionicons
                name="chevron-up-outline"
                size={16}
                color={GlobalStyles.colors.primary500}
              />
              <Text style={styles.buttonTeks}>Lihat lebih sedikit</Text>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <Ionicons
                name="chevron-down-outline"
                size={16}
                color={GlobalStyles.colors.primary500}
              />
              <Text style={styles.buttonTeks}>Lihat selengkapnnya</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  judul: { fontFamily: "open-sans-bold", fontSize: 16 },
  teksDeskripsi: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: GlobalStyles.colors.gray700,
    lineHeight: 20,
    marginVertical: 8,
    textAlign: "justify",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTeks: {
    marginLeft: 6,
    color: GlobalStyles.colors.primary500,
    fontFamily: "open-sans",
    fontSize: 14,
  },
});

export default DeskripsiBuku;
