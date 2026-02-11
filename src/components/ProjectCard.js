import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProjectCard({ project, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{project.name}</Text>
      <Text>Client: {project.clientName}</Text>
      <Text
        style={[
          styles.status,
          project.status === "active"
            ? styles.active
            : styles.completed,
        ]}
      >
        Status: {project.status}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    marginTop: 5,
    fontWeight: "bold",
  },
  active: {
    color: "green",
  },
  completed: {
    color: "gray",
  },
});
