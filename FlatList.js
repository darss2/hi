import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function games() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (inputText.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: inputText.trim(),
      completed: false,
    };

    setTasks([.tasks, newTask]);
    setInputText("");
  };

  // Mark task as completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Display each task
  const renderTask = ({ item }) => {
    return (
      <View style={styles.taskContainer}>
        <TouchableOpacity
          style={styles.taskContent}
          onPress={() => toggleTask(item.id)}
        >
          <View
            style={[
              styles.checkbox,
              item.completed && styles.checkboxCompleted,
            ]}
          >
            {item.completed && <Text style={styles.check}>✓</Text>}
          </View>

          <Text
            style={[
              styles.taskText,
              item.completed && styles.completedText,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(item.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My To-Do List</Text>
        <Text style={styles.subtitle}>
          Stay organized and get things done!
        </Text>
      </View>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={addTask}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Task Counter */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>
          Tasks: {tasks.length}
        </Text>

        <Text style={styles.counterText}>
          Completed: {tasks.filter((task) => task.completed).length}
        </Text>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyTitle}>
              No tasks yet
            </Text>
            <Text style={styles.emptyText}>
              Add your first task above!
            </Text>
          </View>
        }
        contentContainerStyle={
          tasks.length === 0
            ? styles.emptyList
            : styles.list
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },

  header: {
    backgroundColor: "#3155D9",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 14,
    color: "#DDE4FF",
    marginTop: 5,
  },

  inputContainer: {
    flexDirection: "row",
    margin: 20,
    marginBottom: 10,
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  addButton: {
    height: 50,
    backgroundColor: "#3155D9",
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
  },

  counterText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
  },

  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },

  taskContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#3155D9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  checkboxCompleted: {
    backgroundColor: "#3155D9",
  },

  check: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  taskText: {
    flex: 1,
    fontSize: 15,
    color: "#222",
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  deleteButton: {
    backgroundColor: "#FFE8E8",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    marginLeft: 10,
  },

  deleteText: {
    color: "#D93636",
    fontSize: 12,
    fontWeight: "bold",
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 10,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  emptyText: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
});
