import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function FilterButtons({ selected, onSelect }) {
  const filters = ["ALL", "ACTIVE", "COMPLETED"];

  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.button,
            selected === filter && styles.selected,
          ]}
          onPress={() => onSelect(filter)}
        >
          <Text
            style={[
              styles.text,
              selected === filter && styles.selectedText,
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  button: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#eee",
  },
  selected: {
    backgroundColor: "#007bff",
  },
  text: {
    fontWeight: "bold",
  },
  selectedText: {
    color: "white",
  },
});
