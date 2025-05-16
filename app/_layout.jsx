import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TodoProvider } from "../context/TodoContext";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <TodoProvider>
      <Stack
        screenOptions={{
          headerTitle: "ToDo List",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center"
        }}
      />
    </TodoProvider>
  );
}
