import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TodoProvider } from '../context/TodoContext';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
      <TodoProvider>
        <Stack />
      </TodoProvider>
  );
}
