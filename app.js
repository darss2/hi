import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import CourseListScreen from "./CourseListScreen";
import CourseDetailsScreen from "./CourseDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3155D9",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Student Akjbhpp" }}
        />

        <Stack.Screen
          name="Courses"
          component={CourseListScreen}
          options={{ title: "My Courses" }}
        />

        <Stack.Screen
          name="CourseDetails"
          component={CourseDetailsScreen}
          options={{ title: "Course Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
