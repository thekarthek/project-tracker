import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({ searchText, setSearchText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search by project or client..."
      value={searchText}
      onChangeText={setSearchText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
  },
});
