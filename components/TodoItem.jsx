import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TodoContext } from '../context/TodoContext';

export default function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{todo.title}</Text>
      <Ionicons name='trash' size={25} color='black' onPress={() => deleteTodo(todo.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 20
  },
});
