import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import TodoItem from "../components/TodoItem";
import { TodoContext } from "../context/TodoContext";
import AddTodo from "./add-todo";

export default function Home() {
  const { todos } = useContext(TodoContext);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem todo={item} />}
        ListEmptyComponent={<Text style={styles.notText}>No Todos</Text>}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.addBtn}
      >
        <Text>Add Todo</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <AddTodo onClose={() => router.push("/home")}/>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.closeBtn}
            >
              <Text style={{ color: "white" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  listContent: {
    flexGrow: 1,
  },
  notText: {
    fontSize: 25,
    textAlign: "center",
  },
  addBtn: {
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: "gray",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  closeBtn: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 12,
    borderRadius: 8,
    alignSelf: "center",
  },
});
