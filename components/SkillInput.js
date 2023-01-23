import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const SkillInput = (props) => {
  // store the state, initially empty string.
  // the state is updated with every keystroke in the skillInputHandler() and we will use it in the addSkilsHandler()
  const [enteredSkillText, setEnteredSkillText] = useState("");
  // add a function that is called skillsInputHandler that is responsable for fetching that user input as the user types
  // to use these function we use special events listining props that are provided by React Native on its components
  // to connect skillsInputHandler function to text input we use special event listening prop onChangeText() prop.

  function skillsInputHandler(enteredText) {
    // initially it is empty but it will be updated
    setEnteredSkillText(enteredText);
    console.log(enteredText);
  }

  function addSkillsHandler() {
    props.onAddSkill(enteredSkillText);
    setEnteredSkillText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/image.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your skills!"
          // here we do not add parenthesis this means we do not execute this function here
          // I want that this function execute when text changes in textInput
          onChangeText={skillsInputHandler}
          value={enteredSkillText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color={"white"}
              title="Add Skill"
              onPress={addSkillsHandler}
            />
          </View>
          <View style={styles.button}>
            <Button color={"white"} title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SkillInput;

// style sheet object
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#66CDAA",
  },

  textInput: {
    borderWidth: 2,
    borderColor: "#6e0aff",
    width: "70%",
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#DAD5EE",
  },

  buttonContainer: { flexDirection: "column", marginTop: 16 },

  button: {
    width: 100,
    marginHorizontal: 8,
    backgroundColor: "#6e0aff",
    marginBottom: 8,
    borderRadius: 5,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 50,
    borderRadius: "50%",
  },
});
