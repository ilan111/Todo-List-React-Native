import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  let btnColor;
  let textColor;
  if (props.disabled) {
    btnColor = "grey";
    textColor = "white";
  }
  // Checks if a color was assigned to a custom button, otherwise assigns a default color.
  else {
    btnColor = props.color != undefined ? props.color : "#1be3d9";
    textColor = props.textColor != undefined ? props.textColor : "black";
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPressEvent}
      disabled={props.disabled}
    >
      <View style={[styles.buttonContainer, { backgroundColor: btnColor }]}>
        <Text
          style={{
            fontSize: props.textSize,
            color: textColor,
            fontWeight: props.boldText,
          }}
        >
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
