import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}></TextInput>
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 64,
    color:'lightgrey'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width:'70%',
    justifyContent:"space-between"
  },
  textInput:{
    borderColor: 'grey',
    borderWidth: 2,
    width: '70%'
  }
});
