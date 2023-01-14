// text and view are core compnents
// ScrollView allows you to create scrolable list or text
import {
  StyleSheet,
  View,
  // ScrollView,
  FlatList,
  Button,
} from "react-native";

import { StatusBar } from "expo-status-bar";
// import useState hook
import { useState } from "react";
// regular functioanal component,  App is root component
import SkillItem from "./components/SkillItem";
import SkillInput from "./components/SkillInput";

export default function App() {
  // create other state to manage list of skills, it will be initially an empty array
  const [skills, setSkills] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // create modal function

  function startAddSkillHandler() {
    setModalIsVisible(true);
  }

  // close modal

  function endAddSkillHandler() {
    setModalIsVisible(false);
  }

  // this function addSkillsHandler() which should be fired when this button here is clicked
  // in this function we will receive the value automatically

  function addSkillsHandler(enteredSkillText) {
    // it will reach the state
    console.log(enteredSkillText);
    // create a new array and use spread operator to spread my existing skills and add a new skill
    // setSkills([...skills, enteredSkillText]);
    // second way for updating
    setSkills((currentSkills) => [
      ...currentSkills,
      { text: enteredSkillText, id: Math.random().toString() },
    ]);
    endAddSkillHandler();
  }

  // DELETE ITEM

  function deleteSkillHandler(id) {
    setSkills((currentSkills) => {
      return currentSkills.filter((skill) => skill.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add new skill"
            color="white"
            onPress={startAddSkillHandler}
          />
        </View>
        <SkillInput
          visible={modalIsVisible}
          onAddSkill={addSkillsHandler}
          onCancel={endAddSkillHandler}
        />
        <View style={styles.skillssContainer}>
          <FlatList
            data={skills}
            renderItem={(itemData) => {
              return (
                <SkillItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteSkillHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
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

  skillssContainer: {
    flex: 4,
  },
  buttonContainer: {
    backgroundColor: "#66CDAA",
    marginHorizontal: 8,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
});
