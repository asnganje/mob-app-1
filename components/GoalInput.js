import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput ({ onAddGoal, visible, modalToggler}) {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText) 
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} 
          placeholder='Your course goals!'
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title='Add a goal'
              onPress={()=>{
                onAddGoal(enteredGoalText); 
                setEnteredGoalText("");
              }
              }
            />

          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={modalToggler}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center",
    gap:"2%",
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"
  },
  textInput: {
    borderWidth:1,
    borderColor:"#cccccc",
    width:"70%",
    marginRight:8,
    padding:8
  },
  button: {
    width:"40%",
    marginHorizontal:8
  },
  buttons: {
    flexDirection:"row"
  }
})