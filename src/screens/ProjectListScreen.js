import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { getProjects } from "../services/projectService";
import ProjectCard from "../components/ProjectCard";
import FilterButtons from "../components/FilterButtons";
import SearchBar from "../components/SearchBar";

export default function ProjectListScreen({ navigation }) {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const projects = getProjects();

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.clientName.toLowerCase().includes(search.toLowerCase());

    if (filter === "ALL") return matchesSearch;
    if (filter === "ACTIVE")
      return matchesSearch && project.status === "active";
    if (filter === "COMPLETED")
      return matchesSearch && project.status === "completed";
  });

  return (
    <View style={styles.container}>
      <FilterButtons selected={filter} onSelect={setFilter} />
      <SearchBar value={search} onChange={setSearch} />

      <FlatList
        data={filteredProjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProjectCard
            project={item}
            onPress={() =>
              navigation.navigate("ProjectDetail", {
                projectId: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
});
