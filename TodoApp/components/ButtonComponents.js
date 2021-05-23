import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  // Checks if a color was assigned to a custom button, otherwise assigns a default color.
  let btnColor = props.color != undefined ? props.color : "#1be3d9";

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPressEvent}>
      <View style={[styles.buttonContainer, { backgroundColor: btnColor }]}>
        <Text style={{ fontSize: props.textSize, color: props.textColor, fontWeight:props.boldText }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
