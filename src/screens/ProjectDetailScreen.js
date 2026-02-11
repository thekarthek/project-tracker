import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { getProjectById } from "../services/projectService";

export default function ProjectDetailScreen({ route, navigation }) {
  const { projectId } = route.params;
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <View style={styles.container}>
        <Text>Project not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{project.name}</Text>
      <Text>Client: {project.clientName}</Text>
      <Text>Status: {project.status}</Text>
      <Text style={styles.description}>{project.description}</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
  },
});
