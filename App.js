import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Course from "./components/Course";
import Subjects from "./components/Subjects";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerStyle: { backgroundColor: "#e2bee2" } }}
        >
          <Stack.Screen name="login" component={Login}></Stack.Screen>
          <Stack.Screen name="profile" component={Profile}></Stack.Screen>
          <Stack.Screen name="course" component={Course}></Stack.Screen>
          <Stack.Screen name="subjects" component={Subjects}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
