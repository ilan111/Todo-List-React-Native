import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import CustomButton from "./components/ButtonComponents";
import { todoItems } from "./constants/dummyToDo";

export default function App() {
  const [getText, setText] = useState("");
  const [getList, setList] = useState(todoItems);
  const [editingItem, setEditingItem] = useState(0);

  const addItem = () => {
    console.log(getText);
    setList([...getList, { key: Math.random().toString(), data: getText }]);
    setText("");
    Keyboard.dismiss;
  };

  const removeItem = (itemKey) => {
    var list = getList.filter((item) => item.key != itemKey);
    setList(list);
    // setList((list) => getList.filter(item.key != itemKey));
  };

  const editItem = (item) => {
    setText(item.data);
    setEditingItem(item.key);
  };

  const updateItem = () => {
    setList((list) =>
      getList.map((item) =>
        item.key === editingItem ? { key: item.key, data: getText } : item
      )
    );
    setText('');
    setEditingItem(0);
  };

  const scrollView = (
    <ScrollView style={styles.ScrollView}>
      {getList.map((item, index) => (
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.4}
          onPress={() => editItem(item)}
        >
          <View style={styles.ScrollViewItem}>
            <Text style={styles.scrollViewText}>
              {index + 1}. {item.data}
            </Text>
            <TouchableOpacity onPress={() => removeItem(item.key)}>
              <View style={styles.crossContainer}>
                <Text style={styles.crossText}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const emptyScrollView = (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ fontStyle: "italic", fontSize: 20, color: "grey" }}>
        Your list is empty
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Item"
          onChangeText={(text) => setText(text)}
          value={getText}
        />
        <CustomButton
          text={editingItem === 0 ? "ADD" : "UPDATE"}
          textSize={20}
          // textColor={"black"}
          // color={"blue"}
          boldText={"bold"}
          onPressEvent={editingItem === 0 ? addItem : updateItem}
          disabled={getText.length <= 0}
        />
      </View>
      {getList.length <= 0 ? emptyScrollView : scrollView}
    </View>
  );
}

const styles = StyleSheet.create({
  crossContainer: {
    backgroundColor: "black",
    borderRadius: 50,
    padding: 5,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  crossText: {
    fontSize: 16,
    color: "#1be3d9",
    fontWeight: "bold",
  },
  scrollViewText: {
    fontSize: 26,
    color: "black",
  },
  ScrollView: {
    paddingTop: 25,
    width: "100%",
  },
  ScrollViewItem: {
    backgroundColor: "#1be3d9",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 64,
    color: "#1be3d9",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "grey",
    // borderWidth: 2,
    borderBottomWidth: 2,
    width: "70%",
    // borderRadius: 50,
    fontSize: 16,
    padding: 10,
  },
});
