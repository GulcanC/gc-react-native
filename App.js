// text and view are core compnents
// ScrollView allows you to create scrolable list or text
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  // ScrollView,
  FlatList,
} from "react-native";
// import useState hook
import { useState } from "react";
// regular functioanal component,  App is root component

export default function App() {
  // store the state, initially empty string.
  // the state is updated with every keystroke in the skillInputHandler() and we will use it in the addSkilsHandler()
  const [enteredSkillText, setEnteredSkillText] = useState("");
  // create other state to manage list of skills, it will be initially an empty array
  const [skills, setSkills] = useState([]);
  // add a function that is called skillsInputHandler that is responsable for fetching that user input as the user types
  // to use these function we use special events listining props that are provided by React Native on its components
  // to connect skillsInputHandler function to text input we use special event listening prop onChangeText() prop.

  function skillsInputHandler(enteredText) {
    // initially it is empty but it will be updated
    setEnteredSkillText(enteredText);
    console.log(enteredText);
  }
  // this function addSkillsHandler() which should be fired when this button here is clicked
  // in this function we will receive the value automatically

  function addSkillsHandler() {
    // it will reach the state
    console.log(enteredSkillText);
    // create a new array and use spread operator to spread my existing skills and add a new skill
    // setSkills([...skills, enteredSkillText]);
    // second way for updating
    setSkills((currentSkills) => [
      ...currentSkills,
      { text: enteredSkillText, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your skills!"
          // here we do not add parenthesis this means we do not execute this function here
          // I want that this function execute when text changes in textInput
          onChangeText={skillsInputHandler}
        />
        <Button title="Add Skill" onPress={addSkillsHandler} />
      </View>
      <View style={styles.skillssContainer}>
        {/* <ScrollView>
          {skills.map((skill) => (
            <View style={styles.skillItem}>
              <Text style={styles.skillItemText} key={skill.id}>
                {skill}
              </Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={skills}
          renderItem={(itemData) => {
            return (
              <View style={styles.skillItem}>
                <Text style={styles.skillItemText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

// style sheet object
const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#DAD5EE",
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#311B92",
  },

  textInput: {
    borderWidth: 2,
    borderColor: "#311B92",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  skillssContainer: {
    flex: 4,
  },
  skillItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#6e0aff",
  },
  skillItemText: {
    color: "white",
  },
});
