import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProjectListScreen from "./src/screens/ProjectListScreen";
import ProjectDetailScreen from "./src/screens/ProjectDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Projects"
          component={ProjectListScreen}
        />
        <Stack.Screen
          name="ProjectDetail"
          component={ProjectDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
