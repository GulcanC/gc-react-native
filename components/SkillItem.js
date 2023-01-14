import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const SkillItem = (props) => {
  return (
    <View style={styles.skillItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.skillItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default SkillItem;

const styles = StyleSheet.create({
  skillItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#6e0aff",
  },
  skillItemText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
