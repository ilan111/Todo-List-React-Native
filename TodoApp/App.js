import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [getText, setText] = useState("");
  const [getList, setList] = useState(["item1", "item2"]);

  const addItem = () => {
    console.log(getText);
    setList([...getList, getText]);
    setText("");
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
      <ScrollView>
        {getList.map((item)=><Text>{item}</Text>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    color: "lightgrey",
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
