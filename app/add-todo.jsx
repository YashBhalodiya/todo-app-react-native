import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { TodoContext } from "../context/TodoContext";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(TodoContext);
  const router = useRouter();

  const handleAdd = () => {
    if (title.trim()) {
      addTodo(title);
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo title"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.addBtn}>
        <Text style={{fontSize: 20}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    width: "100%",
    height: "60",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  addBtn: {
    width: 150,
    height: 50,
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
