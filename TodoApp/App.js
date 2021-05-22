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
} from "react-native";

export default function App() {
  const [getText, setText] = useState("");
  const [getList, setList] = useState([]);

  const addItem = () => {
    console.log(getText);
    setList([...getList, { key: Math.random().toString(), data: getText }]);
    setText("");
  };

  const removeItem = (itemKey) => {
    // var list = getList.filter((item) => item.key != itemKey);
    // setList(list);
    setList((list) => getList.filter(item.key != itemKey));
  };

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
        <Button title="Add" onPress={addItem} />
      </View>
      <View>
        <Text style={{ fontSize: 25 }}>{getText}</Text>
      </View>
      <ScrollView style={styles.ScrollView}>
        {getList.map((item) => (
          <TouchableOpacity
            key={item.key}
            activeOpacity={0.4}
            onPress={() => removeItem(item.key)}
          >
            <View style={styles.ScrollViewItem}>
              <Text style={styles.scrollViewText}>{item.data}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
