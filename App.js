import { StatusBar } from "expo-status-bar";

// text and wiev are core compnents
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

// regular functioanal component,  App is root component
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your skills!" />
        <Button title="Add Skill" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of skills...</Text>
      </View>
    </View>
  );
}

// style sheet object
const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "",
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
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
